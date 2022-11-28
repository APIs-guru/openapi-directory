import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsDatasetsDataItemsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatalabelingProjectsDatasetsDataItemsListQueryParams extends SpeakeasyBase {
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
export declare class DatalabelingProjectsDatasetsDataItemsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsDatasetsDataItemsListRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsDatasetsDataItemsListPathParams;
    queryParams: DatalabelingProjectsDatasetsDataItemsListQueryParams;
    security: DatalabelingProjectsDatasetsDataItemsListSecurity;
}
export declare class DatalabelingProjectsDatasetsDataItemsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatalabelingV1beta1ListDataItemsResponse?: shared.GoogleCloudDatalabelingV1beta1ListDataItemsResponse;
    statusCode: number;
}
