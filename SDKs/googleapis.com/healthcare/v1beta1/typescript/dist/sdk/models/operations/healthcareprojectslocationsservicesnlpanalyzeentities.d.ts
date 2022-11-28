import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsServicesNlpAnalyzeEntitiesPathParams extends SpeakeasyBase {
    nlpService: string;
}
export declare class HealthcareProjectsLocationsServicesNlpAnalyzeEntitiesQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsServicesNlpAnalyzeEntitiesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsServicesNlpAnalyzeEntitiesRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsServicesNlpAnalyzeEntitiesPathParams;
    queryParams: HealthcareProjectsLocationsServicesNlpAnalyzeEntitiesQueryParams;
    request?: shared.AnalyzeEntitiesRequest;
    security: HealthcareProjectsLocationsServicesNlpAnalyzeEntitiesSecurity;
}
export declare class HealthcareProjectsLocationsServicesNlpAnalyzeEntitiesResponse extends SpeakeasyBase {
    analyzeEntitiesResponse?: shared.AnalyzeEntitiesResponse;
    contentType: string;
    statusCode: number;
}
