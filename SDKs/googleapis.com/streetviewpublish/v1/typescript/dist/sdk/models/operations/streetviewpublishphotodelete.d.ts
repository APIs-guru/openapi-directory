import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StreetviewpublishPhotoDeletePathParams extends SpeakeasyBase {
    photoId: string;
}
export declare class StreetviewpublishPhotoDeleteQueryParams extends SpeakeasyBase {
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
export declare class StreetviewpublishPhotoDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StreetviewpublishPhotoDeleteRequest extends SpeakeasyBase {
    pathParams: StreetviewpublishPhotoDeletePathParams;
    queryParams: StreetviewpublishPhotoDeleteQueryParams;
    security: StreetviewpublishPhotoDeleteSecurity;
}
export declare class StreetviewpublishPhotoDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
