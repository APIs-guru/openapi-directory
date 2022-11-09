import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    endpointId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateRequest extends SpeakeasyBase {
    pathParams: ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreatePathParams;
    queryParams: ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateQueryParams;
    request?: shared.Endpoint;
    security: ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateSecurity;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateResponse extends SpeakeasyBase {
    contentType: string;
    endpoint?: shared.Endpoint;
    statusCode: number;
}
