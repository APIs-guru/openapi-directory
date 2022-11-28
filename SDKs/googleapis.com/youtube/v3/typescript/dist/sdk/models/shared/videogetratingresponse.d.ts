import { SpeakeasyBase } from "../../../internal/utils";
import { VideoRating } from "./videorating";
export declare class VideoGetRatingResponse extends SpeakeasyBase {
    etag?: string;
    eventId?: string;
    items?: VideoRating[];
    kind?: string;
    visitorId?: string;
}
