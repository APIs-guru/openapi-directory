import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsServingConfigsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsListQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsServingConfigsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsListRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsServingConfigsListPathParams;
    queryParams: RetailProjectsLocationsCatalogsServingConfigsListQueryParams;
    security: RetailProjectsLocationsCatalogsServingConfigsListSecurity;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRetailV2betaListServingConfigsResponse?: shared.GoogleCloudRetailV2betaListServingConfigsResponse;
    statusCode: number;
}
