import { SpeakeasyBase } from "../../../internal/utils";
import { LabelFieldModification } from "./labelfieldmodification";
/**
 * A modification to a label on a file. A LabelModification can be used to apply a label to a file, update an existing label on a file, or remove a label from a file.
**/
export declare class LabelModification extends SpeakeasyBase {
    fieldModifications?: LabelFieldModification[];
    kind?: string;
    labelId?: string;
    removeLabel?: boolean;
}
