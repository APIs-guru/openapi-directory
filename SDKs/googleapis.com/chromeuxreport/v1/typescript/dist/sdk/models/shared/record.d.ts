import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionPeriod } from "./collectionperiod";
import { Key } from "./key";
import { Metric } from "./metric";
/**
 * Record is a single Chrome UX report data record. It contains use experience statistics for a single url pattern and set of dimensions.
**/
export declare class Record extends SpeakeasyBase {
    collectionPeriod?: CollectionPeriod;
    key?: Key;
    metrics?: Map<string, Metric>;
}
