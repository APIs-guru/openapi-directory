import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams extends SpeakeasyBase {
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
export declare class CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity extends SpeakeasyBase {
    option1?: CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1;
    option2?: CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption2;
}
export declare class CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest extends SpeakeasyBase {
    pathParams: CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayPathParams;
    queryParams: CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams;
    request?: shared.UnbindDeviceFromGatewayRequest;
    security: CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity;
}
export declare class CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    unbindDeviceFromGatewayResponse?: Map<string, any>;
}
