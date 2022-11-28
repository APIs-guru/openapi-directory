import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProdTtSasportalNodesNodesMovePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ProdTtSasportalNodesNodesMoveQueryParams extends SpeakeasyBase {
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
export declare class ProdTtSasportalNodesNodesMoveSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProdTtSasportalNodesNodesMoveRequest extends SpeakeasyBase {
    pathParams: ProdTtSasportalNodesNodesMovePathParams;
    queryParams: ProdTtSasportalNodesNodesMoveQueryParams;
    request?: shared.SasPortalMoveNodeRequest;
    security: ProdTtSasportalNodesNodesMoveSecurity;
}
export declare class ProdTtSasportalNodesNodesMoveResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalOperation?: shared.SasPortalOperation;
    statusCode: number;
}
