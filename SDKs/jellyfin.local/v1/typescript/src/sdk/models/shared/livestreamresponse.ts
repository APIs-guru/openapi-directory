import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MediaSourceInfo } from "./mediasourceinfo";



export class LiveStreamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MediaSource" })
  mediaSource?: MediaSourceInfo;
}
