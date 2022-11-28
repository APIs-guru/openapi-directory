import { SpeakeasyBase } from "../../../internal/utils";
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
export declare class CloudresourcemanagerProjectsSearchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsSearchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsSearchSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerProjectsSearchSecurityOption1;
    option2?: CloudresourcemanagerProjectsSearchSecurityOption2;
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
