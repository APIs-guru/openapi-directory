import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StreetviewpublishPhotoCreateQueryParams extends SpeakeasyBase {
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
export declare class StreetviewpublishPhotoCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StreetviewpublishPhotoCreateRequest extends SpeakeasyBase {
    queryParams: StreetviewpublishPhotoCreateQueryParams;
    request?: shared.PhotoInput;
    security: StreetviewpublishPhotoCreateSecurity;
}
export declare class StreetviewpublishPhotoCreateResponse extends SpeakeasyBase {
    contentType: string;
    photo?: shared.Photo;
    statusCode: number;
}
