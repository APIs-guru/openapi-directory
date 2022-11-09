import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class Oauth2TokeninfoQueryParams extends SpeakeasyBase {
    accessToken?: string;
    alt?: shared.AltEnum;
    fields?: string;
    idToken?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class Oauth2TokeninfoRequest extends SpeakeasyBase {
    queryParams: Oauth2TokeninfoQueryParams;
}
export declare class Oauth2TokeninfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tokeninfo?: shared.Tokeninfo;
}
