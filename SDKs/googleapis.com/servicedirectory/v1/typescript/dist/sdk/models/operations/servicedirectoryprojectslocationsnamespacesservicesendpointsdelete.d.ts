import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteQueryParams extends SpeakeasyBase {
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
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteRequest extends SpeakeasyBase {
    pathParams: ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeletePathParams;
    queryParams: ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteQueryParams;
    security: ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteSecurity;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
