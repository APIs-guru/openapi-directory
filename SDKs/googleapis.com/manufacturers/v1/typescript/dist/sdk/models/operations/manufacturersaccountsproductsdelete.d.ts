import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ManufacturersAccountsProductsDeletePathParams extends SpeakeasyBase {
    name: string;
    parent: string;
}
export declare class ManufacturersAccountsProductsDeleteQueryParams extends SpeakeasyBase {
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
export declare class ManufacturersAccountsProductsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ManufacturersAccountsProductsDeleteRequest extends SpeakeasyBase {
    pathParams: ManufacturersAccountsProductsDeletePathParams;
    queryParams: ManufacturersAccountsProductsDeleteQueryParams;
    security: ManufacturersAccountsProductsDeleteSecurity;
}
export declare class ManufacturersAccountsProductsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
