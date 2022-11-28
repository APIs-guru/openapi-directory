import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsEvaluationJobsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatalabelingProjectsEvaluationJobsCreateQueryParams extends SpeakeasyBase {
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
export declare class DatalabelingProjectsEvaluationJobsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsEvaluationJobsCreateRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsEvaluationJobsCreatePathParams;
    queryParams: DatalabelingProjectsEvaluationJobsCreateQueryParams;
    request?: shared.GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest;
    security: DatalabelingProjectsEvaluationJobsCreateSecurity;
}
export declare class DatalabelingProjectsEvaluationJobsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatalabelingV1beta1EvaluationJob?: shared.GoogleCloudDatalabelingV1beta1EvaluationJob;
    statusCode: number;
}
