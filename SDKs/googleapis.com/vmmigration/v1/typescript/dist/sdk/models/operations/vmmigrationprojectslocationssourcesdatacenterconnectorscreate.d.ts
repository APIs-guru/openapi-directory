import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    datacenterConnectorId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreatePathParams;
    queryParams: VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateQueryParams;
    request?: shared.DatacenterConnectorInput;
    security: VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateSecurity;
}
export declare class VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
