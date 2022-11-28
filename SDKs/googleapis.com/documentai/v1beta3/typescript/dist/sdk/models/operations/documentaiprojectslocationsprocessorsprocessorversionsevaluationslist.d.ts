import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListQueryParams extends SpeakeasyBase {
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
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListRequest extends SpeakeasyBase {
    pathParams: DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListPathParams;
    queryParams: DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListQueryParams;
    security: DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListSecurity;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDocumentaiV1beta3ListEvaluationsResponse?: shared.GoogleCloudDocumentaiV1beta3ListEvaluationsResponse;
    statusCode: number;
}
