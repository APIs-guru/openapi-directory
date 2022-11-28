import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersAssetsUploadPathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersAssetsUploadQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoAdvertisersAssetsUploadSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersAssetsUploadRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersAssetsUploadPathParams;
    queryParams: DisplayvideoAdvertisersAssetsUploadQueryParams;
    request?: Uint8Array;
    security: DisplayvideoAdvertisersAssetsUploadSecurity;
}
export declare class DisplayvideoAdvertisersAssetsUploadResponse extends SpeakeasyBase {
    contentType: string;
    createAssetResponse?: shared.CreateAssetResponse;
    statusCode: number;
}
