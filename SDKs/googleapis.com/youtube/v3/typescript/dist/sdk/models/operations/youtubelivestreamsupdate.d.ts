import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeLiveStreamsUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    onBehalfOfContentOwnerChannel?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeLiveStreamsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveStreamsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveStreamsUpdateSecurity extends SpeakeasyBase {
    option1?: YoutubeLiveStreamsUpdateSecurityOption1;
    option2?: YoutubeLiveStreamsUpdateSecurityOption2;
}
export declare class YoutubeLiveStreamsUpdateRequest extends SpeakeasyBase {
    queryParams: YoutubeLiveStreamsUpdateQueryParams;
    request?: shared.LiveStream;
    security: YoutubeLiveStreamsUpdateSecurity;
}
export declare class YoutubeLiveStreamsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    liveStream?: shared.LiveStream;
    statusCode: number;
}
