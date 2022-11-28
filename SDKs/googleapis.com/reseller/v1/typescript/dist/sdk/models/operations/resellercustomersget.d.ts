import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResellerCustomersGetPathParams extends SpeakeasyBase {
    customerId: string;
}
export declare class ResellerCustomersGetQueryParams extends SpeakeasyBase {
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
export declare class ResellerCustomersGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ResellerCustomersGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ResellerCustomersGetSecurity extends SpeakeasyBase {
    option1?: ResellerCustomersGetSecurityOption1;
    option2?: ResellerCustomersGetSecurityOption2;
}
export declare class ResellerCustomersGetRequest extends SpeakeasyBase {
    pathParams: ResellerCustomersGetPathParams;
    queryParams: ResellerCustomersGetQueryParams;
    security: ResellerCustomersGetSecurity;
}
export declare class ResellerCustomersGetResponse extends SpeakeasyBase {
    contentType: string;
    customer?: shared.Customer;
    statusCode: number;
}
