import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerCompositeTypesInsertPathParams extends SpeakeasyBase {
    project: string;
}
export declare class DeploymentmanagerCompositeTypesInsertQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerCompositeTypesInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerCompositeTypesInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerCompositeTypesInsertSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerCompositeTypesInsertSecurityOption1;
    option2?: DeploymentmanagerCompositeTypesInsertSecurityOption2;
}
export declare class DeploymentmanagerCompositeTypesInsertRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerCompositeTypesInsertPathParams;
    queryParams: DeploymentmanagerCompositeTypesInsertQueryParams;
    request?: shared.CompositeType;
    security: DeploymentmanagerCompositeTypesInsertSecurity;
}
export declare class DeploymentmanagerCompositeTypesInsertResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
