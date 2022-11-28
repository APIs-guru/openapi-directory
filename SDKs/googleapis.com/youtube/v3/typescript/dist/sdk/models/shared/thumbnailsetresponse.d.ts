import { SpeakeasyBase } from "../../../internal/utils";
import { ThumbnailDetails } from "./thumbnaildetails";
export declare class ThumbnailSetResponse extends SpeakeasyBase {
    etag?: string;
    eventId?: string;
    items?: ThumbnailDetails[];
    kind?: string;
    visitorId?: string;
}
