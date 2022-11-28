import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsDatasetsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatalabelingProjectsDatasetsListQueryParams extends SpeakeasyBase {
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
export declare class DatalabelingProjectsDatasetsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsDatasetsListRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsDatasetsListPathParams;
    queryParams: DatalabelingProjectsDatasetsListQueryParams;
    security: DatalabelingProjectsDatasetsListSecurity;
}
export declare class DatalabelingProjectsDatasetsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatalabelingV1beta1ListDatasetsResponse?: shared.GoogleCloudDatalabelingV1beta1ListDatasetsResponse;
    statusCode: number;
}
