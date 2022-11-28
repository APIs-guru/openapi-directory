import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerCompositeTypesDeletePathParams extends SpeakeasyBase {
    compositeType: string;
    project: string;
}
export declare class DeploymentmanagerCompositeTypesDeleteQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerCompositeTypesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerCompositeTypesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerCompositeTypesDeleteSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerCompositeTypesDeleteSecurityOption1;
    option2?: DeploymentmanagerCompositeTypesDeleteSecurityOption2;
}
export declare class DeploymentmanagerCompositeTypesDeleteRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerCompositeTypesDeletePathParams;
    queryParams: DeploymentmanagerCompositeTypesDeleteQueryParams;
    security: DeploymentmanagerCompositeTypesDeleteSecurity;
}
export declare class DeploymentmanagerCompositeTypesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
