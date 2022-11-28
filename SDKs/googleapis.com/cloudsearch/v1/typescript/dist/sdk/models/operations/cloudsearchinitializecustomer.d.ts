import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchInitializeCustomerQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchInitializeCustomerSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchInitializeCustomerSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchInitializeCustomerSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchInitializeCustomerSecurity extends SpeakeasyBase {
    option1?: CloudsearchInitializeCustomerSecurityOption1;
    option2?: CloudsearchInitializeCustomerSecurityOption2;
    option3?: CloudsearchInitializeCustomerSecurityOption3;
}
export declare class CloudsearchInitializeCustomerRequest extends SpeakeasyBase {
    queryParams: CloudsearchInitializeCustomerQueryParams;
    request?: Map<string, any>;
    security: CloudsearchInitializeCustomerSecurity;
}
export declare class CloudsearchInitializeCustomerResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
