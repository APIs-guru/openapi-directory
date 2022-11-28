import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionRange } from "./dimensionrange";



// DeleteDimensionRequest
/** 
 * Deletes the dimensions from the sheet.
**/
export class DeleteDimensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: DimensionRange;
}
