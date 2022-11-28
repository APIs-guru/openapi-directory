import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeLiveStreamsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id?: string[];
    key?: string;
    maxResults?: number;
    mine?: boolean;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    onBehalfOfContentOwnerChannel?: string;
    pageToken?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeLiveStreamsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveStreamsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveStreamsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveStreamsListSecurity extends SpeakeasyBase {
    option1?: YoutubeLiveStreamsListSecurityOption1;
    option2?: YoutubeLiveStreamsListSecurityOption2;
    option3?: YoutubeLiveStreamsListSecurityOption3;
}
export declare class YoutubeLiveStreamsListRequest extends SpeakeasyBase {
    queryParams: YoutubeLiveStreamsListQueryParams;
    security: YoutubeLiveStreamsListSecurity;
}
export declare class YoutubeLiveStreamsListResponse extends SpeakeasyBase {
    contentType: string;
    liveStreamListResponse?: shared.LiveStreamListResponse;
    statusCode: number;
}
