import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateSlidesPositionRequest
/** 
 * Updates the position of slides in the presentation.
**/
export class UpdateSlidesPositionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=insertionIndex" })
  insertionIndex?: number;

  @Metadata({ data: "json, name=slideObjectIds" })
  slideObjectIds?: string[];
}
