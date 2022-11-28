import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksMylibraryBookshelvesVolumesListPathParams extends SpeakeasyBase {
    shelf: string;
}
export declare enum BooksMylibraryBookshelvesVolumesListProjectionEnum {
    ProjectionUndefined = "PROJECTION_UNDEFINED",
    Full = "FULL",
    Lite = "LITE"
}
export declare class BooksMylibraryBookshelvesVolumesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    country?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    projection?: BooksMylibraryBookshelvesVolumesListProjectionEnum;
    q?: string;
    quotaUser?: string;
    showPreorders?: boolean;
    source?: string;
    startIndex?: number;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BooksMylibraryBookshelvesVolumesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksMylibraryBookshelvesVolumesListRequest extends SpeakeasyBase {
    pathParams: BooksMylibraryBookshelvesVolumesListPathParams;
    queryParams: BooksMylibraryBookshelvesVolumesListQueryParams;
    security: BooksMylibraryBookshelvesVolumesListSecurity;
}
export declare class BooksMylibraryBookshelvesVolumesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    volumes?: shared.Volumes;
}
