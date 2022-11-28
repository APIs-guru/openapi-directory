import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunNamespacesTasksListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RunNamespacesTasksListQueryParams extends SpeakeasyBase {
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
export declare class RunNamespacesTasksListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunNamespacesTasksListRequest extends SpeakeasyBase {
    pathParams: RunNamespacesTasksListPathParams;
    queryParams: RunNamespacesTasksListQueryParams;
    security: RunNamespacesTasksListSecurity;
}
export declare class RunNamespacesTasksListResponse extends SpeakeasyBase {
    contentType: string;
    listTasksResponse?: shared.ListTasksResponse;
    statusCode: number;
}
