import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionRange } from "./dimensionrange";



// InsertDimensionRequest
/** 
 * Inserts rows or columns in a sheet at a particular index.
**/
export class InsertDimensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inheritFromBefore" })
  inheritFromBefore?: boolean;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: DimensionRange;
}
