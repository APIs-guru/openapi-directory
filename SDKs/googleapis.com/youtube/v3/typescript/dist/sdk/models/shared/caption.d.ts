import { SpeakeasyBase } from "../../../internal/utils";
import { CaptionSnippet } from "./captionsnippet";
/**
 * A *caption* resource represents a YouTube caption track. A caption track is associated with exactly one YouTube video.
**/
export declare class Caption extends SpeakeasyBase {
    etag?: string;
    id?: string;
    kind?: string;
    snippet?: CaptionSnippet;
}
