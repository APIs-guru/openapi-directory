import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecommendationengineProjectsLocationsCatalogsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RecommendationengineProjectsLocationsCatalogsListQueryParams extends SpeakeasyBase {
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
export declare class RecommendationengineProjectsLocationsCatalogsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecommendationengineProjectsLocationsCatalogsListRequest extends SpeakeasyBase {
    pathParams: RecommendationengineProjectsLocationsCatalogsListPathParams;
    queryParams: RecommendationengineProjectsLocationsCatalogsListQueryParams;
    security: RecommendationengineProjectsLocationsCatalogsListSecurity;
}
export declare class RecommendationengineProjectsLocationsCatalogsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecommendationengineV1beta1ListCatalogsResponse?: shared.GoogleCloudRecommendationengineV1beta1ListCatalogsResponse;
    statusCode: number;
}
