import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicedirectoryProjectsLocationsNamespacesServicesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesListQueryParams extends SpeakeasyBase {
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
export declare class ServicedirectoryProjectsLocationsNamespacesServicesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesListRequest extends SpeakeasyBase {
    pathParams: ServicedirectoryProjectsLocationsNamespacesServicesListPathParams;
    queryParams: ServicedirectoryProjectsLocationsNamespacesServicesListQueryParams;
    security: ServicedirectoryProjectsLocationsNamespacesServicesListSecurity;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesListResponse extends SpeakeasyBase {
    contentType: string;
    listServicesResponse?: shared.ListServicesResponse;
    statusCode: number;
}
