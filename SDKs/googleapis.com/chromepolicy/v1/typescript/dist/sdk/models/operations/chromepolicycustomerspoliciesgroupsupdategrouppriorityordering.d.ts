import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingQueryParams extends SpeakeasyBase {
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
export declare class ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingRequest extends SpeakeasyBase {
    pathParams: ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingPathParams;
    queryParams: ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingQueryParams;
    request?: shared.GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest;
    security: ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingSecurity;
}
export declare class ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
