import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ManufacturersAccountsProductsUpdatePathParams extends SpeakeasyBase {
    name: string;
    parent: string;
}
export declare class ManufacturersAccountsProductsUpdateQueryParams extends SpeakeasyBase {
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
export declare class ManufacturersAccountsProductsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ManufacturersAccountsProductsUpdateRequest extends SpeakeasyBase {
    pathParams: ManufacturersAccountsProductsUpdatePathParams;
    queryParams: ManufacturersAccountsProductsUpdateQueryParams;
    request?: shared.Attributes;
    security: ManufacturersAccountsProductsUpdateSecurity;
}
export declare class ManufacturersAccountsProductsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
