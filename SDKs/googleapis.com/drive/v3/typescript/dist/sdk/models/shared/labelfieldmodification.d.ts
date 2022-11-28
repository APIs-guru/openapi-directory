import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A modification to a label's field.
**/
export declare class LabelFieldModification extends SpeakeasyBase {
    fieldId?: string;
    kind?: string;
    setDateValues?: Date[];
    setIntegerValues?: string[];
    setSelectionValues?: string[];
    setTextValues?: string[];
    setUserValues?: string[];
    unsetValues?: boolean;
}
