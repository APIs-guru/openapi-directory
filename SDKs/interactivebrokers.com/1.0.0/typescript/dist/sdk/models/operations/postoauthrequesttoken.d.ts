import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostOauthRequestTokenRequestBody extends SpeakeasyBase {
    oauthCallback?: string;
    oauthConsumerKey?: string;
    oauthNonce?: string;
    oauthSignature?: string;
    oauthSignatureMethod?: string;
    oauthTimestamp?: string;
}
export declare class PostOauthRequestToken200ApplicationJson extends SpeakeasyBase {
    oauthToken?: string;
}
export declare class PostOauthRequestTokenRequest extends SpeakeasyBase {
    request: PostOauthRequestTokenRequestBody;
}
export declare class PostOauthRequestTokenResponse extends SpeakeasyBase {
    contentType: string;
    postOauthRequestToken200ApplicationJsonObject?: PostOauthRequestToken200ApplicationJson;
    statusCode: number;
}
