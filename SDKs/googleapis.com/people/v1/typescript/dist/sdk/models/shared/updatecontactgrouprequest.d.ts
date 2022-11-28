import { SpeakeasyBase } from "../../../internal/utils";
import { ContactGroupInput } from "./contactgroup";
/**
 * A request to update an existing user contact group. All updated fields will be replaced.
**/
export declare class UpdateContactGroupRequestInput extends SpeakeasyBase {
    contactGroup?: ContactGroupInput;
    readGroupFields?: string;
    updateGroupFields?: string;
}
