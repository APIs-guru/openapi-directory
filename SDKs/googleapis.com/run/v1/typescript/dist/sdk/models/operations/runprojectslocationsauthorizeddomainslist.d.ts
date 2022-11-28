import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsAuthorizeddomainsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RunProjectsLocationsAuthorizeddomainsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RunProjectsLocationsAuthorizeddomainsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsAuthorizeddomainsListRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsAuthorizeddomainsListPathParams;
    queryParams: RunProjectsLocationsAuthorizeddomainsListQueryParams;
    security: RunProjectsLocationsAuthorizeddomainsListSecurity;
}
export declare class RunProjectsLocationsAuthorizeddomainsListResponse extends SpeakeasyBase {
    contentType: string;
    listAuthorizedDomainsResponse?: shared.ListAuthorizedDomainsResponse;
    statusCode: number;
}
