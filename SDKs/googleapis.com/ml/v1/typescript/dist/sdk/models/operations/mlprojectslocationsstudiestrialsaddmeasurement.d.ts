import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsLocationsStudiesTrialsAddMeasurementPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MlProjectsLocationsStudiesTrialsAddMeasurementQueryParams extends SpeakeasyBase {
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
export declare class MlProjectsLocationsStudiesTrialsAddMeasurementSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsLocationsStudiesTrialsAddMeasurementRequest extends SpeakeasyBase {
    pathParams: MlProjectsLocationsStudiesTrialsAddMeasurementPathParams;
    queryParams: MlProjectsLocationsStudiesTrialsAddMeasurementQueryParams;
    request?: shared.GoogleCloudMlV1AddTrialMeasurementRequest;
    security: MlProjectsLocationsStudiesTrialsAddMeasurementSecurity;
}
export declare class MlProjectsLocationsStudiesTrialsAddMeasurementResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudMlV1Trial?: shared.GoogleCloudMlV1Trial;
    statusCode: number;
}
