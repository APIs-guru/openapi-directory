import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionRange } from "./dimensionrange";
import { GridRange } from "./gridrange";


// DeleteDuplicatesRequest
/** 
 * Removes rows within this range that contain values in the specified columns that are duplicates of values in any previous row. Rows with identical values but different letter cases, formatting, or formulas are considered to be duplicates. This request also removes duplicate rows hidden from view (for example, due to a filter). When removing duplicates, the first instance of each duplicate row scanning from the top downwards is kept in the resulting range. Content outside of the specified range isn't removed, and rows considered duplicates do not have to be adjacent to each other in the range.
**/
export class DeleteDuplicatesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=comparisonColumns", elemType: shared.DimensionRange })
  comparisonColumns?: DimensionRange[];

  @Metadata({ data: "json, name=range" })
  range?: GridRange;
}
