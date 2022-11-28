import { SpeakeasyBase } from "../../../internal/utils";
import { Thumbnail } from "./thumbnail";
/**
 * Internal representation of thumbnails for a YouTube resource.
**/
export declare class ThumbnailDetails extends SpeakeasyBase {
    high?: Thumbnail;
    maxres?: Thumbnail;
    medium?: Thumbnail;
    standard?: Thumbnail;
}
