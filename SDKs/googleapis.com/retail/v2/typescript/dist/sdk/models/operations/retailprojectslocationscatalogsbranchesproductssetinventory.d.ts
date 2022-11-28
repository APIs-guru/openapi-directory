import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsBranchesProductsSetInventoryPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RetailProjectsLocationsCatalogsBranchesProductsSetInventoryQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsBranchesProductsSetInventorySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsBranchesProductsSetInventoryRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsBranchesProductsSetInventoryPathParams;
    queryParams: RetailProjectsLocationsCatalogsBranchesProductsSetInventoryQueryParams;
    request?: shared.GoogleCloudRetailV2SetInventoryRequestInput;
    security: RetailProjectsLocationsCatalogsBranchesProductsSetInventorySecurity;
}
export declare class RetailProjectsLocationsCatalogsBranchesProductsSetInventoryResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
