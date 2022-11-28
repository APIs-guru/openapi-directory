import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PlusPeopleListCollectionEnum {
    Connected = "connected",
    Visible = "visible"
}
export declare class PlusPeopleListPathParams extends SpeakeasyBase {
    collection: PlusPeopleListCollectionEnum;
    userId: string;
}
export declare enum PlusPeopleListOrderByEnum {
    Alphabetical = "alphabetical",
    Best = "best"
}
export declare class PlusPeopleListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    orderBy?: PlusPeopleListOrderByEnum;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class PlusPeopleListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PlusPeopleListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PlusPeopleListSecurity extends SpeakeasyBase {
    option1?: PlusPeopleListSecurityOption1;
    option2?: PlusPeopleListSecurityOption2;
}
export declare class PlusPeopleListRequest extends SpeakeasyBase {
    pathParams: PlusPeopleListPathParams;
    queryParams: PlusPeopleListQueryParams;
    security: PlusPeopleListSecurity;
}
export declare class PlusPeopleListResponse extends SpeakeasyBase {
    contentType: string;
    peopleFeed?: shared.PeopleFeed;
    statusCode: number;
}
