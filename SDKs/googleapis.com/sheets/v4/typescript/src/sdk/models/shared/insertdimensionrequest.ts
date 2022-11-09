import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionRange } from "./dimensionrange";


// InsertDimensionRequest
/** 
 * Inserts rows or columns in a sheet at a particular index.
**/
export class InsertDimensionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=inheritFromBefore" })
  inheritFromBefore?: boolean;

  @Metadata({ data: "json, name=range" })
  range?: DimensionRange;
}
