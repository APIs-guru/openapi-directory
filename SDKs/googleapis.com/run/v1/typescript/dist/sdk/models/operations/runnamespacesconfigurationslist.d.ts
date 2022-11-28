import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunNamespacesConfigurationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RunNamespacesConfigurationsListQueryParams extends SpeakeasyBase {
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
export declare class RunNamespacesConfigurationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunNamespacesConfigurationsListRequest extends SpeakeasyBase {
    pathParams: RunNamespacesConfigurationsListPathParams;
    queryParams: RunNamespacesConfigurationsListQueryParams;
    security: RunNamespacesConfigurationsListSecurity;
}
export declare class RunNamespacesConfigurationsListResponse extends SpeakeasyBase {
    contentType: string;
    listConfigurationsResponse?: shared.ListConfigurationsResponse;
    statusCode: number;
}
