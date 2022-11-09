import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerProjectsSearchQueryParams extends SpeakeasyBase {
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
    query?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudresourcemanagerProjectsSearchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsSearchRequest extends SpeakeasyBase {
    queryParams: CloudresourcemanagerProjectsSearchQueryParams;
    security: CloudresourcemanagerProjectsSearchSecurity;
}
export declare class CloudresourcemanagerProjectsSearchResponse extends SpeakeasyBase {
    contentType: string;
    searchProjectsResponse?: shared.SearchProjectsResponse;
    statusCode: number;
}
