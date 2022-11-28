import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesPathParams extends SpeakeasyBase {
    product: string;
}
export declare class RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesPathParams;
    queryParams: RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesQueryParams;
    request?: shared.GoogleCloudRetailV2alphaRemoveFulfillmentPlacesRequest;
    security: RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesSecurity;
}
export declare class RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
