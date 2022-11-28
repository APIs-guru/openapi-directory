import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBuyersUserListsOpenPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RealtimebiddingBuyersUserListsOpenQueryParams extends SpeakeasyBase {
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
export declare class RealtimebiddingBuyersUserListsOpenSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBuyersUserListsOpenRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBuyersUserListsOpenPathParams;
    queryParams: RealtimebiddingBuyersUserListsOpenQueryParams;
    request?: Map<string, any>;
    security: RealtimebiddingBuyersUserListsOpenSecurity;
}
export declare class RealtimebiddingBuyersUserListsOpenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userList?: shared.UserList;
}
