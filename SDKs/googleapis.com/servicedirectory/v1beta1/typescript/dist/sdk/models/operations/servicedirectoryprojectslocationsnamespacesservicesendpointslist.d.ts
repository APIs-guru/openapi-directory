import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListRequest extends SpeakeasyBase {
    pathParams: ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListPathParams;
    queryParams: ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListQueryParams;
    security: ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListSecurity;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListResponse extends SpeakeasyBase {
    contentType: string;
    listEndpointsResponse?: shared.ListEndpointsResponse;
    statusCode: number;
}
