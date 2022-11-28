import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBuyersUserListsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum RealtimebiddingBuyersUserListsGetViewEnum {
    CreativeViewUnspecified = "CREATIVE_VIEW_UNSPECIFIED",
    ServingDecisionOnly = "SERVING_DECISION_ONLY",
    Full = "FULL"
}
export declare class RealtimebiddingBuyersUserListsGetQueryParams extends SpeakeasyBase {
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
    view?: RealtimebiddingBuyersUserListsGetViewEnum;
}
export declare class RealtimebiddingBuyersUserListsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBuyersUserListsGetRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBuyersUserListsGetPathParams;
    queryParams: RealtimebiddingBuyersUserListsGetQueryParams;
    security: RealtimebiddingBuyersUserListsGetSecurity;
}
export declare class RealtimebiddingBuyersUserListsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userList?: shared.UserList;
}
