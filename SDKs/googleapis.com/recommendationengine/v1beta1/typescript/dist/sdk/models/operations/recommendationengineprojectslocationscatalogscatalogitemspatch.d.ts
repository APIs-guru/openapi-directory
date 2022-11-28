import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest extends SpeakeasyBase {
    pathParams: RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchPathParams;
    queryParams: RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchQueryParams;
    request?: shared.GoogleCloudRecommendationengineV1beta1CatalogItem;
    security: RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchSecurity;
}
export declare class RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecommendationengineV1beta1CatalogItem?: shared.GoogleCloudRecommendationengineV1beta1CatalogItem;
    statusCode: number;
}
