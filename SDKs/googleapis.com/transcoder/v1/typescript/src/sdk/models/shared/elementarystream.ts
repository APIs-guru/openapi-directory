import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AudioStream } from "./audiostream";
import { TextStream } from "./textstream";
import { VideoStream } from "./videostream";



// ElementaryStream
/** 
 * Encoding of an input file such as an audio, video, or text track. Elementary streams must be packaged before mapping and sharing between different output formats.
**/
export class ElementaryStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioStream" })
  audioStream?: AudioStream;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=textStream" })
  textStream?: TextStream;

  @SpeakeasyMetadata({ data: "json, name=videoStream" })
  videoStream?: VideoStream;
}
