import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoUsersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoUsersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoUsersListRequest extends SpeakeasyBase {
    queryParams: DisplayvideoUsersListQueryParams;
    security: DisplayvideoUsersListSecurity;
}
export declare class DisplayvideoUsersListResponse extends SpeakeasyBase {
    contentType: string;
    listUsersResponse?: shared.ListUsersResponse;
    statusCode: number;
}
