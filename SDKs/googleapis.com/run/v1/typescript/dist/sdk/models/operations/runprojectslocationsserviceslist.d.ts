import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsServicesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RunProjectsLocationsServicesListQueryParams extends SpeakeasyBase {
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
export declare class RunProjectsLocationsServicesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsServicesListRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsServicesListPathParams;
    queryParams: RunProjectsLocationsServicesListQueryParams;
    security: RunProjectsLocationsServicesListSecurity;
}
export declare class RunProjectsLocationsServicesListResponse extends SpeakeasyBase {
    contentType: string;
    listServicesResponse?: shared.ListServicesResponse;
    statusCode: number;
}
