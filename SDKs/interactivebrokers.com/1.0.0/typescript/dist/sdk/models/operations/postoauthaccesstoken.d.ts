import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostOauthAccessTokenRequestBody extends SpeakeasyBase {
    oauthConsumerKey?: string;
    oauthNonce?: string;
    oauthSignature?: string;
    oauthSignatureMethod?: string;
    oauthTimestamp?: string;
    oauthToken?: string;
    oauthVerifier?: string;
}
export declare class PostOauthAccessToken200ApplicationJson extends SpeakeasyBase {
    oauthToken?: string;
    oauthTokenSecret?: string;
}
export declare class PostOauthAccessTokenRequest extends SpeakeasyBase {
    request: PostOauthAccessTokenRequestBody;
}
export declare class PostOauthAccessTokenResponse extends SpeakeasyBase {
    contentType: string;
    postOauthAccessToken200ApplicationJsonObject?: PostOauthAccessToken200ApplicationJson;
    statusCode: number;
}
