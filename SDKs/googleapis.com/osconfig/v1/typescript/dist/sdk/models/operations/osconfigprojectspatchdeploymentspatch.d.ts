import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsconfigProjectsPatchDeploymentsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class OsconfigProjectsPatchDeploymentsPatchQueryParams extends SpeakeasyBase {
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
export declare class OsconfigProjectsPatchDeploymentsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsconfigProjectsPatchDeploymentsPatchRequest extends SpeakeasyBase {
    pathParams: OsconfigProjectsPatchDeploymentsPatchPathParams;
    queryParams: OsconfigProjectsPatchDeploymentsPatchQueryParams;
    request?: shared.PatchDeploymentInput;
    security: OsconfigProjectsPatchDeploymentsPatchSecurity;
}
export declare class OsconfigProjectsPatchDeploymentsPatchResponse extends SpeakeasyBase {
    contentType: string;
    patchDeployment?: shared.PatchDeployment;
    statusCode: number;
}
