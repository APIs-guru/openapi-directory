import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecommendationengineProjectsLocationsCatalogsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RecommendationengineProjectsLocationsCatalogsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class RecommendationengineProjectsLocationsCatalogsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RecommendationengineProjectsLocationsCatalogsOperationsListRequest extends SpeakeasyBase {
    pathParams: RecommendationengineProjectsLocationsCatalogsOperationsListPathParams;
    queryParams: RecommendationengineProjectsLocationsCatalogsOperationsListQueryParams;
    security: RecommendationengineProjectsLocationsCatalogsOperationsListSecurity;
}
export declare class RecommendationengineProjectsLocationsCatalogsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningListOperationsResponse?: shared.GoogleLongrunningListOperationsResponse;
    statusCode: number;
}
