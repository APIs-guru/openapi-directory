import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
/**
 * The collection period is a date range which includes the `first` and `last` day.
**/
export declare class CollectionPeriod extends SpeakeasyBase {
    firstDate?: Date;
    lastDate?: Date;
}
