import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StreetviewpublishPhotoSequenceStartUploadQueryParams extends SpeakeasyBase {
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
export declare class StreetviewpublishPhotoSequenceStartUploadSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StreetviewpublishPhotoSequenceStartUploadRequest extends SpeakeasyBase {
    queryParams: StreetviewpublishPhotoSequenceStartUploadQueryParams;
    request?: Map<string, any>;
    security: StreetviewpublishPhotoSequenceStartUploadSecurity;
}
export declare class StreetviewpublishPhotoSequenceStartUploadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    uploadRef?: shared.UploadRef;
}
