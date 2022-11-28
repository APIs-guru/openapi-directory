import { SpeakeasyBase } from "../../../internal/utils";
import { EventCategoryDetail } from "./eventcategorydetail";
import { OrganizationRepresentation } from "./organizationrepresentation";
import { ConsentManagerPatientId } from "./consentmanagerpatientid";
export declare class HiuSubscriptionEventContent extends SpeakeasyBase {
    context: EventCategoryDetail[];
    hip: OrganizationRepresentation;
    patient: ConsentManagerPatientId;
}
