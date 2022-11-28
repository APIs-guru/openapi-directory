import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendPathParams extends SpeakeasyBase {
    servingConfig: string;
}
export declare class DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendQueryParams extends SpeakeasyBase {
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
export declare class DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest extends SpeakeasyBase {
    pathParams: DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendPathParams;
    queryParams: DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendQueryParams;
    request?: shared.GoogleCloudDiscoveryengineV1alphaRecommendRequest;
    security: DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendSecurity;
}
export declare class DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDiscoveryengineV1alphaRecommendResponse?: shared.GoogleCloudDiscoveryengineV1alphaRecommendResponse;
    statusCode: number;
}
