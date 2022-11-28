import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListPathParams;
    queryParams: DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListQueryParams;
    security: DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListSecurity;
}
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatalabelingV1beta1ListFeedbackThreadsResponse?: shared.GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse;
    statusCode: number;
}
