import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ServicedirectoryProjectsLocationsNamespacesServicesResolvePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesResolveQueryParams extends SpeakeasyBase {
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
export declare class ServicedirectoryProjectsLocationsNamespacesServicesResolveSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest extends SpeakeasyBase {
    pathParams: ServicedirectoryProjectsLocationsNamespacesServicesResolvePathParams;
    queryParams: ServicedirectoryProjectsLocationsNamespacesServicesResolveQueryParams;
    request?: shared.ResolveServiceRequest;
    security: ServicedirectoryProjectsLocationsNamespacesServicesResolveSecurity;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesResolveResponse extends SpeakeasyBase {
    contentType: string;
    resolveServiceResponse?: shared.ResolveServiceResponse;
    statusCode: number;
}
