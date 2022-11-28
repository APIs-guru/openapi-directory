import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum YoutubeMembersListModeEnum {
    ListMembersModeUnknown = "listMembersModeUnknown",
    Updates = "updates",
    AllCurrent = "all_current"
}
export declare class YoutubeMembersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filterByMemberChannelId?: string;
    hasAccessToLevel?: string;
    key?: string;
    maxResults?: number;
    mode?: YoutubeMembersListModeEnum;
    oauthToken?: string;
    pageToken?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeMembersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeMembersListRequest extends SpeakeasyBase {
    queryParams: YoutubeMembersListQueryParams;
    security: YoutubeMembersListSecurity;
}
export declare class YoutubeMembersListResponse extends SpeakeasyBase {
    contentType: string;
    memberListResponse?: shared.MemberListResponse;
    statusCode: number;
}
