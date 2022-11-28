import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StreetviewpublishPhotosListViewEnum {
    Basic = "BASIC",
    IncludeDownloadUrl = "INCLUDE_DOWNLOAD_URL"
}
export declare class StreetviewpublishPhotosListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: StreetviewpublishPhotosListViewEnum;
}
export declare class StreetviewpublishPhotosListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StreetviewpublishPhotosListRequest extends SpeakeasyBase {
    queryParams: StreetviewpublishPhotosListQueryParams;
    security: StreetviewpublishPhotosListSecurity;
}
export declare class StreetviewpublishPhotosListResponse extends SpeakeasyBase {
    contentType: string;
    listPhotosResponse?: shared.ListPhotosResponse;
    statusCode: number;
}
