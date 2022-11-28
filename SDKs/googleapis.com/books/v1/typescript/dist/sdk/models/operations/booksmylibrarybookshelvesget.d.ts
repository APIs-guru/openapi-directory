import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksMylibraryBookshelvesGetPathParams extends SpeakeasyBase {
    shelf: string;
}
export declare class BooksMylibraryBookshelvesGetQueryParams extends SpeakeasyBase {
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
export declare class BooksMylibraryBookshelvesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksMylibraryBookshelvesGetRequest extends SpeakeasyBase {
    pathParams: BooksMylibraryBookshelvesGetPathParams;
    queryParams: BooksMylibraryBookshelvesGetQueryParams;
    security: BooksMylibraryBookshelvesGetSecurity;
}
export declare class BooksMylibraryBookshelvesGetResponse extends SpeakeasyBase {
    bookshelf?: shared.Bookshelf;
    contentType: string;
    statusCode: number;
}
