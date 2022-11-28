import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesPathParams extends SpeakeasyBase {
    product: string;
}
export declare class RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesPathParams;
    queryParams: RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesQueryParams;
    request?: shared.GoogleCloudRetailV2betaAddLocalInventoriesRequest;
    security: RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesSecurity;
}
export declare class RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
