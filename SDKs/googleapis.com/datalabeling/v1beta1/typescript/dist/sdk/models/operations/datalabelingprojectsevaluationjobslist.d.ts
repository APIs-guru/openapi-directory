import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsEvaluationJobsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatalabelingProjectsEvaluationJobsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatalabelingProjectsEvaluationJobsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsEvaluationJobsListRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsEvaluationJobsListPathParams;
    queryParams: DatalabelingProjectsEvaluationJobsListQueryParams;
    security: DatalabelingProjectsEvaluationJobsListSecurity;
}
export declare class DatalabelingProjectsEvaluationJobsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatalabelingV1beta1ListEvaluationJobsResponse?: shared.GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse;
    statusCode: number;
}
