import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VideoPlayer
/** 
 * Player to be used for a video playback.
**/
export class VideoPlayer extends SpeakeasyBase {
  @Metadata({ data: "json, name=embedHeight" })
  embedHeight?: string;

  @Metadata({ data: "json, name=embedHtml" })
  embedHtml?: string;

  @Metadata({ data: "json, name=embedWidth" })
  embedWidth?: string;
}
