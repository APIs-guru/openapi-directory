import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * Representation of a label field.
**/
export declare class LabelField extends SpeakeasyBase {
    dateString?: Date[];
    id?: string;
    integer?: string[];
    kind?: string;
    selection?: string[];
    text?: string[];
    user?: User[];
    valueType?: string;
}
