import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchSettingsGetCustomerQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchSettingsGetCustomerSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsGetCustomerSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsGetCustomerSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsGetCustomerSecurity extends SpeakeasyBase {
    option1?: CloudsearchSettingsGetCustomerSecurityOption1;
    option2?: CloudsearchSettingsGetCustomerSecurityOption2;
    option3?: CloudsearchSettingsGetCustomerSecurityOption3;
}
export declare class CloudsearchSettingsGetCustomerRequest extends SpeakeasyBase {
    queryParams: CloudsearchSettingsGetCustomerQueryParams;
    security: CloudsearchSettingsGetCustomerSecurity;
}
export declare class CloudsearchSettingsGetCustomerResponse extends SpeakeasyBase {
    contentType: string;
    customerSettings?: shared.CustomerSettings;
    statusCode: number;
}
