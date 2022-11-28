import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecommendationengineProjectsLocationsCatalogsCatalogItemsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateQueryParams extends SpeakeasyBase {
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
export declare class RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest extends SpeakeasyBase {
    pathParams: RecommendationengineProjectsLocationsCatalogsCatalogItemsCreatePathParams;
    queryParams: RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateQueryParams;
    request?: shared.GoogleCloudRecommendationengineV1beta1CatalogItem;
    security: RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateSecurity;
}
export declare class RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecommendationengineV1beta1CatalogItem?: shared.GoogleCloudRecommendationengineV1beta1CatalogItem;
    statusCode: number;
}
