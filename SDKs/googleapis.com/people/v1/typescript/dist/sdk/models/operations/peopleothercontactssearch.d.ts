import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PeopleOtherContactsSearchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    prettyPrint?: boolean;
    query?: string;
    quotaUser?: string;
    readMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PeopleOtherContactsSearchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeopleOtherContactsSearchRequest extends SpeakeasyBase {
    queryParams: PeopleOtherContactsSearchQueryParams;
    security: PeopleOtherContactsSearchSecurity;
}
export declare class PeopleOtherContactsSearchResponse extends SpeakeasyBase {
    contentType: string;
    searchResponse?: shared.SearchResponse;
    statusCode: number;
}
