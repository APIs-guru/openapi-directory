import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class Oauth2UserinfoV2MeGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class Oauth2UserinfoV2MeGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Oauth2UserinfoV2MeGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Oauth2UserinfoV2MeGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Oauth2UserinfoV2MeGetSecurity extends SpeakeasyBase {
    option1?: Oauth2UserinfoV2MeGetSecurityOption1;
    option2?: Oauth2UserinfoV2MeGetSecurityOption2;
    option3?: Oauth2UserinfoV2MeGetSecurityOption3;
}
export declare class Oauth2UserinfoV2MeGetRequest extends SpeakeasyBase {
    queryParams: Oauth2UserinfoV2MeGetQueryParams;
    security: Oauth2UserinfoV2MeGetSecurity;
}
export declare class Oauth2UserinfoV2MeGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userinfo?: shared.Userinfo;
}
