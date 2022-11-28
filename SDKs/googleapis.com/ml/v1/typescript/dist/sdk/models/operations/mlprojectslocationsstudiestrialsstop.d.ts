import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsLocationsStudiesTrialsStopPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MlProjectsLocationsStudiesTrialsStopQueryParams extends SpeakeasyBase {
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
export declare class MlProjectsLocationsStudiesTrialsStopSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsLocationsStudiesTrialsStopRequest extends SpeakeasyBase {
    pathParams: MlProjectsLocationsStudiesTrialsStopPathParams;
    queryParams: MlProjectsLocationsStudiesTrialsStopQueryParams;
    request?: Map<string, any>;
    security: MlProjectsLocationsStudiesTrialsStopSecurity;
}
export declare class MlProjectsLocationsStudiesTrialsStopResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudMlV1Trial?: shared.GoogleCloudMlV1Trial;
    statusCode: number;
}
