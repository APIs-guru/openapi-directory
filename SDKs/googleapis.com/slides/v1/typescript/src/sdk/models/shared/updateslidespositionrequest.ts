import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateSlidesPositionRequest
/** 
 * Updates the position of slides in the presentation.
**/
export class UpdateSlidesPositionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=insertionIndex" })
  insertionIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=slideObjectIds" })
  slideObjectIds?: string[];
}
