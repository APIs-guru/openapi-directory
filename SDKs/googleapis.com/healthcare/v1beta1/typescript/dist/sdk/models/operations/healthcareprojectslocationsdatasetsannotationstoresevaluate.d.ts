import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsAnnotationStoresEvaluatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class HealthcareProjectsLocationsDatasetsAnnotationStoresEvaluateQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsAnnotationStoresEvaluateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsAnnotationStoresEvaluateRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsAnnotationStoresEvaluatePathParams;
    queryParams: HealthcareProjectsLocationsDatasetsAnnotationStoresEvaluateQueryParams;
    request?: shared.EvaluateAnnotationStoreRequest;
    security: HealthcareProjectsLocationsDatasetsAnnotationStoresEvaluateSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsAnnotationStoresEvaluateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
