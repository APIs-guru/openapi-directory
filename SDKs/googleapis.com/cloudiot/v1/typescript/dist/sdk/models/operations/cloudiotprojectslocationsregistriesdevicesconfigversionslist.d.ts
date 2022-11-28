import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    numVersions?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurity extends SpeakeasyBase {
    option1?: CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurityOption1;
    option2?: CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurityOption2;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListRequest extends SpeakeasyBase {
    pathParams: CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListPathParams;
    queryParams: CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListQueryParams;
    security: CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurity;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListResponse extends SpeakeasyBase {
    contentType: string;
    listDeviceConfigVersionsResponse?: shared.ListDeviceConfigVersionsResponse;
    statusCode: number;
}
