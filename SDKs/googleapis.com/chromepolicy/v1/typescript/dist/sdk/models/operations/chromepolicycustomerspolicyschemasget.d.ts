import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromepolicyCustomersPolicySchemasGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ChromepolicyCustomersPolicySchemasGetQueryParams extends SpeakeasyBase {
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
export declare class ChromepolicyCustomersPolicySchemasGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromepolicyCustomersPolicySchemasGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromepolicyCustomersPolicySchemasGetSecurity extends SpeakeasyBase {
    option1?: ChromepolicyCustomersPolicySchemasGetSecurityOption1;
    option2?: ChromepolicyCustomersPolicySchemasGetSecurityOption2;
}
export declare class ChromepolicyCustomersPolicySchemasGetRequest extends SpeakeasyBase {
    pathParams: ChromepolicyCustomersPolicySchemasGetPathParams;
    queryParams: ChromepolicyCustomersPolicySchemasGetQueryParams;
    security: ChromepolicyCustomersPolicySchemasGetSecurity;
}
export declare class ChromepolicyCustomersPolicySchemasGetResponse extends SpeakeasyBase {
    contentType: string;
    googleChromePolicyVersionsV1PolicySchema?: shared.GoogleChromePolicyVersionsV1PolicySchema;
    statusCode: number;
}
