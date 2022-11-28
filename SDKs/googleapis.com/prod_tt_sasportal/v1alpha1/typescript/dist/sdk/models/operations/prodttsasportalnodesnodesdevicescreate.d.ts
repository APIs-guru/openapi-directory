import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProdTtSasportalNodesNodesDevicesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ProdTtSasportalNodesNodesDevicesCreateQueryParams extends SpeakeasyBase {
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
export declare class ProdTtSasportalNodesNodesDevicesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProdTtSasportalNodesNodesDevicesCreateRequest extends SpeakeasyBase {
    pathParams: ProdTtSasportalNodesNodesDevicesCreatePathParams;
    queryParams: ProdTtSasportalNodesNodesDevicesCreateQueryParams;
    request?: shared.SasPortalDeviceInput;
    security: ProdTtSasportalNodesNodesDevicesCreateSecurity;
}
export declare class ProdTtSasportalNodesNodesDevicesCreateResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalDevice?: shared.SasPortalDevice;
    statusCode: number;
}
