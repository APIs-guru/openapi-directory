import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PlusPeopleSearchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    language?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    query: string;
    quotaUser?: string;
    userIp?: string;
}
export declare class PlusPeopleSearchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PlusPeopleSearchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PlusPeopleSearchSecurity extends SpeakeasyBase {
    option1?: PlusPeopleSearchSecurityOption1;
    option2?: PlusPeopleSearchSecurityOption2;
}
export declare class PlusPeopleSearchRequest extends SpeakeasyBase {
    queryParams: PlusPeopleSearchQueryParams;
    security: PlusPeopleSearchSecurity;
}
export declare class PlusPeopleSearchResponse extends SpeakeasyBase {
    contentType: string;
    peopleFeed?: shared.PeopleFeed;
    statusCode: number;
}
