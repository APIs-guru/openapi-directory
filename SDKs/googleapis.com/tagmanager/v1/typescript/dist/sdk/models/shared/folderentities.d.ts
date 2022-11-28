import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { Trigger } from "./trigger";
import { Variable } from "./variable";
/**
 * Represents a Google Tag Manager Folder's contents.
**/
export declare class FolderEntities extends SpeakeasyBase {
    tag?: Tag[];
    trigger?: Trigger[];
    variable?: Variable[];
}
