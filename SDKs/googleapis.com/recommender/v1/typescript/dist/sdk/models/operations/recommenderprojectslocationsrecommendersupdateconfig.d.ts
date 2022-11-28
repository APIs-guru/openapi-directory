import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecommenderProjectsLocationsRecommendersUpdateConfigPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RecommenderProjectsLocationsRecommendersUpdateConfigQueryParams extends SpeakeasyBase {
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
    validateOnly?: boolean;
}
export declare class RecommenderProjectsLocationsRecommendersUpdateConfigSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecommenderProjectsLocationsRecommendersUpdateConfigRequest extends SpeakeasyBase {
    pathParams: RecommenderProjectsLocationsRecommendersUpdateConfigPathParams;
    queryParams: RecommenderProjectsLocationsRecommendersUpdateConfigQueryParams;
    request?: shared.GoogleCloudRecommenderV1RecommenderConfigInput;
    security: RecommenderProjectsLocationsRecommendersUpdateConfigSecurity;
}
export declare class RecommenderProjectsLocationsRecommendersUpdateConfigResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRecommenderV1RecommenderConfig?: shared.GoogleCloudRecommenderV1RecommenderConfig;
    statusCode: number;
}
