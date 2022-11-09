import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MediaSourceInfo } from "./mediasourceinfo";


export class LiveStreamResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MediaSource" })
  mediaSource?: MediaSourceInfo;
}
