import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionCategoryEnum } from "./subscriptioncategoryenum";
import { OrganizationRepresentation } from "./organizationrepresentation";
import { ConsentManagerPatientId } from "./consentmanagerpatientid";
import { SubscriptionPeriod } from "./subscriptionperiod";
import { UsePurpose } from "./usepurpose";



export class SubscriptionRequestSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories: SubscriptionCategoryEnum[];

  @SpeakeasyMetadata({ data: "json, name=hips", elemType: OrganizationRepresentation })
  hips?: OrganizationRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=hiu" })
  hiu: OrganizationRepresentation;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient: ConsentManagerPatientId;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period: SubscriptionPeriod;

  @SpeakeasyMetadata({ data: "json, name=purpose" })
  purpose: UsePurpose;
}


export class SubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription: SubscriptionRequestSubscription;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
