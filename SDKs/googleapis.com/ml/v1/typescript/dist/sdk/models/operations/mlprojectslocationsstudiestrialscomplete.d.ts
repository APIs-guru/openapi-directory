import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsLocationsStudiesTrialsCompletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MlProjectsLocationsStudiesTrialsCompleteQueryParams extends SpeakeasyBase {
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
export declare class MlProjectsLocationsStudiesTrialsCompleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsLocationsStudiesTrialsCompleteRequest extends SpeakeasyBase {
    pathParams: MlProjectsLocationsStudiesTrialsCompletePathParams;
    queryParams: MlProjectsLocationsStudiesTrialsCompleteQueryParams;
    request?: shared.GoogleCloudMlV1CompleteTrialRequest;
    security: MlProjectsLocationsStudiesTrialsCompleteSecurity;
}
export declare class MlProjectsLocationsStudiesTrialsCompleteResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudMlV1Trial?: shared.GoogleCloudMlV1Trial;
    statusCode: number;
}
