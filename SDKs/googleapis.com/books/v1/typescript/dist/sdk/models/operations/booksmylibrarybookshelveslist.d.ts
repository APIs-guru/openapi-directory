import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksMylibraryBookshelvesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    source?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BooksMylibraryBookshelvesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksMylibraryBookshelvesListRequest extends SpeakeasyBase {
    queryParams: BooksMylibraryBookshelvesListQueryParams;
    security: BooksMylibraryBookshelvesListSecurity;
}
export declare class BooksMylibraryBookshelvesListResponse extends SpeakeasyBase {
    bookshelves?: shared.Bookshelves;
    contentType: string;
    statusCode: number;
}
