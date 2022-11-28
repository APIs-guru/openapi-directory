import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsServingConfigsSearchPathParams extends SpeakeasyBase {
    placement: string;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsSearchQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsServingConfigsSearchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsSearchRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsServingConfigsSearchPathParams;
    queryParams: RetailProjectsLocationsCatalogsServingConfigsSearchQueryParams;
    request?: shared.GoogleCloudRetailV2betaSearchRequest;
    security: RetailProjectsLocationsCatalogsServingConfigsSearchSecurity;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsSearchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRetailV2betaSearchResponse?: shared.GoogleCloudRetailV2betaSearchResponse;
    statusCode: number;
}
