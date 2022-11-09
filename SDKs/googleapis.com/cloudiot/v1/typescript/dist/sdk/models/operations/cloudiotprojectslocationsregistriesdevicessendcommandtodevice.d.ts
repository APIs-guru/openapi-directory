import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudiotProjectsLocationsRegistriesDevicesSendCommandToDevicePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceQueryParams extends SpeakeasyBase {
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
export declare class CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurity extends SpeakeasyBase {
    option1?: CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurityOption1;
    option2?: CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurityOption2;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceRequest extends SpeakeasyBase {
    pathParams: CloudiotProjectsLocationsRegistriesDevicesSendCommandToDevicePathParams;
    queryParams: CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceQueryParams;
    request?: shared.SendCommandToDeviceRequest;
    security: CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurity;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceResponse extends SpeakeasyBase {
    contentType: string;
    sendCommandToDeviceResponse?: Map<string, any>;
    statusCode: number;
}
