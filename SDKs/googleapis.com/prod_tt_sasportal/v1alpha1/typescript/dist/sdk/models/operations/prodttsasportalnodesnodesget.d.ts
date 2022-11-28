import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProdTtSasportalNodesNodesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ProdTtSasportalNodesNodesGetQueryParams extends SpeakeasyBase {
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
export declare class ProdTtSasportalNodesNodesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProdTtSasportalNodesNodesGetRequest extends SpeakeasyBase {
    pathParams: ProdTtSasportalNodesNodesGetPathParams;
    queryParams: ProdTtSasportalNodesNodesGetQueryParams;
    security: ProdTtSasportalNodesNodesGetSecurity;
}
export declare class ProdTtSasportalNodesNodesGetResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalNode?: shared.SasPortalNode;
    statusCode: number;
}
