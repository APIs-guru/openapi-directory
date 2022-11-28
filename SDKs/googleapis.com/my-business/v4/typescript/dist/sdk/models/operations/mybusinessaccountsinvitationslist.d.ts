import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsInvitationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum MybusinessAccountsInvitationsListTargetTypeEnum {
    All = "ALL",
    AccountsOnly = "ACCOUNTS_ONLY",
    LocationsOnly = "LOCATIONS_ONLY"
}
export declare class MybusinessAccountsInvitationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    targetType?: MybusinessAccountsInvitationsListTargetTypeEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessAccountsInvitationsListRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsInvitationsListPathParams;
    queryParams: MybusinessAccountsInvitationsListQueryParams;
}
export declare class MybusinessAccountsInvitationsListResponse extends SpeakeasyBase {
    contentType: string;
    listInvitationsResponse?: shared.ListInvitationsResponse;
    statusCode: number;
}
