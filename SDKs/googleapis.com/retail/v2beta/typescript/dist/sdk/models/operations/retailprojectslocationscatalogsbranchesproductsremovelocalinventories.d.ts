import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesPathParams extends SpeakeasyBase {
    product: string;
}
export declare class RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesPathParams;
    queryParams: RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesQueryParams;
    request?: shared.GoogleCloudRetailV2betaRemoveLocalInventoriesRequest;
    security: RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesSecurity;
}
export declare class RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
