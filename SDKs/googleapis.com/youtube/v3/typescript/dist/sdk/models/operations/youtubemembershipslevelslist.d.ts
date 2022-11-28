import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeMembershipsLevelsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeMembershipsLevelsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeMembershipsLevelsListRequest extends SpeakeasyBase {
    queryParams: YoutubeMembershipsLevelsListQueryParams;
    security: YoutubeMembershipsLevelsListSecurity;
}
export declare class YoutubeMembershipsLevelsListResponse extends SpeakeasyBase {
    contentType: string;
    membershipsLevelListResponse?: shared.MembershipsLevelListResponse;
    statusCode: number;
}
