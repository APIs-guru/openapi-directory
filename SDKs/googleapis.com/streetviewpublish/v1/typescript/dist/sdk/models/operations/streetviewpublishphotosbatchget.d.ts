import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StreetviewpublishPhotosBatchGetViewEnum {
    Basic = "BASIC",
    IncludeDownloadUrl = "INCLUDE_DOWNLOAD_URL"
}
export declare class StreetviewpublishPhotosBatchGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    photoIds?: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: StreetviewpublishPhotosBatchGetViewEnum;
}
export declare class StreetviewpublishPhotosBatchGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StreetviewpublishPhotosBatchGetRequest extends SpeakeasyBase {
    queryParams: StreetviewpublishPhotosBatchGetQueryParams;
    security: StreetviewpublishPhotosBatchGetSecurity;
}
export declare class StreetviewpublishPhotosBatchGetResponse extends SpeakeasyBase {
    batchGetPhotosResponse?: shared.BatchGetPhotosResponse;
    contentType: string;
    statusCode: number;
}
