import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CropHintsParams
/** 
 * Parameters for crop hints annotation request.
**/
export class CropHintsParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aspectRatios" })
  aspectRatios?: number[];
}
