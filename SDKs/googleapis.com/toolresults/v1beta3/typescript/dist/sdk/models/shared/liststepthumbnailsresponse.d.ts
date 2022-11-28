import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
/**
 * A response containing the thumbnails in a step.
**/
export declare class ListStepThumbnailsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    thumbnails?: Image[];
}
