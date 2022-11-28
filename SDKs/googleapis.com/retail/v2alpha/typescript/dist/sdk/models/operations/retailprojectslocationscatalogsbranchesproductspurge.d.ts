import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsBranchesProductsPurgePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RetailProjectsLocationsCatalogsBranchesProductsPurgeQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsBranchesProductsPurgeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsBranchesProductsPurgeRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsBranchesProductsPurgePathParams;
    queryParams: RetailProjectsLocationsCatalogsBranchesProductsPurgeQueryParams;
    request?: shared.GoogleCloudRetailV2alphaPurgeProductsRequest;
    security: RetailProjectsLocationsCatalogsBranchesProductsPurgeSecurity;
}
export declare class RetailProjectsLocationsCatalogsBranchesProductsPurgeResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
