import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsConfigurationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RunProjectsLocationsConfigurationsListQueryParams extends SpeakeasyBase {
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
export declare class RunProjectsLocationsConfigurationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsConfigurationsListRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsConfigurationsListPathParams;
    queryParams: RunProjectsLocationsConfigurationsListQueryParams;
    security: RunProjectsLocationsConfigurationsListSecurity;
}
export declare class RunProjectsLocationsConfigurationsListResponse extends SpeakeasyBase {
    contentType: string;
    listConfigurationsResponse?: shared.ListConfigurationsResponse;
    statusCode: number;
}
