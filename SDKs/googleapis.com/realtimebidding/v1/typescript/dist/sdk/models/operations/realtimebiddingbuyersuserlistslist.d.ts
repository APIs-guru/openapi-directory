import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBuyersUserListsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RealtimebiddingBuyersUserListsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RealtimebiddingBuyersUserListsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBuyersUserListsListRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBuyersUserListsListPathParams;
    queryParams: RealtimebiddingBuyersUserListsListQueryParams;
    security: RealtimebiddingBuyersUserListsListSecurity;
}
export declare class RealtimebiddingBuyersUserListsListResponse extends SpeakeasyBase {
    contentType: string;
    listUserListsResponse?: shared.ListUserListsResponse;
    statusCode: number;
}
