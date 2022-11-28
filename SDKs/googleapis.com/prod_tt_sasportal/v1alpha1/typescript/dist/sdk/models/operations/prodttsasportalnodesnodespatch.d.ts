import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProdTtSasportalNodesNodesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ProdTtSasportalNodesNodesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ProdTtSasportalNodesNodesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProdTtSasportalNodesNodesPatchRequest extends SpeakeasyBase {
    pathParams: ProdTtSasportalNodesNodesPatchPathParams;
    queryParams: ProdTtSasportalNodesNodesPatchQueryParams;
    request?: shared.SasPortalNode;
    security: ProdTtSasportalNodesNodesPatchSecurity;
}
export declare class ProdTtSasportalNodesNodesPatchResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalNode?: shared.SasPortalNode;
    statusCode: number;
}
