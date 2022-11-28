import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";
import { ValueRange } from "./valuerange";



// MatchedValueRange
/** 
 * A value range that was matched by one or more data filers.
**/
export class MatchedValueRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataFilters", elemType: DataFilter })
  dataFilters?: DataFilter[];

  @SpeakeasyMetadata({ data: "json, name=valueRange" })
  valueRange?: ValueRange;
}
