import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsLocationsStudiesTrialsListOptimalTrialsPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MlProjectsLocationsStudiesTrialsListOptimalTrialsQueryParams extends SpeakeasyBase {
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
export declare class MlProjectsLocationsStudiesTrialsListOptimalTrialsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsLocationsStudiesTrialsListOptimalTrialsRequest extends SpeakeasyBase {
    pathParams: MlProjectsLocationsStudiesTrialsListOptimalTrialsPathParams;
    queryParams: MlProjectsLocationsStudiesTrialsListOptimalTrialsQueryParams;
    request?: Map<string, any>;
    security: MlProjectsLocationsStudiesTrialsListOptimalTrialsSecurity;
}
export declare class MlProjectsLocationsStudiesTrialsListOptimalTrialsResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudMlV1ListOptimalTrialsResponse?: shared.GoogleCloudMlV1ListOptimalTrialsResponse;
    statusCode: number;
}
