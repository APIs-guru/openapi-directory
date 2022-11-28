import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingQueryParams extends SpeakeasyBase {
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
export declare class ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurity extends SpeakeasyBase {
    option1?: ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurityOption1;
    option2?: ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurityOption2;
}
export declare class ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingRequest extends SpeakeasyBase {
    pathParams: ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingPathParams;
    queryParams: ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingQueryParams;
    request?: shared.GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest;
    security: ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurity;
}
export declare class ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingResponse extends SpeakeasyBase {
    contentType: string;
    googleChromePolicyVersionsV1ListGroupPriorityOrderingResponse?: shared.GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse;
    statusCode: number;
}
