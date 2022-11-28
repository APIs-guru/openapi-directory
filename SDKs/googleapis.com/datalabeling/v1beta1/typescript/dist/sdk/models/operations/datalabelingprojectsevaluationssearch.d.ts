import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsEvaluationsSearchPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatalabelingProjectsEvaluationsSearchQueryParams extends SpeakeasyBase {
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
export declare class DatalabelingProjectsEvaluationsSearchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsEvaluationsSearchRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsEvaluationsSearchPathParams;
    queryParams: DatalabelingProjectsEvaluationsSearchQueryParams;
    security: DatalabelingProjectsEvaluationsSearchSecurity;
}
export declare class DatalabelingProjectsEvaluationsSearchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatalabelingV1beta1SearchEvaluationsResponse?: shared.GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse;
    statusCode: number;
}
