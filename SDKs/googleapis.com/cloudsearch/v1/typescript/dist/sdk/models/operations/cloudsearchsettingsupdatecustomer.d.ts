import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchSettingsUpdateCustomerQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudsearchSettingsUpdateCustomerSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsUpdateCustomerSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsUpdateCustomerSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsUpdateCustomerSecurity extends SpeakeasyBase {
    option1?: CloudsearchSettingsUpdateCustomerSecurityOption1;
    option2?: CloudsearchSettingsUpdateCustomerSecurityOption2;
    option3?: CloudsearchSettingsUpdateCustomerSecurityOption3;
}
export declare class CloudsearchSettingsUpdateCustomerRequest extends SpeakeasyBase {
    queryParams: CloudsearchSettingsUpdateCustomerQueryParams;
    request?: shared.CustomerSettings;
    security: CloudsearchSettingsUpdateCustomerSecurity;
}
export declare class CloudsearchSettingsUpdateCustomerResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
