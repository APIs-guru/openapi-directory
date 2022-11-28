import { SpeakeasyBase } from "../../../internal/utils";
import { ExtendedValue } from "./extendedvalue";
/**
 * Information about which values in a pivot group should be used for sorting.
**/
export declare class PivotGroupSortValueBucket extends SpeakeasyBase {
    buckets?: ExtendedValue[];
    valuesIndex?: number;
}
