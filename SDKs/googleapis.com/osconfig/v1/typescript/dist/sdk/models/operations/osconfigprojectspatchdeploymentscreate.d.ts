import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsconfigProjectsPatchDeploymentsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class OsconfigProjectsPatchDeploymentsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    patchDeploymentId?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class OsconfigProjectsPatchDeploymentsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsconfigProjectsPatchDeploymentsCreateRequest extends SpeakeasyBase {
    pathParams: OsconfigProjectsPatchDeploymentsCreatePathParams;
    queryParams: OsconfigProjectsPatchDeploymentsCreateQueryParams;
    request?: shared.PatchDeploymentInput;
    security: OsconfigProjectsPatchDeploymentsCreateSecurity;
}
export declare class OsconfigProjectsPatchDeploymentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    patchDeployment?: shared.PatchDeployment;
    statusCode: number;
}
