import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Item } from "./item";
/**
 * Rich Results items grouped by type.
**/
export declare class DetectedItems extends SpeakeasyBase {
    items?: Item[];
    richResultType?: string;
}
