import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerTypeProvidersGetTypePathParams extends SpeakeasyBase {
    project: string;
    type: string;
    typeProvider: string;
}
export declare class DeploymentmanagerTypeProvidersGetTypeQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerTypeProvidersGetTypeSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypeProvidersGetTypeSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypeProvidersGetTypeSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypeProvidersGetTypeSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypeProvidersGetTypeSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerTypeProvidersGetTypeSecurityOption1;
    option2?: DeploymentmanagerTypeProvidersGetTypeSecurityOption2;
    option3?: DeploymentmanagerTypeProvidersGetTypeSecurityOption3;
    option4?: DeploymentmanagerTypeProvidersGetTypeSecurityOption4;
}
export declare class DeploymentmanagerTypeProvidersGetTypeRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerTypeProvidersGetTypePathParams;
    queryParams: DeploymentmanagerTypeProvidersGetTypeQueryParams;
    security: DeploymentmanagerTypeProvidersGetTypeSecurity;
}
export declare class DeploymentmanagerTypeProvidersGetTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    typeInfo?: shared.TypeInfo;
}
