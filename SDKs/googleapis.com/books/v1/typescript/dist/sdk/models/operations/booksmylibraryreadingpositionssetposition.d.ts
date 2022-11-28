import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksMylibraryReadingpositionsSetPositionPathParams extends SpeakeasyBase {
    volumeId: string;
}
export declare enum BooksMylibraryReadingpositionsSetPositionActionEnum {
    ActionUndefined = "ACTION_UNDEFINED",
    Bookmark = "bookmark",
    Chapter = "chapter",
    NextPage = "next-page",
    PrevPage = "prev-page",
    Scroll = "scroll",
    Search = "search"
}
export declare class BooksMylibraryReadingpositionsSetPositionQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    action?: BooksMylibraryReadingpositionsSetPositionActionEnum;
    alt?: shared.AltEnum;
    callback?: string;
    contentVersion?: string;
    deviceCookie?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    position: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    source?: string;
    timestamp: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BooksMylibraryReadingpositionsSetPositionSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksMylibraryReadingpositionsSetPositionRequest extends SpeakeasyBase {
    pathParams: BooksMylibraryReadingpositionsSetPositionPathParams;
    queryParams: BooksMylibraryReadingpositionsSetPositionQueryParams;
    security: BooksMylibraryReadingpositionsSetPositionSecurity;
}
export declare class BooksMylibraryReadingpositionsSetPositionResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
