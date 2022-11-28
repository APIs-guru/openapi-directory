import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksMylibraryReadingpositionsGetPathParams extends SpeakeasyBase {
    volumeId: string;
}
export declare class BooksMylibraryReadingpositionsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    contentVersion?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    source?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BooksMylibraryReadingpositionsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksMylibraryReadingpositionsGetRequest extends SpeakeasyBase {
    pathParams: BooksMylibraryReadingpositionsGetPathParams;
    queryParams: BooksMylibraryReadingpositionsGetQueryParams;
    security: BooksMylibraryReadingpositionsGetSecurity;
}
export declare class BooksMylibraryReadingpositionsGetResponse extends SpeakeasyBase {
    contentType: string;
    readingPosition?: shared.ReadingPosition;
    statusCode: number;
}
