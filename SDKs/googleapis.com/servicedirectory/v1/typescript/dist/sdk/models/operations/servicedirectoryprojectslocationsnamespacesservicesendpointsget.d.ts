import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetQueryParams extends SpeakeasyBase {
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
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetRequest extends SpeakeasyBase {
    pathParams: ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetPathParams;
    queryParams: ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetQueryParams;
    security: ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetSecurity;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetResponse extends SpeakeasyBase {
    contentType: string;
    endpoint?: shared.Endpoint;
    statusCode: number;
}
