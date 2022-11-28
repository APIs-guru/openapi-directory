import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlaybackErrorCodeEnum } from "./playbackerrorcodeenum";
import { MediaSourceInfo } from "./mediasourceinfo";



// PlaybackInfoResponse
/** 
 * Class PlaybackInfoResponse.
**/
export class PlaybackInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: PlaybackErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=MediaSources", elemType: MediaSourceInfo })
  mediaSources?: MediaSourceInfo[];

  @SpeakeasyMetadata({ data: "json, name=PlaySessionId" })
  playSessionId?: string;
}
