import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudiotProjectsLocationsRegistriesDevicesStatesListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    numStates?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesStatesListSecurity extends SpeakeasyBase {
    option1?: CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption1;
    option2?: CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption2;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesStatesListRequest extends SpeakeasyBase {
    pathParams: CloudiotProjectsLocationsRegistriesDevicesStatesListPathParams;
    queryParams: CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams;
    security: CloudiotProjectsLocationsRegistriesDevicesStatesListSecurity;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesStatesListResponse extends SpeakeasyBase {
    contentType: string;
    listDeviceStatesResponse?: shared.ListDeviceStatesResponse;
    statusCode: number;
}
