import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionCategoryEnum } from "./subscriptioncategoryenum";
import { OrganizationRepresentation } from "./organizationrepresentation";
import { ConsentManagerPatientId } from "./consentmanagerpatientid";
import { SubscriptionPeriod } from "./subscriptionperiod";
import { UsePurpose } from "./usepurpose";
export declare class SubscriptionRequestSubscription extends SpeakeasyBase {
    categories: SubscriptionCategoryEnum[];
    hips?: OrganizationRepresentation[];
    hiu: OrganizationRepresentation;
    patient: ConsentManagerPatientId;
    period: SubscriptionPeriod;
    purpose: UsePurpose;
}
export declare class SubscriptionRequest extends SpeakeasyBase {
    requestId: string;
    subscription: SubscriptionRequestSubscription;
    timestamp: Date;
}
