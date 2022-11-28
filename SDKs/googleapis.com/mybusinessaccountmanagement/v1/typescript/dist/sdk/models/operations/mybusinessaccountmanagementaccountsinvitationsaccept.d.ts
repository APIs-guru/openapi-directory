import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessaccountmanagementAccountsInvitationsAcceptPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessaccountmanagementAccountsInvitationsAcceptQueryParams extends SpeakeasyBase {
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
export declare class MybusinessaccountmanagementAccountsInvitationsAcceptRequest extends SpeakeasyBase {
    pathParams: MybusinessaccountmanagementAccountsInvitationsAcceptPathParams;
    queryParams: MybusinessaccountmanagementAccountsInvitationsAcceptQueryParams;
    request?: Map<string, any>;
}
export declare class MybusinessaccountmanagementAccountsInvitationsAcceptResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
