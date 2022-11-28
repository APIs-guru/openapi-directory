import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationRepresentation } from "./organizationrepresentation";
import { ConsentManagerPatientId } from "./consentmanagerpatientid";
import { HiuSubscriptionContext } from "./hiusubscriptioncontext";
export declare class HiuSubscription extends SpeakeasyBase {
    hiu: OrganizationRepresentation;
    id: string;
    patient: ConsentManagerPatientId;
    sources: HiuSubscriptionContext[];
}
