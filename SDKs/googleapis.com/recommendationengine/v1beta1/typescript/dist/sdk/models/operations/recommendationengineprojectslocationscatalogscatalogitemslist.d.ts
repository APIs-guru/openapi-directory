import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecommendationengineProjectsLocationsCatalogsCatalogItemsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RecommendationengineProjectsLocationsCatalogsCatalogItemsListQueryParams extends SpeakeasyBase {
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
export declare class RecommendationengineProjectsLocationsCatalogsCatalogItemsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecommendationengineProjectsLocationsCatalogsCatalogItemsListRequest extends SpeakeasyBase {
    pathParams: RecommendationengineProjectsLocationsCatalogsCatalogItemsListPathParams;
    queryParams: RecommendationengineProjectsLocationsCatalogsCatalogItemsListQueryParams;
    security: RecommendationengineProjectsLocationsCatalogsCatalogItemsListSecurity;
}
export declare class RecommendationengineProjectsLocationsCatalogsCatalogItemsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecommendationengineV1beta1ListCatalogItemsResponse?: shared.GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse;
    statusCode: number;
}
