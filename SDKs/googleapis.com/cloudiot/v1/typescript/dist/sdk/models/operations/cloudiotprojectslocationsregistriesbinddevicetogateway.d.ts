import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudiotProjectsLocationsRegistriesBindDeviceToGatewayPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams extends SpeakeasyBase {
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
export declare class CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity extends SpeakeasyBase {
    option1?: CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1;
    option2?: CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption2;
}
export declare class CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest extends SpeakeasyBase {
    pathParams: CloudiotProjectsLocationsRegistriesBindDeviceToGatewayPathParams;
    queryParams: CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams;
    request?: shared.BindDeviceToGatewayRequest;
    security: CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity;
}
export declare class CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse extends SpeakeasyBase {
    bindDeviceToGatewayResponse?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
