import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RangeTypeEnum {
    RangeTypeUnspecified = "RANGE_TYPE_UNSPECIFIED"
,    FixedRange = "FIXED_RANGE"
,    FromStartIndex = "FROM_START_INDEX"
,    All = "ALL"
}


// Range
/** 
 * Specifies a contiguous range of an indexed collection, such as characters in text.
**/
export class Range extends SpeakeasyBase {
  @Metadata({ data: "json, name=endIndex" })
  endIndex?: number;

  @Metadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "json, name=type" })
  type?: RangeTypeEnum;
}
