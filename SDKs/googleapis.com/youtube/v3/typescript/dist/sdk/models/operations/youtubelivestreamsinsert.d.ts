import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeLiveStreamsInsertQueryParams extends SpeakeasyBase {
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
export declare class YoutubeLiveStreamsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveStreamsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveStreamsInsertSecurity extends SpeakeasyBase {
    option1?: YoutubeLiveStreamsInsertSecurityOption1;
    option2?: YoutubeLiveStreamsInsertSecurityOption2;
}
export declare class YoutubeLiveStreamsInsertRequest extends SpeakeasyBase {
    queryParams: YoutubeLiveStreamsInsertQueryParams;
    request?: shared.LiveStream;
    security: YoutubeLiveStreamsInsertSecurity;
}
export declare class YoutubeLiveStreamsInsertResponse extends SpeakeasyBase {
    contentType: string;
    liveStream?: shared.LiveStream;
    statusCode: number;
}
