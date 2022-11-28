import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeLiveChatBansInsertQueryParams extends SpeakeasyBase {
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
export declare class YoutubeLiveChatBansInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveChatBansInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveChatBansInsertSecurity extends SpeakeasyBase {
    option1?: YoutubeLiveChatBansInsertSecurityOption1;
    option2?: YoutubeLiveChatBansInsertSecurityOption2;
}
export declare class YoutubeLiveChatBansInsertRequest extends SpeakeasyBase {
    queryParams: YoutubeLiveChatBansInsertQueryParams;
    request?: shared.LiveChatBan;
    security: YoutubeLiveChatBansInsertSecurity;
}
export declare class YoutubeLiveChatBansInsertResponse extends SpeakeasyBase {
    contentType: string;
    liveChatBan?: shared.LiveChatBan;
    statusCode: number;
}
