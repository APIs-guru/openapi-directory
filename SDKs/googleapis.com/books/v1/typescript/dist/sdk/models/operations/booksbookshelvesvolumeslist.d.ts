import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksBookshelvesVolumesListPathParams extends SpeakeasyBase {
    shelf: string;
    userId: string;
}
export declare class BooksBookshelvesVolumesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    showPreorders?: boolean;
    source?: string;
    startIndex?: number;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BooksBookshelvesVolumesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksBookshelvesVolumesListRequest extends SpeakeasyBase {
    pathParams: BooksBookshelvesVolumesListPathParams;
    queryParams: BooksBookshelvesVolumesListQueryParams;
    security: BooksBookshelvesVolumesListSecurity;
}
export declare class BooksBookshelvesVolumesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    volumes?: shared.Volumes;
}
