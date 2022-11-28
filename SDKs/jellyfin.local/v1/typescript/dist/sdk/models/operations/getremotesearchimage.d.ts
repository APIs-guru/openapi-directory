import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRemoteSearchImageQueryParams extends SpeakeasyBase {
    imageUrl: string;
    providerName: string;
}
export declare class GetRemoteSearchImageSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetRemoteSearchImageRequest extends SpeakeasyBase {
    queryParams: GetRemoteSearchImageQueryParams;
    security: GetRemoteSearchImageSecurity;
}
export declare class GetRemoteSearchImageResponse extends SpeakeasyBase {
    contentType: string;
    getRemoteSearchImage200ImageWildcardBinaryString?: Uint8Array;
    statusCode: number;
}
