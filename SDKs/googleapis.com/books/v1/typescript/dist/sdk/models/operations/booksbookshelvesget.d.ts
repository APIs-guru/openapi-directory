import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksBookshelvesGetPathParams extends SpeakeasyBase {
    shelf: string;
    userId: string;
}
export declare class BooksBookshelvesGetQueryParams extends SpeakeasyBase {
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
export declare class BooksBookshelvesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksBookshelvesGetRequest extends SpeakeasyBase {
    pathParams: BooksBookshelvesGetPathParams;
    queryParams: BooksBookshelvesGetQueryParams;
    security: BooksBookshelvesGetSecurity;
}
export declare class BooksBookshelvesGetResponse extends SpeakeasyBase {
    bookshelf?: shared.Bookshelf;
    contentType: string;
    statusCode: number;
}
