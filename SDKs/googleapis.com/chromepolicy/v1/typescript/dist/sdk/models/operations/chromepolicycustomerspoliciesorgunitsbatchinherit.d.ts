import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromepolicyCustomersPoliciesOrgunitsBatchInheritPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class ChromepolicyCustomersPoliciesOrgunitsBatchInheritQueryParams extends SpeakeasyBase {
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
export declare class ChromepolicyCustomersPoliciesOrgunitsBatchInheritSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromepolicyCustomersPoliciesOrgunitsBatchInheritRequest extends SpeakeasyBase {
    pathParams: ChromepolicyCustomersPoliciesOrgunitsBatchInheritPathParams;
    queryParams: ChromepolicyCustomersPoliciesOrgunitsBatchInheritQueryParams;
    request?: shared.GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest;
    security: ChromepolicyCustomersPoliciesOrgunitsBatchInheritSecurity;
}
export declare class ChromepolicyCustomersPoliciesOrgunitsBatchInheritResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
