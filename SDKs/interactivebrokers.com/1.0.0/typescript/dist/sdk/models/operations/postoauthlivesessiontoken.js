var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
var PostOauthLiveSessionTokenRequestBody = /** @class */ (function (_super) {
    __extends(PostOauthLiveSessionTokenRequestBody, _super);
    function PostOauthLiveSessionTokenRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diffie_hellman_challenge" }),
        __metadata("design:type", String)
    ], PostOauthLiveSessionTokenRequestBody.prototype, "diffieHellmanChallenge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth_consumer_key" }),
        __metadata("design:type", String)
    ], PostOauthLiveSessionTokenRequestBody.prototype, "oauthConsumerKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth_nonce" }),
        __metadata("design:type", String)
    ], PostOauthLiveSessionTokenRequestBody.prototype, "oauthNonce", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth_signature" }),
        __metadata("design:type", String)
    ], PostOauthLiveSessionTokenRequestBody.prototype, "oauthSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth_signature_method" }),
        __metadata("design:type", String)
    ], PostOauthLiveSessionTokenRequestBody.prototype, "oauthSignatureMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth_timestamp" }),
        __metadata("design:type", String)
    ], PostOauthLiveSessionTokenRequestBody.prototype, "oauthTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth_token" }),
        __metadata("design:type", String)
    ], PostOauthLiveSessionTokenRequestBody.prototype, "oauthToken", void 0);
    return PostOauthLiveSessionTokenRequestBody;
}(SpeakeasyBase));
export { PostOauthLiveSessionTokenRequestBody };
var PostOauthLiveSessionToken200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostOauthLiveSessionToken200ApplicationJson, _super);
    function PostOauthLiveSessionToken200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diffie_hellman_response" }),
        __metadata("design:type", String)
    ], PostOauthLiveSessionToken200ApplicationJson.prototype, "diffieHellmanResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=live_session_token_signature" }),
        __metadata("design:type", String)
    ], PostOauthLiveSessionToken200ApplicationJson.prototype, "liveSessionTokenSignature", void 0);
    return PostOauthLiveSessionToken200ApplicationJson;
}(SpeakeasyBase));
export { PostOauthLiveSessionToken200ApplicationJson };
var PostOauthLiveSessionTokenRequest = /** @class */ (function (_super) {
    __extends(PostOauthLiveSessionTokenRequest, _super);
    function PostOauthLiveSessionTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostOauthLiveSessionTokenRequestBody)
    ], PostOauthLiveSessionTokenRequest.prototype, "request", void 0);
    return PostOauthLiveSessionTokenRequest;
}(SpeakeasyBase));
export { PostOauthLiveSessionTokenRequest };
var PostOauthLiveSessionTokenResponse = /** @class */ (function (_super) {
    __extends(PostOauthLiveSessionTokenResponse, _super);
    function PostOauthLiveSessionTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostOauthLiveSessionTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostOauthLiveSessionToken200ApplicationJson)
    ], PostOauthLiveSessionTokenResponse.prototype, "postOauthLiveSessionToken200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostOauthLiveSessionTokenResponse.prototype, "statusCode", void 0);
    return PostOauthLiveSessionTokenResponse;
}(SpeakeasyBase));
export { PostOauthLiveSessionTokenResponse };
