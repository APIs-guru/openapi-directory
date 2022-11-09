import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MybusinessaccountmanagementAccountsInvitationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessaccountmanagementAccountsInvitationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessaccountmanagementAccountsInvitationsListRequest extends SpeakeasyBase {
    pathParams: MybusinessaccountmanagementAccountsInvitationsListPathParams;
    queryParams: MybusinessaccountmanagementAccountsInvitationsListQueryParams;
}
export declare class MybusinessaccountmanagementAccountsInvitationsListResponse extends SpeakeasyBase {
    contentType: string;
    listInvitationsResponse?: shared.ListInvitationsResponse;
    statusCode: number;
}
