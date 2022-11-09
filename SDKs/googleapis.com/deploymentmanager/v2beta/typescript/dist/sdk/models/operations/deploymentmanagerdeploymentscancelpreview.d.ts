import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerDeploymentsCancelPreviewPathParams extends SpeakeasyBase {
    deployment: string;
    project: string;
}
export declare class DeploymentmanagerDeploymentsCancelPreviewQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerDeploymentsCancelPreviewSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsCancelPreviewSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerDeploymentsCancelPreviewSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerDeploymentsCancelPreviewSecurityOption1;
    option2?: DeploymentmanagerDeploymentsCancelPreviewSecurityOption2;
}
export declare class DeploymentmanagerDeploymentsCancelPreviewRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerDeploymentsCancelPreviewPathParams;
    queryParams: DeploymentmanagerDeploymentsCancelPreviewQueryParams;
    request?: shared.DeploymentsCancelPreviewRequest;
    security: DeploymentmanagerDeploymentsCancelPreviewSecurity;
}
export declare class DeploymentmanagerDeploymentsCancelPreviewResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
