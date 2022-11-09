import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionRange } from "./dimensionrange";


// DeleteDimensionRequest
/** 
 * Deletes the dimensions from the sheet.
**/
export class DeleteDimensionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=range" })
  range?: DimensionRange;
}
