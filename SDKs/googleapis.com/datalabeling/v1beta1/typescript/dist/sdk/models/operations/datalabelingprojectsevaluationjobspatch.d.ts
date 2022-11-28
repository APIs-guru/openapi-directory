import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsEvaluationJobsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatalabelingProjectsEvaluationJobsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatalabelingProjectsEvaluationJobsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsEvaluationJobsPatchRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsEvaluationJobsPatchPathParams;
    queryParams: DatalabelingProjectsEvaluationJobsPatchQueryParams;
    request?: shared.GoogleCloudDatalabelingV1beta1EvaluationJob;
    security: DatalabelingProjectsEvaluationJobsPatchSecurity;
}
export declare class DatalabelingProjectsEvaluationJobsPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatalabelingV1beta1EvaluationJob?: shared.GoogleCloudDatalabelingV1beta1EvaluationJob;
    statusCode: number;
}
