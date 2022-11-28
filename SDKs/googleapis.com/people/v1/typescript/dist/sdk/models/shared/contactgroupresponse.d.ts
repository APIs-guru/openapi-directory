import { SpeakeasyBase } from "../../../internal/utils";
import { ContactGroup } from "./contactgroup";
import { Status } from "./status";
/**
 * The response for a specific contact group.
**/
export declare class ContactGroupResponse extends SpeakeasyBase {
    contactGroup?: ContactGroup;
    requestedResourceName?: string;
    status?: Status;
}
