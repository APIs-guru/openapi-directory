import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerCompositeTypesPatchPathParams extends SpeakeasyBase {
    compositeType: string;
    project: string;
}
export declare class DeploymentmanagerCompositeTypesPatchQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerCompositeTypesPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerCompositeTypesPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerCompositeTypesPatchSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerCompositeTypesPatchSecurityOption1;
    option2?: DeploymentmanagerCompositeTypesPatchSecurityOption2;
}
export declare class DeploymentmanagerCompositeTypesPatchRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerCompositeTypesPatchPathParams;
    queryParams: DeploymentmanagerCompositeTypesPatchQueryParams;
    request?: shared.CompositeType;
    security: DeploymentmanagerCompositeTypesPatchSecurity;
}
export declare class DeploymentmanagerCompositeTypesPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
