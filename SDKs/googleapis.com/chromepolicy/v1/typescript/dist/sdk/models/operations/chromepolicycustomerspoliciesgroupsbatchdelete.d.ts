import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromepolicyCustomersPoliciesGroupsBatchDeletePathParams extends SpeakeasyBase {
    customer: string;
}
export declare class ChromepolicyCustomersPoliciesGroupsBatchDeleteQueryParams extends SpeakeasyBase {
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
export declare class ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest extends SpeakeasyBase {
    pathParams: ChromepolicyCustomersPoliciesGroupsBatchDeletePathParams;
    queryParams: ChromepolicyCustomersPoliciesGroupsBatchDeleteQueryParams;
    request?: shared.GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest;
    security: ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity;
}
export declare class ChromepolicyCustomersPoliciesGroupsBatchDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
