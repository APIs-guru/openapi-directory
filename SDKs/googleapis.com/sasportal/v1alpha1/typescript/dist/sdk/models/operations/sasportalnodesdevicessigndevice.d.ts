import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SasportalNodesDevicesSignDevicePathParams extends SpeakeasyBase {
    name: string;
}
export declare class SasportalNodesDevicesSignDeviceQueryParams extends SpeakeasyBase {
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
export declare class SasportalNodesDevicesSignDeviceSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SasportalNodesDevicesSignDeviceRequest extends SpeakeasyBase {
    pathParams: SasportalNodesDevicesSignDevicePathParams;
    queryParams: SasportalNodesDevicesSignDeviceQueryParams;
    request?: shared.SasPortalSignDeviceRequestInput;
    security: SasportalNodesDevicesSignDeviceSecurity;
}
export declare class SasportalNodesDevicesSignDeviceResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalEmpty?: Map<string, any>;
    statusCode: number;
}
