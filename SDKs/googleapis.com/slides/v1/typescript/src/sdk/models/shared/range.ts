import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RangeTypeEnum {
    RangeTypeUnspecified = "RANGE_TYPE_UNSPECIFIED",
    FixedRange = "FIXED_RANGE",
    FromStartIndex = "FROM_START_INDEX",
    All = "ALL"
}


// Range
/** 
 * Specifies a contiguous range of an indexed collection, such as characters in text.
**/
export class Range extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endIndex" })
  endIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: RangeTypeEnum;
}
