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
var PostOauthAccessTokenRequestBody = /** @class */ (function (_super) {
    __extends(PostOauthAccessTokenRequestBody, _super);
    function PostOauthAccessTokenRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth_consumer_key" }),
        __metadata("design:type", String)
    ], PostOauthAccessTokenRequestBody.prototype, "oauthConsumerKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth_nonce" }),
        __metadata("design:type", String)
    ], PostOauthAccessTokenRequestBody.prototype, "oauthNonce", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth_signature" }),
        __metadata("design:type", String)
    ], PostOauthAccessTokenRequestBody.prototype, "oauthSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth_signature_method" }),
        __metadata("design:type", String)
    ], PostOauthAccessTokenRequestBody.prototype, "oauthSignatureMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth_timestamp" }),
        __metadata("design:type", String)
    ], PostOauthAccessTokenRequestBody.prototype, "oauthTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth_token" }),
        __metadata("design:type", String)
    ], PostOauthAccessTokenRequestBody.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth_verifier" }),
        __metadata("design:type", String)
    ], PostOauthAccessTokenRequestBody.prototype, "oauthVerifier", void 0);
    return PostOauthAccessTokenRequestBody;
}(SpeakeasyBase));
export { PostOauthAccessTokenRequestBody };
var PostOauthAccessToken200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostOauthAccessToken200ApplicationJson, _super);
    function PostOauthAccessToken200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth_token" }),
        __metadata("design:type", String)
    ], PostOauthAccessToken200ApplicationJson.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth_token_secret" }),
        __metadata("design:type", String)
    ], PostOauthAccessToken200ApplicationJson.prototype, "oauthTokenSecret", void 0);
    return PostOauthAccessToken200ApplicationJson;
}(SpeakeasyBase));
export { PostOauthAccessToken200ApplicationJson };
var PostOauthAccessTokenRequest = /** @class */ (function (_super) {
    __extends(PostOauthAccessTokenRequest, _super);
    function PostOauthAccessTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostOauthAccessTokenRequestBody)
    ], PostOauthAccessTokenRequest.prototype, "request", void 0);
    return PostOauthAccessTokenRequest;
}(SpeakeasyBase));
export { PostOauthAccessTokenRequest };
var PostOauthAccessTokenResponse = /** @class */ (function (_super) {
    __extends(PostOauthAccessTokenResponse, _super);
    function PostOauthAccessTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostOauthAccessTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostOauthAccessToken200ApplicationJson)
    ], PostOauthAccessTokenResponse.prototype, "postOauthAccessToken200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostOauthAccessTokenResponse.prototype, "statusCode", void 0);
    return PostOauthAccessTokenResponse;
}(SpeakeasyBase));
export { PostOauthAccessTokenResponse };
