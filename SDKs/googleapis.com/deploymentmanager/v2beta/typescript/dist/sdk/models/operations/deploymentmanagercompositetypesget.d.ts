import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerCompositeTypesGetPathParams extends SpeakeasyBase {
    compositeType: string;
    project: string;
}
export declare class DeploymentmanagerCompositeTypesGetQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerCompositeTypesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerCompositeTypesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerCompositeTypesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerCompositeTypesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerCompositeTypesGetSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerCompositeTypesGetSecurityOption1;
    option2?: DeploymentmanagerCompositeTypesGetSecurityOption2;
    option3?: DeploymentmanagerCompositeTypesGetSecurityOption3;
    option4?: DeploymentmanagerCompositeTypesGetSecurityOption4;
}
export declare class DeploymentmanagerCompositeTypesGetRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerCompositeTypesGetPathParams;
    queryParams: DeploymentmanagerCompositeTypesGetQueryParams;
    security: DeploymentmanagerCompositeTypesGetSecurity;
}
export declare class DeploymentmanagerCompositeTypesGetResponse extends SpeakeasyBase {
    compositeType?: shared.CompositeType;
    contentType: string;
    statusCode: number;
}
