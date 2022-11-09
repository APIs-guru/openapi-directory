import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AudioVideoOffset
/** 
 * The length an audio or a video has been played.
**/
export class AudioVideoOffset extends SpeakeasyBase {
  @Metadata({ data: "json, name=percentage" })
  percentage?: string;

  @Metadata({ data: "json, name=seconds" })
  seconds?: string;
}
