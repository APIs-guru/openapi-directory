import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProdTtSasportalNodesNodesDevicesCreateSignedPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ProdTtSasportalNodesNodesDevicesCreateSignedQueryParams extends SpeakeasyBase {
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
export declare class ProdTtSasportalNodesNodesDevicesCreateSignedSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProdTtSasportalNodesNodesDevicesCreateSignedRequest extends SpeakeasyBase {
    pathParams: ProdTtSasportalNodesNodesDevicesCreateSignedPathParams;
    queryParams: ProdTtSasportalNodesNodesDevicesCreateSignedQueryParams;
    request?: shared.SasPortalCreateSignedDeviceRequest;
    security: ProdTtSasportalNodesNodesDevicesCreateSignedSecurity;
}
export declare class ProdTtSasportalNodesNodesDevicesCreateSignedResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalDevice?: shared.SasPortalDevice;
    statusCode: number;
}
