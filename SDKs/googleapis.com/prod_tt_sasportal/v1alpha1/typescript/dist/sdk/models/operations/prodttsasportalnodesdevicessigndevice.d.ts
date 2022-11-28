import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProdTtSasportalNodesDevicesSignDevicePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ProdTtSasportalNodesDevicesSignDeviceQueryParams extends SpeakeasyBase {
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
export declare class ProdTtSasportalNodesDevicesSignDeviceSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProdTtSasportalNodesDevicesSignDeviceRequest extends SpeakeasyBase {
    pathParams: ProdTtSasportalNodesDevicesSignDevicePathParams;
    queryParams: ProdTtSasportalNodesDevicesSignDeviceQueryParams;
    request?: shared.SasPortalSignDeviceRequestInput;
    security: ProdTtSasportalNodesDevicesSignDeviceSecurity;
}
export declare class ProdTtSasportalNodesDevicesSignDeviceResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalEmpty?: Map<string, any>;
    statusCode: number;
}
