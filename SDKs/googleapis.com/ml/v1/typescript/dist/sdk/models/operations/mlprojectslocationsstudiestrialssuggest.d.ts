import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsLocationsStudiesTrialsSuggestPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MlProjectsLocationsStudiesTrialsSuggestQueryParams extends SpeakeasyBase {
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
export declare class MlProjectsLocationsStudiesTrialsSuggestSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsLocationsStudiesTrialsSuggestRequest extends SpeakeasyBase {
    pathParams: MlProjectsLocationsStudiesTrialsSuggestPathParams;
    queryParams: MlProjectsLocationsStudiesTrialsSuggestQueryParams;
    request?: shared.GoogleCloudMlV1SuggestTrialsRequest;
    security: MlProjectsLocationsStudiesTrialsSuggestSecurity;
}
export declare class MlProjectsLocationsStudiesTrialsSuggestResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
