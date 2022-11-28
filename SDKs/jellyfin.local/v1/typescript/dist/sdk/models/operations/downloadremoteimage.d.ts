import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DownloadRemoteImagePathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class DownloadRemoteImageQueryParams extends SpeakeasyBase {
    imageUrl?: string;
    type: shared.ImageTypeEnum;
}
export declare class DownloadRemoteImageSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class DownloadRemoteImageRequest extends SpeakeasyBase {
    pathParams: DownloadRemoteImagePathParams;
    queryParams: DownloadRemoteImageQueryParams;
    security: DownloadRemoteImageSecurity;
}
export declare class DownloadRemoteImageResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
