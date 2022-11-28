import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SasportalNodesNodesDevicesCreateSignedPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SasportalNodesNodesDevicesCreateSignedQueryParams extends SpeakeasyBase {
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
export declare class SasportalNodesNodesDevicesCreateSignedSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SasportalNodesNodesDevicesCreateSignedRequest extends SpeakeasyBase {
    pathParams: SasportalNodesNodesDevicesCreateSignedPathParams;
    queryParams: SasportalNodesNodesDevicesCreateSignedQueryParams;
    request?: shared.SasPortalCreateSignedDeviceRequest;
    security: SasportalNodesNodesDevicesCreateSignedSecurity;
}
export declare class SasportalNodesNodesDevicesCreateSignedResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalDevice?: shared.SasPortalDevice;
    statusCode: number;
}
