import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProdTtSasportalNodesNodesNodesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ProdTtSasportalNodesNodesNodesCreateQueryParams extends SpeakeasyBase {
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
export declare class ProdTtSasportalNodesNodesNodesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProdTtSasportalNodesNodesNodesCreateRequest extends SpeakeasyBase {
    pathParams: ProdTtSasportalNodesNodesNodesCreatePathParams;
    queryParams: ProdTtSasportalNodesNodesNodesCreateQueryParams;
    request?: shared.SasPortalNode;
    security: ProdTtSasportalNodesNodesNodesCreateSecurity;
}
export declare class ProdTtSasportalNodesNodesNodesCreateResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalNode?: shared.SasPortalNode;
    statusCode: number;
}
