import { SpeakeasyBase } from "../../../internal/utils";
import { PersonInput } from "./person";
/**
 * A wrapper that contains the person data to populate a newly created source.
**/
export declare class ContactToCreateInput extends SpeakeasyBase {
    contactPerson?: PersonInput;
}
