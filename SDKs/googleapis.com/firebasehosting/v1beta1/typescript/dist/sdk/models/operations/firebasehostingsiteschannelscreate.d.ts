import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasehostingSitesChannelsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebasehostingSitesChannelsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    channelId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirebasehostingSitesChannelsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesChannelsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesChannelsCreateSecurity extends SpeakeasyBase {
    option1?: FirebasehostingSitesChannelsCreateSecurityOption1;
    option2?: FirebasehostingSitesChannelsCreateSecurityOption2;
}
export declare class FirebasehostingSitesChannelsCreateRequest extends SpeakeasyBase {
    pathParams: FirebasehostingSitesChannelsCreatePathParams;
    queryParams: FirebasehostingSitesChannelsCreateQueryParams;
    request?: shared.ChannelInput;
    security: FirebasehostingSitesChannelsCreateSecurity;
}
export declare class FirebasehostingSitesChannelsCreateResponse extends SpeakeasyBase {
    channel?: shared.Channel;
    contentType: string;
    statusCode: number;
}
