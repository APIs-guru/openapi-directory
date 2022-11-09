import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SubscriptionCategoryEnum } from "./subscriptioncategoryenum";
import { OrganizationRepresentation } from "./organizationrepresentation";
import { OrganizationRepresentation } from "./organizationrepresentation";
import { ConsentManagerPatientId } from "./consentmanagerpatientid";
import { SubscriptionPeriod } from "./subscriptionperiod";
import { UsePurpose } from "./usepurpose";


export class SubscriptionRequestSubscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=categories" })
  categories: SubscriptionCategoryEnum[];

  @Metadata({ data: "json, name=hips", elemType: shared.OrganizationRepresentation })
  hips?: OrganizationRepresentation[];

  @Metadata({ data: "json, name=hiu" })
  hiu: OrganizationRepresentation;

  @Metadata({ data: "json, name=patient" })
  patient: ConsentManagerPatientId;

  @Metadata({ data: "json, name=period" })
  period: SubscriptionPeriod;

  @Metadata({ data: "json, name=purpose" })
  purpose: UsePurpose;
}


export class SubscriptionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=subscription" })
  subscription: SubscriptionRequestSubscription;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
