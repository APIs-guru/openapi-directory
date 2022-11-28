import { SpeakeasyBase } from "../../../internal/utils";
import { ContactGroupInput } from "./contactgroup";
/**
 * A request to create a new contact group.
**/
export declare class CreateContactGroupRequestInput extends SpeakeasyBase {
    contactGroup?: ContactGroupInput;
    readGroupFields?: string;
}
