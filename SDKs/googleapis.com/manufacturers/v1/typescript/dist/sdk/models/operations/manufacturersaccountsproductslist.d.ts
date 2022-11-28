import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ManufacturersAccountsProductsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum ManufacturersAccountsProductsListIncludeEnum {
    Unknown = "UNKNOWN",
    Attributes = "ATTRIBUTES",
    Issues = "ISSUES",
    DestinationStatuses = "DESTINATION_STATUSES"
}
export declare class ManufacturersAccountsProductsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    include?: ManufacturersAccountsProductsListIncludeEnum[];
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ManufacturersAccountsProductsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ManufacturersAccountsProductsListRequest extends SpeakeasyBase {
    pathParams: ManufacturersAccountsProductsListPathParams;
    queryParams: ManufacturersAccountsProductsListQueryParams;
    security: ManufacturersAccountsProductsListSecurity;
}
export declare class ManufacturersAccountsProductsListResponse extends SpeakeasyBase {
    contentType: string;
    listProductsResponse?: shared.ListProductsResponse;
    statusCode: number;
}
