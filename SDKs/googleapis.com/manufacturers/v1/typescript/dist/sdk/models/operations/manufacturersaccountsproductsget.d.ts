import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ManufacturersAccountsProductsGetPathParams extends SpeakeasyBase {
    name: string;
    parent: string;
}
export declare enum ManufacturersAccountsProductsGetIncludeEnum {
    Unknown = "UNKNOWN",
    Attributes = "ATTRIBUTES",
    Issues = "ISSUES",
    DestinationStatuses = "DESTINATION_STATUSES"
}
export declare class ManufacturersAccountsProductsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    include?: ManufacturersAccountsProductsGetIncludeEnum[];
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ManufacturersAccountsProductsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ManufacturersAccountsProductsGetRequest extends SpeakeasyBase {
    pathParams: ManufacturersAccountsProductsGetPathParams;
    queryParams: ManufacturersAccountsProductsGetQueryParams;
    security: ManufacturersAccountsProductsGetSecurity;
}
export declare class ManufacturersAccountsProductsGetResponse extends SpeakeasyBase {
    contentType: string;
    product?: shared.Product;
    statusCode: number;
}
