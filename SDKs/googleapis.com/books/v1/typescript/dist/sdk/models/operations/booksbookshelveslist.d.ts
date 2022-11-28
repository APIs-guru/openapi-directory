import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksBookshelvesListPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class BooksBookshelvesListQueryParams extends SpeakeasyBase {
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
export declare class BooksBookshelvesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksBookshelvesListRequest extends SpeakeasyBase {
    pathParams: BooksBookshelvesListPathParams;
    queryParams: BooksBookshelvesListQueryParams;
    security: BooksBookshelvesListSecurity;
}
export declare class BooksBookshelvesListResponse extends SpeakeasyBase {
    bookshelves?: shared.Bookshelves;
    contentType: string;
    statusCode: number;
}
