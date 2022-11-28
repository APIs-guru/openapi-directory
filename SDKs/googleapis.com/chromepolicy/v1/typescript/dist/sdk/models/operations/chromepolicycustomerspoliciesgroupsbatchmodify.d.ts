import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromepolicyCustomersPoliciesGroupsBatchModifyPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class ChromepolicyCustomersPoliciesGroupsBatchModifyQueryParams extends SpeakeasyBase {
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
export declare class ChromepolicyCustomersPoliciesGroupsBatchModifySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromepolicyCustomersPoliciesGroupsBatchModifyRequest extends SpeakeasyBase {
    pathParams: ChromepolicyCustomersPoliciesGroupsBatchModifyPathParams;
    queryParams: ChromepolicyCustomersPoliciesGroupsBatchModifyQueryParams;
    request?: shared.GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest;
    security: ChromepolicyCustomersPoliciesGroupsBatchModifySecurity;
}
export declare class ChromepolicyCustomersPoliciesGroupsBatchModifyResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
