import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MetastoreProjectsLocationsServicesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MetastoreProjectsLocationsServicesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    serviceId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MetastoreProjectsLocationsServicesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MetastoreProjectsLocationsServicesCreateRequest extends SpeakeasyBase {
    pathParams: MetastoreProjectsLocationsServicesCreatePathParams;
    queryParams: MetastoreProjectsLocationsServicesCreateQueryParams;
    request?: shared.Service;
    security: MetastoreProjectsLocationsServicesCreateSecurity;
}
export declare class MetastoreProjectsLocationsServicesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
