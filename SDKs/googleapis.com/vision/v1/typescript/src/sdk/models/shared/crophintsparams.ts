import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CropHintsParams
/** 
 * Parameters for crop hints annotation request.
**/
export class CropHintsParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=aspectRatios" })
  aspectRatios?: number[];
}
