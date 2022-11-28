import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsLocationsTriggersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudbuildProjectsLocationsTriggersListQueryParams extends SpeakeasyBase {
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
    projectId?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudbuildProjectsLocationsTriggersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsLocationsTriggersListRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsLocationsTriggersListPathParams;
    queryParams: CloudbuildProjectsLocationsTriggersListQueryParams;
    security: CloudbuildProjectsLocationsTriggersListSecurity;
}
export declare class CloudbuildProjectsLocationsTriggersListResponse extends SpeakeasyBase {
    contentType: string;
    listBuildTriggersResponse?: shared.ListBuildTriggersResponse;
    statusCode: number;
}
