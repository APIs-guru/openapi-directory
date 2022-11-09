import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ResellerCustomersInsertQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    customerAuthToken?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ResellerCustomersInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ResellerCustomersInsertRequest extends SpeakeasyBase {
    queryParams: ResellerCustomersInsertQueryParams;
    request?: shared.Customer;
    security: ResellerCustomersInsertSecurity;
}
export declare class ResellerCustomersInsertResponse extends SpeakeasyBase {
    contentType: string;
    customer?: shared.Customer;
    statusCode: number;
}
