import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerCompositeTypesUpdatePathParams extends SpeakeasyBase {
    compositeType: string;
    project: string;
}
export declare class DeploymentmanagerCompositeTypesUpdateQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerCompositeTypesUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerCompositeTypesUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerCompositeTypesUpdateSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerCompositeTypesUpdateSecurityOption1;
    option2?: DeploymentmanagerCompositeTypesUpdateSecurityOption2;
}
export declare class DeploymentmanagerCompositeTypesUpdateRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerCompositeTypesUpdatePathParams;
    queryParams: DeploymentmanagerCompositeTypesUpdateQueryParams;
    request?: shared.CompositeType;
    security: DeploymentmanagerCompositeTypesUpdateSecurity;
}
export declare class DeploymentmanagerCompositeTypesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
