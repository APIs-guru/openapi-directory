import { SpeakeasyBase } from "../../../internal/utils";
import { FilterAction } from "./filteraction";
import { FilterCriteria } from "./filtercriteria";
/**
 * Resource definition for Gmail filters. Filters apply to specific messages instead of an entire email thread.
**/
export declare class Filter extends SpeakeasyBase {
    action?: FilterAction;
    criteria?: FilterCriteria;
    id?: string;
}
