import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsBuildsListPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class CloudbuildProjectsBuildsListQueryParams extends SpeakeasyBase {
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
    parent?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudbuildProjectsBuildsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsBuildsListRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsBuildsListPathParams;
    queryParams: CloudbuildProjectsBuildsListQueryParams;
    security: CloudbuildProjectsBuildsListSecurity;
}
export declare class CloudbuildProjectsBuildsListResponse extends SpeakeasyBase {
    contentType: string;
    listBuildsResponse?: shared.ListBuildsResponse;
    statusCode: number;
}
