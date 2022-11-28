import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsEvaluationJobsResumePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatalabelingProjectsEvaluationJobsResumeQueryParams extends SpeakeasyBase {
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
export declare class DatalabelingProjectsEvaluationJobsResumeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsEvaluationJobsResumeRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsEvaluationJobsResumePathParams;
    queryParams: DatalabelingProjectsEvaluationJobsResumeQueryParams;
    request?: Map<string, any>;
    security: DatalabelingProjectsEvaluationJobsResumeSecurity;
}
export declare class DatalabelingProjectsEvaluationJobsResumeResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
