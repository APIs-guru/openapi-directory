import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AudioVideoOffset
/** 
 * The length an audio or a video has been played.
**/
export class AudioVideoOffset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage?: string;

  @SpeakeasyMetadata({ data: "json, name=seconds" })
  seconds?: string;
}
