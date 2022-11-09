import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsWorkerPoolsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudbuildProjectsWorkerPoolsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudbuildProjectsWorkerPoolsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsWorkerPoolsListRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsWorkerPoolsListPathParams;
    queryParams: CloudbuildProjectsWorkerPoolsListQueryParams;
    security: CloudbuildProjectsWorkerPoolsListSecurity;
}
export declare class CloudbuildProjectsWorkerPoolsListResponse extends SpeakeasyBase {
    contentType: string;
    listWorkerPoolsResponse?: shared.ListWorkerPoolsResponse;
    statusCode: number;
}
