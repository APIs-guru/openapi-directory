import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsListQueryParams extends SpeakeasyBase {
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
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsListRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsDatasetsAnnotatedDatasetsListPathParams;
    queryParams: DatalabelingProjectsDatasetsAnnotatedDatasetsListQueryParams;
    security: DatalabelingProjectsDatasetsAnnotatedDatasetsListSecurity;
}
export declare class DatalabelingProjectsDatasetsAnnotatedDatasetsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse?: shared.GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse;
    statusCode: number;
}
