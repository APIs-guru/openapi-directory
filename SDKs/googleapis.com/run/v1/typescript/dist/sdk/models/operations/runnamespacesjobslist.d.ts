import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunNamespacesJobsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RunNamespacesJobsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    continue?: string;
    fieldSelector?: string;
    fields?: string;
    includeUninitialized?: boolean;
    key?: string;
    labelSelector?: string;
    limit?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    resourceVersion?: string;
    uploadType?: string;
    uploadProtocol?: string;
    watch?: boolean;
}
export declare class RunNamespacesJobsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunNamespacesJobsListRequest extends SpeakeasyBase {
    pathParams: RunNamespacesJobsListPathParams;
    queryParams: RunNamespacesJobsListQueryParams;
    security: RunNamespacesJobsListSecurity;
}
export declare class RunNamespacesJobsListResponse extends SpeakeasyBase {
    contentType: string;
    listJobsResponse?: shared.ListJobsResponse;
    statusCode: number;
}
