import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VideoPlayer
/** 
 * Player to be used for a video playback.
**/
export class VideoPlayer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=embedHeight" })
  embedHeight?: string;

  @SpeakeasyMetadata({ data: "json, name=embedHtml" })
  embedHtml?: string;

  @SpeakeasyMetadata({ data: "json, name=embedWidth" })
  embedWidth?: string;
}
