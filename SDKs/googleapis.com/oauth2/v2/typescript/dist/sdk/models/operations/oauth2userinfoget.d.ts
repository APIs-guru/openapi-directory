import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class Oauth2UserinfoGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class Oauth2UserinfoGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Oauth2UserinfoGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Oauth2UserinfoGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Oauth2UserinfoGetSecurity extends SpeakeasyBase {
    option1?: Oauth2UserinfoGetSecurityOption1;
    option2?: Oauth2UserinfoGetSecurityOption2;
    option3?: Oauth2UserinfoGetSecurityOption3;
}
export declare class Oauth2UserinfoGetRequest extends SpeakeasyBase {
    queryParams: Oauth2UserinfoGetQueryParams;
    security: Oauth2UserinfoGetSecurity;
}
export declare class Oauth2UserinfoGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userinfo?: shared.Userinfo;
}
