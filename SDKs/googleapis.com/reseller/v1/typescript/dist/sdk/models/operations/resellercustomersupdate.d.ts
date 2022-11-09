import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ResellerCustomersUpdatePathParams extends SpeakeasyBase {
    customerId: string;
}
export declare class ResellerCustomersUpdateQueryParams extends SpeakeasyBase {
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
export declare class ResellerCustomersUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ResellerCustomersUpdateRequest extends SpeakeasyBase {
    pathParams: ResellerCustomersUpdatePathParams;
    queryParams: ResellerCustomersUpdateQueryParams;
    request?: shared.Customer;
    security: ResellerCustomersUpdateSecurity;
}
export declare class ResellerCustomersUpdateResponse extends SpeakeasyBase {
    contentType: string;
    customer?: shared.Customer;
    statusCode: number;
}
