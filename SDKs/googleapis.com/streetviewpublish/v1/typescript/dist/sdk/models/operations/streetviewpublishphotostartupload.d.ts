import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StreetviewpublishPhotoStartUploadQueryParams extends SpeakeasyBase {
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
export declare class StreetviewpublishPhotoStartUploadSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StreetviewpublishPhotoStartUploadRequest extends SpeakeasyBase {
    queryParams: StreetviewpublishPhotoStartUploadQueryParams;
    request?: Map<string, any>;
    security: StreetviewpublishPhotoStartUploadSecurity;
}
export declare class StreetviewpublishPhotoStartUploadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    uploadRef?: shared.UploadRef;
}
