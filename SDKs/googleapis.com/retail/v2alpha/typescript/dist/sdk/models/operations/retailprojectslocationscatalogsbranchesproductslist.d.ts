import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsBranchesProductsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RetailProjectsLocationsCatalogsBranchesProductsListQueryParams extends SpeakeasyBase {
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
    readMask?: string;
    requireTotalSize?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RetailProjectsLocationsCatalogsBranchesProductsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsBranchesProductsListRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsBranchesProductsListPathParams;
    queryParams: RetailProjectsLocationsCatalogsBranchesProductsListQueryParams;
    security: RetailProjectsLocationsCatalogsBranchesProductsListSecurity;
}
export declare class RetailProjectsLocationsCatalogsBranchesProductsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRetailV2alphaListProductsResponse?: shared.GoogleCloudRetailV2alphaListProductsResponse;
    statusCode: number;
}
