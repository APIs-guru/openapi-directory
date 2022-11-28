import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeLiveStreamsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id: string;
    key?: string;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    onBehalfOfContentOwnerChannel?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeLiveStreamsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveStreamsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveStreamsDeleteSecurity extends SpeakeasyBase {
    option1?: YoutubeLiveStreamsDeleteSecurityOption1;
    option2?: YoutubeLiveStreamsDeleteSecurityOption2;
}
export declare class YoutubeLiveStreamsDeleteRequest extends SpeakeasyBase {
    queryParams: YoutubeLiveStreamsDeleteQueryParams;
    security: YoutubeLiveStreamsDeleteSecurity;
}
export declare class YoutubeLiveStreamsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
