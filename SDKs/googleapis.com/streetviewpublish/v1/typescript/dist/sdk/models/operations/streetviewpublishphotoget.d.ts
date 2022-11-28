import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StreetviewpublishPhotoGetPathParams extends SpeakeasyBase {
    photoId: string;
}
export declare enum StreetviewpublishPhotoGetViewEnum {
    Basic = "BASIC",
    IncludeDownloadUrl = "INCLUDE_DOWNLOAD_URL"
}
export declare class StreetviewpublishPhotoGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: StreetviewpublishPhotoGetViewEnum;
}
export declare class StreetviewpublishPhotoGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StreetviewpublishPhotoGetRequest extends SpeakeasyBase {
    pathParams: StreetviewpublishPhotoGetPathParams;
    queryParams: StreetviewpublishPhotoGetQueryParams;
    security: StreetviewpublishPhotoGetSecurity;
}
export declare class StreetviewpublishPhotoGetResponse extends SpeakeasyBase {
    contentType: string;
    photo?: shared.Photo;
    statusCode: number;
}
