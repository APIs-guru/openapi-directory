import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsTriggersListPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class CloudbuildProjectsTriggersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    parent?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudbuildProjectsTriggersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsTriggersListRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsTriggersListPathParams;
    queryParams: CloudbuildProjectsTriggersListQueryParams;
    security: CloudbuildProjectsTriggersListSecurity;
}
export declare class CloudbuildProjectsTriggersListResponse extends SpeakeasyBase {
    contentType: string;
    listBuildTriggersResponse?: shared.ListBuildTriggersResponse;
    statusCode: number;
}
