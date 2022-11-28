import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SasportalNodesNodesDeploymentsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SasportalNodesNodesDeploymentsCreateQueryParams extends SpeakeasyBase {
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
export declare class SasportalNodesNodesDeploymentsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SasportalNodesNodesDeploymentsCreateRequest extends SpeakeasyBase {
    pathParams: SasportalNodesNodesDeploymentsCreatePathParams;
    queryParams: SasportalNodesNodesDeploymentsCreateQueryParams;
    request?: shared.SasPortalDeploymentInput;
    security: SasportalNodesNodesDeploymentsCreateSecurity;
}
export declare class SasportalNodesNodesDeploymentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalDeployment?: shared.SasPortalDeployment;
    statusCode: number;
}
