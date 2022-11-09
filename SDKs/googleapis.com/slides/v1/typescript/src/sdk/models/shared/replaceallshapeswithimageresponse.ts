import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReplaceAllShapesWithImageResponse
/** 
 * The result of replacing shapes with an image.
**/
export class ReplaceAllShapesWithImageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=occurrencesChanged" })
  occurrencesChanged?: number;
}
