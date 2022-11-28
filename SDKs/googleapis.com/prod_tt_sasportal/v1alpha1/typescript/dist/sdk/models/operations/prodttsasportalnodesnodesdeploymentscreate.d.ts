import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProdTtSasportalNodesNodesDeploymentsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ProdTtSasportalNodesNodesDeploymentsCreateQueryParams extends SpeakeasyBase {
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
export declare class ProdTtSasportalNodesNodesDeploymentsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProdTtSasportalNodesNodesDeploymentsCreateRequest extends SpeakeasyBase {
    pathParams: ProdTtSasportalNodesNodesDeploymentsCreatePathParams;
    queryParams: ProdTtSasportalNodesNodesDeploymentsCreateQueryParams;
    request?: shared.SasPortalDeploymentInput;
    security: ProdTtSasportalNodesNodesDeploymentsCreateSecurity;
}
export declare class ProdTtSasportalNodesNodesDeploymentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalDeployment?: shared.SasPortalDeployment;
    statusCode: number;
}
