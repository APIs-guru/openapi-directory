import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsInvitationsDeclinePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessAccountsInvitationsDeclineQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsInvitationsDeclineRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsInvitationsDeclinePathParams;
    queryParams: MybusinessAccountsInvitationsDeclineQueryParams;
    request?: Map<string, any>;
}
export declare class MybusinessAccountsInvitationsDeclineResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
