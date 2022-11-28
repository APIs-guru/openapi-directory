import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RangeTypeEnum {
    RangeTypeUnspecified = "RANGE_TYPE_UNSPECIFIED",
    FixedRange = "FIXED_RANGE",
    FromStartIndex = "FROM_START_INDEX",
    All = "ALL"
}
/**
 * Specifies a contiguous range of an indexed collection, such as characters in text.
**/
export declare class Range extends SpeakeasyBase {
    endIndex?: number;
    startIndex?: number;
    type?: RangeTypeEnum;
}
