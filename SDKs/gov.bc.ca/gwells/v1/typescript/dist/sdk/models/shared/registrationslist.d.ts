import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationList } from "./applicationlist";
import { OrganizationList } from "./organizationlist";
export declare class RegistrationsList extends SpeakeasyBase {
    activity?: string;
    activityDescription?: string;
    applications?: ApplicationList[];
    organization: OrganizationList;
    registrationNo?: string;
}
