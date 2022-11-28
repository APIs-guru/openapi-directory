import { SpeakeasyBase } from "../../../internal/utils";
import { VideoFormat } from "./videoformat";
/**
 * Video Format List Response
**/
export declare class VideoFormatsListResponse extends SpeakeasyBase {
    kind?: string;
    videoFormats?: VideoFormat[];
}
