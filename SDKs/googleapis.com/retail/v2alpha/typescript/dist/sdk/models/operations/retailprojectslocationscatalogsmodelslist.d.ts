import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsModelsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RetailProjectsLocationsCatalogsModelsListQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsModelsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsModelsListRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsModelsListPathParams;
    queryParams: RetailProjectsLocationsCatalogsModelsListQueryParams;
    security: RetailProjectsLocationsCatalogsModelsListSecurity;
}
export declare class RetailProjectsLocationsCatalogsModelsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRetailV2alphaListModelsResponse?: shared.GoogleCloudRetailV2alphaListModelsResponse;
    statusCode: number;
}
