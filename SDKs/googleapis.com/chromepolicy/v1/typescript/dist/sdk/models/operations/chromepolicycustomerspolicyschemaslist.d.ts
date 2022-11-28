import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromepolicyCustomersPolicySchemasListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ChromepolicyCustomersPolicySchemasListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ChromepolicyCustomersPolicySchemasListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromepolicyCustomersPolicySchemasListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromepolicyCustomersPolicySchemasListSecurity extends SpeakeasyBase {
    option1?: ChromepolicyCustomersPolicySchemasListSecurityOption1;
    option2?: ChromepolicyCustomersPolicySchemasListSecurityOption2;
}
export declare class ChromepolicyCustomersPolicySchemasListRequest extends SpeakeasyBase {
    pathParams: ChromepolicyCustomersPolicySchemasListPathParams;
    queryParams: ChromepolicyCustomersPolicySchemasListQueryParams;
    security: ChromepolicyCustomersPolicySchemasListSecurity;
}
export declare class ChromepolicyCustomersPolicySchemasListResponse extends SpeakeasyBase {
    contentType: string;
    googleChromePolicyVersionsV1ListPolicySchemasResponse?: shared.GoogleChromePolicyVersionsV1ListPolicySchemasResponse;
    statusCode: number;
}
