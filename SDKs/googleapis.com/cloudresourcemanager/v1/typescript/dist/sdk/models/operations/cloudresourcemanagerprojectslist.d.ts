import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerProjectsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudresourcemanagerProjectsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsListSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerProjectsListSecurityOption1;
    option2?: CloudresourcemanagerProjectsListSecurityOption2;
}
export declare class CloudresourcemanagerProjectsListRequest extends SpeakeasyBase {
    queryParams: CloudresourcemanagerProjectsListQueryParams;
    security: CloudresourcemanagerProjectsListSecurity;
}
export declare class CloudresourcemanagerProjectsListResponse extends SpeakeasyBase {
    contentType: string;
    listProjectsResponse?: shared.ListProjectsResponse;
    statusCode: number;
}
