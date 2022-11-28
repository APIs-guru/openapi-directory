import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetQueryParams extends SpeakeasyBase {
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
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetRequest extends SpeakeasyBase {
    pathParams: DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetPathParams;
    queryParams: DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetQueryParams;
    security: DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetSecurity;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDocumentaiV1beta3Evaluation?: shared.GoogleCloudDocumentaiV1beta3Evaluation;
    statusCode: number;
}
