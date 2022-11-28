import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChatSpacesMembersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ChatSpacesMembersListQueryParams extends SpeakeasyBase {
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
export declare class ChatSpacesMembersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChatSpacesMembersListRequest extends SpeakeasyBase {
    pathParams: ChatSpacesMembersListPathParams;
    queryParams: ChatSpacesMembersListQueryParams;
    security: ChatSpacesMembersListSecurity;
}
export declare class ChatSpacesMembersListResponse extends SpeakeasyBase {
    contentType: string;
    listMembershipsResponse?: shared.ListMembershipsResponse;
    statusCode: number;
}
