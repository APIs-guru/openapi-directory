import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeploymentmanagerManifestsGetPathParams extends SpeakeasyBase {
    deployment: string;
    manifest: string;
    project: string;
}
export declare class DeploymentmanagerManifestsGetQueryParams extends SpeakeasyBase {
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
export declare class DeploymentmanagerManifestsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerManifestsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerManifestsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerManifestsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DeploymentmanagerManifestsGetSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerManifestsGetSecurityOption1;
    option2?: DeploymentmanagerManifestsGetSecurityOption2;
    option3?: DeploymentmanagerManifestsGetSecurityOption3;
    option4?: DeploymentmanagerManifestsGetSecurityOption4;
}
export declare class DeploymentmanagerManifestsGetRequest extends SpeakeasyBase {
    pathParams: DeploymentmanagerManifestsGetPathParams;
    queryParams: DeploymentmanagerManifestsGetQueryParams;
    security: DeploymentmanagerManifestsGetSecurity;
}
export declare class DeploymentmanagerManifestsGetResponse extends SpeakeasyBase {
    contentType: string;
    manifest?: shared.Manifest;
    statusCode: number;
}
