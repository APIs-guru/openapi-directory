import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsInvitationsAcceptPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessAccountsInvitationsAcceptQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsInvitationsAcceptRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsInvitationsAcceptPathParams;
    queryParams: MybusinessAccountsInvitationsAcceptQueryParams;
    request?: Map<string, any>;
}
export declare class MybusinessAccountsInvitationsAcceptResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
