import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerTypesGetPathParams extends SpeakeasyBase {
    project: string;
    type: string;
}
export declare class DeploymentmanagerTypesGetQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerTypesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerTypesGetSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerTypesGetSecurityOption1;
    option2?: DeploymentmanagerTypesGetSecurityOption2;
    option3?: DeploymentmanagerTypesGetSecurityOption3;
    option4?: DeploymentmanagerTypesGetSecurityOption4;
}
export declare class DeploymentmanagerTypesGetRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerTypesGetPathParams;
    queryParams: DeploymentmanagerTypesGetQueryParams;
    security: DeploymentmanagerTypesGetSecurity;
}
export declare class DeploymentmanagerTypesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    type?: shared.Type;
}
