import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerTypeProvidersInsertPathParams extends SpeakeasyBase {
    project: string;
}
export declare class DeploymentmanagerTypeProvidersInsertQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerTypeProvidersInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypeProvidersInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypeProvidersInsertSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerTypeProvidersInsertSecurityOption1;
    option2?: DeploymentmanagerTypeProvidersInsertSecurityOption2;
}
export declare class DeploymentmanagerTypeProvidersInsertRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerTypeProvidersInsertPathParams;
    queryParams: DeploymentmanagerTypeProvidersInsertQueryParams;
    request?: shared.TypeProvider;
    security: DeploymentmanagerTypeProvidersInsertSecurity;
}
export declare class DeploymentmanagerTypeProvidersInsertResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
