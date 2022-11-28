import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromepolicyCustomersPoliciesOrgunitsBatchModifyPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class ChromepolicyCustomersPoliciesOrgunitsBatchModifyQueryParams extends SpeakeasyBase {
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
export declare class ChromepolicyCustomersPoliciesOrgunitsBatchModifySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromepolicyCustomersPoliciesOrgunitsBatchModifyRequest extends SpeakeasyBase {
    pathParams: ChromepolicyCustomersPoliciesOrgunitsBatchModifyPathParams;
    queryParams: ChromepolicyCustomersPoliciesOrgunitsBatchModifyQueryParams;
    request?: shared.GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest;
    security: ChromepolicyCustomersPoliciesOrgunitsBatchModifySecurity;
}
export declare class ChromepolicyCustomersPoliciesOrgunitsBatchModifyResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
