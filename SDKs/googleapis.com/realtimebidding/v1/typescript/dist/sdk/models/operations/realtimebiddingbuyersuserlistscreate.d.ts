import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBuyersUserListsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RealtimebiddingBuyersUserListsCreateQueryParams extends SpeakeasyBase {
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
export declare class RealtimebiddingBuyersUserListsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBuyersUserListsCreateRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBuyersUserListsCreatePathParams;
    queryParams: RealtimebiddingBuyersUserListsCreateQueryParams;
    request?: shared.UserListInput;
    security: RealtimebiddingBuyersUserListsCreateSecurity;
}
export declare class RealtimebiddingBuyersUserListsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userList?: shared.UserList;
}
