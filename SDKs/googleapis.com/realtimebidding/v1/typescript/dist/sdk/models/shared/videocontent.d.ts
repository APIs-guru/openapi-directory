import { SpeakeasyBase } from "../../../internal/utils";
import { VideoMetadata } from "./videometadata";
/**
 * Video content for a creative.
**/
export declare class VideoContent extends SpeakeasyBase {
    videoMetadata?: VideoMetadata;
    videoUrl?: string;
    videoVastXml?: string;
}
