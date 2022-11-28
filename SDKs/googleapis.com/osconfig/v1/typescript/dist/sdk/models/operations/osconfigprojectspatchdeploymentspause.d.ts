import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsconfigProjectsPatchDeploymentsPausePathParams extends SpeakeasyBase {
    name: string;
}
export declare class OsconfigProjectsPatchDeploymentsPauseQueryParams extends SpeakeasyBase {
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
export declare class OsconfigProjectsPatchDeploymentsPauseSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsconfigProjectsPatchDeploymentsPauseRequest extends SpeakeasyBase {
    pathParams: OsconfigProjectsPatchDeploymentsPausePathParams;
    queryParams: OsconfigProjectsPatchDeploymentsPauseQueryParams;
    request?: Map<string, any>;
    security: OsconfigProjectsPatchDeploymentsPauseSecurity;
}
export declare class OsconfigProjectsPatchDeploymentsPauseResponse extends SpeakeasyBase {
    contentType: string;
    patchDeployment?: shared.PatchDeployment;
    statusCode: number;
}
