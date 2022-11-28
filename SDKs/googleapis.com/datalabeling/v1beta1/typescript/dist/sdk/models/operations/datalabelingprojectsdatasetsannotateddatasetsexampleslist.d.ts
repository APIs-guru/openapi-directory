import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListQueryParams extends SpeakeasyBase {
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
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListPathParams;
    queryParams: DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListQueryParams;
    security: DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListSecurity;
}
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatalabelingV1beta1ListExamplesResponse?: shared.GoogleCloudDatalabelingV1beta1ListExamplesResponse;
    statusCode: number;
}
