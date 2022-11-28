import { SpeakeasyBase } from "../../../internal/utils";
import { VideoCategorySnippet } from "./videocategorysnippet";
/**
 * A *videoCategory* resource identifies a category that has been or could be associated with uploaded videos.
**/
export declare class VideoCategory extends SpeakeasyBase {
    etag?: string;
    id?: string;
    kind?: string;
    snippet?: VideoCategorySnippet;
}
