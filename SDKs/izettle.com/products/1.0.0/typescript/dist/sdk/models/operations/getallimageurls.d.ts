import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllImageUrlsPathParams extends SpeakeasyBase {
    organizationUuid: string;
}
export declare class GetAllImageUrlsSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class GetAllImageUrlsRequest extends SpeakeasyBase {
    pathParams: GetAllImageUrlsPathParams;
    security: GetAllImageUrlsSecurity;
}
export declare class GetAllImageUrlsResponse extends SpeakeasyBase {
    contentType: string;
    libraryImagesResponse?: shared.LibraryImagesResponse;
    statusCode: number;
}
