import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecommendationengineProjectsLocationsCatalogsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RecommendationengineProjectsLocationsCatalogsOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class RecommendationengineProjectsLocationsCatalogsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecommendationengineProjectsLocationsCatalogsOperationsGetRequest extends SpeakeasyBase {
    pathParams: RecommendationengineProjectsLocationsCatalogsOperationsGetPathParams;
    queryParams: RecommendationengineProjectsLocationsCatalogsOperationsGetQueryParams;
    security: RecommendationengineProjectsLocationsCatalogsOperationsGetSecurity;
}
export declare class RecommendationengineProjectsLocationsCatalogsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
