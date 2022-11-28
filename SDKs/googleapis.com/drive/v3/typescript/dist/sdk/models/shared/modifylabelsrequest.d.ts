import { SpeakeasyBase } from "../../../internal/utils";
import { LabelModification } from "./labelmodification";
/**
 * A request to modify the set of labels on a file. This request may contain many modifications that will either all succeed or all fail transactionally.
**/
export declare class ModifyLabelsRequest extends SpeakeasyBase {
    kind?: string;
    labelModifications?: LabelModification[];
}
