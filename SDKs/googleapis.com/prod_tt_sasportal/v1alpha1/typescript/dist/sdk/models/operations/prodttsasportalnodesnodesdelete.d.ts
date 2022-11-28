import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProdTtSasportalNodesNodesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ProdTtSasportalNodesNodesDeleteQueryParams extends SpeakeasyBase {
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
export declare class ProdTtSasportalNodesNodesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProdTtSasportalNodesNodesDeleteRequest extends SpeakeasyBase {
    pathParams: ProdTtSasportalNodesNodesDeletePathParams;
    queryParams: ProdTtSasportalNodesNodesDeleteQueryParams;
    security: ProdTtSasportalNodesNodesDeleteSecurity;
}
export declare class ProdTtSasportalNodesNodesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalEmpty?: Map<string, any>;
    statusCode: number;
}
