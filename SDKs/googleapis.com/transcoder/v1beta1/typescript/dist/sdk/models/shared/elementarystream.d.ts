import { SpeakeasyBase } from "../../../internal/utils";
import { AudioStream } from "./audiostream";
import { TextStream } from "./textstream";
import { VideoStream } from "./videostream";
/**
 * Encoding of an input file such as an audio, video, or text track. Elementary streams must be packaged before mapping and sharing between different output formats.
**/
export declare class ElementaryStream extends SpeakeasyBase {
    audioStream?: AudioStream;
    key?: string;
    textStream?: TextStream;
    videoStream?: VideoStream;
}
