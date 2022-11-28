import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessaccountmanagementAccountsInvitationsDeclinePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessaccountmanagementAccountsInvitationsDeclineQueryParams extends SpeakeasyBase {
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
export declare class MybusinessaccountmanagementAccountsInvitationsDeclineRequest extends SpeakeasyBase {
    pathParams: MybusinessaccountmanagementAccountsInvitationsDeclinePathParams;
    queryParams: MybusinessaccountmanagementAccountsInvitationsDeclineQueryParams;
    request?: Map<string, any>;
}
export declare class MybusinessaccountmanagementAccountsInvitationsDeclineResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
