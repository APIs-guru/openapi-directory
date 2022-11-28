import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsconfigProjectsPatchDeploymentsResumePathParams extends SpeakeasyBase {
    name: string;
}
export declare class OsconfigProjectsPatchDeploymentsResumeQueryParams extends SpeakeasyBase {
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
export declare class OsconfigProjectsPatchDeploymentsResumeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsconfigProjectsPatchDeploymentsResumeRequest extends SpeakeasyBase {
    pathParams: OsconfigProjectsPatchDeploymentsResumePathParams;
    queryParams: OsconfigProjectsPatchDeploymentsResumeQueryParams;
    request?: Map<string, any>;
    security: OsconfigProjectsPatchDeploymentsResumeSecurity;
}
export declare class OsconfigProjectsPatchDeploymentsResumeResponse extends SpeakeasyBase {
    contentType: string;
    patchDeployment?: shared.PatchDeployment;
    statusCode: number;
}
