import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AudioStream } from "./audiostream";
import { TextStream } from "./textstream";
import { VideoStream } from "./videostream";


// ElementaryStream
/** 
 * Encoding of an input file such as an audio, video, or text track. Elementary streams must be packaged before mapping and sharing between different output formats.
**/
export class ElementaryStream extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioStream" })
  audioStream?: AudioStream;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=textStream" })
  textStream?: TextStream;

  @Metadata({ data: "json, name=videoStream" })
  videoStream?: VideoStream;
}
