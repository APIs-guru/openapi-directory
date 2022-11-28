import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostOauthLiveSessionTokenRequestBody extends SpeakeasyBase {
    diffieHellmanChallenge?: string;
    oauthConsumerKey?: string;
    oauthNonce?: string;
    oauthSignature?: string;
    oauthSignatureMethod?: string;
    oauthTimestamp?: string;
    oauthToken?: string;
}
export declare class PostOauthLiveSessionToken200ApplicationJson extends SpeakeasyBase {
    diffieHellmanResponse?: string;
    liveSessionTokenSignature?: string;
}
export declare class PostOauthLiveSessionTokenRequest extends SpeakeasyBase {
    request: PostOauthLiveSessionTokenRequestBody;
}
export declare class PostOauthLiveSessionTokenResponse extends SpeakeasyBase {
    contentType: string;
    postOauthLiveSessionToken200ApplicationJsonObject?: PostOauthLiveSessionToken200ApplicationJson;
    statusCode: number;
}
