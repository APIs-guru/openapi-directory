import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReplaceAllShapesWithImageResponse
/** 
 * The result of replacing shapes with an image.
**/
export class ReplaceAllShapesWithImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=occurrencesChanged" })
  occurrencesChanged?: number;
}
