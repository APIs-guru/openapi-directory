import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlaybackErrorCodeEnum } from "./playbackerrorcodeenum";
import { MediaSourceInfo } from "./mediasourceinfo";


// PlaybackInfoResponse
/** 
 * Class PlaybackInfoResponse.
**/
export class PlaybackInfoResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: PlaybackErrorCodeEnum;

  @Metadata({ data: "json, name=MediaSources", elemType: shared.MediaSourceInfo })
  mediaSources?: MediaSourceInfo[];

  @Metadata({ data: "json, name=PlaySessionId" })
  playSessionId?: string;
}
