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
import * as shared from "../shared";
var RevokeApiSecretPathParams = /** @class */ (function (_super) {
    __extends(RevokeApiSecretPathParams, _super);
    function RevokeApiSecretPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key" }),
        __metadata("design:type", String)
    ], RevokeApiSecretPathParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=secret_id" }),
        __metadata("design:type", String)
    ], RevokeApiSecretPathParams.prototype, "secretId", void 0);
    return RevokeApiSecretPathParams;
}(SpeakeasyBase));
export { RevokeApiSecretPathParams };
var RevokeApiSecretSecurity = /** @class */ (function (_super) {
    __extends(RevokeApiSecretSecurity, _super);
    function RevokeApiSecretSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], RevokeApiSecretSecurity.prototype, "basicAuth", void 0);
    return RevokeApiSecretSecurity;
}(SpeakeasyBase));
export { RevokeApiSecretSecurity };
var RevokeApiSecretRequest = /** @class */ (function (_super) {
    __extends(RevokeApiSecretRequest, _super);
    function RevokeApiSecretRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RevokeApiSecretPathParams)
    ], RevokeApiSecretRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RevokeApiSecretSecurity)
    ], RevokeApiSecretRequest.prototype, "security", void 0);
    return RevokeApiSecretRequest;
}(SpeakeasyBase));
export { RevokeApiSecretRequest };
var RevokeApiSecretResponse = /** @class */ (function (_super) {
    __extends(RevokeApiSecretResponse, _super);
    function RevokeApiSecretResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RevokeApiSecretResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RevokeApiSecretResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RevokeApiSecretResponse.prototype, "revokeApiSecret401ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RevokeApiSecretResponse.prototype, "revokeApiSecret403ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RevokeApiSecretResponse.prototype, "revokeApiSecret404ApplicationJsonOneOf", void 0);
    return RevokeApiSecretResponse;
}(SpeakeasyBase));
export { RevokeApiSecretResponse };
