import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRemoteImagesPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetRemoteImagesQueryParams extends SpeakeasyBase {
    includeAllLanguages?: boolean;
    limit?: number;
    providerName?: string;
    startIndex?: number;
    type?: shared.ImageTypeEnum;
}
export declare class GetRemoteImagesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetRemoteImagesRequest extends SpeakeasyBase {
    pathParams: GetRemoteImagesPathParams;
    queryParams: GetRemoteImagesQueryParams;
    security: GetRemoteImagesSecurity;
}
export declare class GetRemoteImagesResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    remoteImageResult?: shared.RemoteImageResult;
    statusCode: number;
}
