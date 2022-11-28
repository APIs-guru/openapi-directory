import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SasportalNodesDevicesUpdateSignedPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SasportalNodesDevicesUpdateSignedQueryParams extends SpeakeasyBase {
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
export declare class SasportalNodesDevicesUpdateSignedSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SasportalNodesDevicesUpdateSignedRequest extends SpeakeasyBase {
    pathParams: SasportalNodesDevicesUpdateSignedPathParams;
    queryParams: SasportalNodesDevicesUpdateSignedQueryParams;
    request?: shared.SasPortalUpdateSignedDeviceRequest;
    security: SasportalNodesDevicesUpdateSignedSecurity;
}
export declare class SasportalNodesDevicesUpdateSignedResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalDevice?: shared.SasPortalDevice;
    statusCode: number;
}
