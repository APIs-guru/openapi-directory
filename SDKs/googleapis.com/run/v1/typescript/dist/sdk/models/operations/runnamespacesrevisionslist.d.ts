import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunNamespacesRevisionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RunNamespacesRevisionsListQueryParams extends SpeakeasyBase {
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
export declare class RunNamespacesRevisionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunNamespacesRevisionsListRequest extends SpeakeasyBase {
    pathParams: RunNamespacesRevisionsListPathParams;
    queryParams: RunNamespacesRevisionsListQueryParams;
    security: RunNamespacesRevisionsListSecurity;
}
export declare class RunNamespacesRevisionsListResponse extends SpeakeasyBase {
    contentType: string;
    listRevisionsResponse?: shared.ListRevisionsResponse;
    statusCode: number;
}
