import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateQueryParams extends SpeakeasyBase {
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
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreatePathParams;
    queryParams: DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateQueryParams;
    request?: shared.GoogleCloudDatalabelingV1beta1FeedbackMessage;
    security: DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateSecurity;
}
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
