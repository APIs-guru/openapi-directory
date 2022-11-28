import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListQueryParams extends SpeakeasyBase {
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
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListPathParams;
    queryParams: DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListQueryParams;
    security: DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListSecurity;
}
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatalabelingV1beta1ListFeedbackMessagesResponse?: shared.GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse;
    statusCode: number;
}
