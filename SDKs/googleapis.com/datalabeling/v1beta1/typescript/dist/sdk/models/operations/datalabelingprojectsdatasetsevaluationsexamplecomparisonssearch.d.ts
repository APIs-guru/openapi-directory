import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchQueryParams extends SpeakeasyBase {
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
export declare class DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchPathParams;
    queryParams: DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchQueryParams;
    request?: shared.GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest;
    security: DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchSecurity;
}
export declare class DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatalabelingV1beta1SearchExampleComparisonsResponse?: shared.GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse;
    statusCode: number;
}
