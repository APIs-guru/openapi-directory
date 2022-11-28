import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsLocationsStudiesTrialsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MlProjectsLocationsStudiesTrialsCreateQueryParams extends SpeakeasyBase {
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
export declare class MlProjectsLocationsStudiesTrialsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsLocationsStudiesTrialsCreateRequest extends SpeakeasyBase {
    pathParams: MlProjectsLocationsStudiesTrialsCreatePathParams;
    queryParams: MlProjectsLocationsStudiesTrialsCreateQueryParams;
    request?: shared.GoogleCloudMlV1TrialInput;
    security: MlProjectsLocationsStudiesTrialsCreateSecurity;
}
export declare class MlProjectsLocationsStudiesTrialsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudMlV1Trial?: shared.GoogleCloudMlV1Trial;
    statusCode: number;
}
