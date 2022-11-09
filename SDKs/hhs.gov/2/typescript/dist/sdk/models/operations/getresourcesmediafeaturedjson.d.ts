import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetResourcesMediaFeaturedJsonQueryParams extends SpeakeasyBase {
    max?: number;
    offset?: number;
    sort?: string;
}
export declare class GetResourcesMediaFeaturedJsonRequest extends SpeakeasyBase {
    queryParams: GetResourcesMediaFeaturedJsonQueryParams;
}
export declare class GetResourcesMediaFeaturedJsonResponse extends SpeakeasyBase {
    contentType: string;
    mediaItems?: shared.MediaItem[];
    statusCode: number;
}
