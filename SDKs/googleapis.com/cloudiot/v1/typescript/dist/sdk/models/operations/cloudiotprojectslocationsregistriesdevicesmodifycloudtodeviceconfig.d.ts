import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams extends SpeakeasyBase {
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
export declare class CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurity extends SpeakeasyBase {
    option1?: CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption1;
    option2?: CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption2;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest extends SpeakeasyBase {
    pathParams: CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigPathParams;
    queryParams: CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams;
    request?: shared.ModifyCloudToDeviceConfigRequest;
    security: CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurity;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigResponse extends SpeakeasyBase {
    contentType: string;
    deviceConfig?: shared.DeviceConfig;
    statusCode: number;
}
