import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchRequest extends SpeakeasyBase {
    pathParams: ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchPathParams;
    queryParams: ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchQueryParams;
    request?: shared.Endpoint;
    security: ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchSecurity;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchResponse extends SpeakeasyBase {
    contentType: string;
    endpoint?: shared.Endpoint;
    statusCode: number;
}
