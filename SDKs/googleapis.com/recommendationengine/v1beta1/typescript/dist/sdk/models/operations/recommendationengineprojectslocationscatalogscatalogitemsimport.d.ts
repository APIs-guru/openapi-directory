import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecommendationengineProjectsLocationsCatalogsCatalogItemsImportPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RecommendationengineProjectsLocationsCatalogsCatalogItemsImportQueryParams extends SpeakeasyBase {
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
export declare class RecommendationengineProjectsLocationsCatalogsCatalogItemsImportSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest extends SpeakeasyBase {
    pathParams: RecommendationengineProjectsLocationsCatalogsCatalogItemsImportPathParams;
    queryParams: RecommendationengineProjectsLocationsCatalogsCatalogItemsImportQueryParams;
    request?: shared.GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest;
    security: RecommendationengineProjectsLocationsCatalogsCatalogItemsImportSecurity;
}
export declare class RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
