import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsBranchesProductsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RetailProjectsLocationsCatalogsBranchesProductsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    productId?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsBranchesProductsCreateRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsBranchesProductsCreatePathParams;
    queryParams: RetailProjectsLocationsCatalogsBranchesProductsCreateQueryParams;
    request?: shared.GoogleCloudRetailV2ProductInput;
    security: RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity;
}
export declare class RetailProjectsLocationsCatalogsBranchesProductsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRetailV2Product?: shared.GoogleCloudRetailV2Product;
    statusCode: number;
}
