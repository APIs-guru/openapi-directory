import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataFilter } from "./datafilter";
import { ValueRange } from "./valuerange";


// MatchedValueRange
/** 
 * A value range that was matched by one or more data filers.
**/
export class MatchedValueRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataFilters", elemType: shared.DataFilter })
  dataFilters?: DataFilter[];

  @Metadata({ data: "json, name=valueRange" })
  valueRange?: ValueRange;
}
