import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudiotProjectsLocationsRegistriesDevicesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesPatchQueryParams extends SpeakeasyBase {
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
export declare class CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesPatchSecurity extends SpeakeasyBase {
    option1?: CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption1;
    option2?: CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption2;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesPatchRequest extends SpeakeasyBase {
    pathParams: CloudiotProjectsLocationsRegistriesDevicesPatchPathParams;
    queryParams: CloudiotProjectsLocationsRegistriesDevicesPatchQueryParams;
    request?: shared.Device;
    security: CloudiotProjectsLocationsRegistriesDevicesPatchSecurity;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesPatchResponse extends SpeakeasyBase {
    contentType: string;
    device?: shared.Device;
    statusCode: number;
}
