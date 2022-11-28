import { SpeakeasyBase } from "../../../internal/utils";
import { Caption } from "./caption";
export declare class CaptionListResponse extends SpeakeasyBase {
    etag?: string;
    eventId?: string;
    items?: Caption[];
    kind?: string;
    visitorId?: string;
}
