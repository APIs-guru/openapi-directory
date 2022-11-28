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
var CreateApiSecretPathParams = /** @class */ (function (_super) {
    __extends(CreateApiSecretPathParams, _super);
    function CreateApiSecretPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key" }),
        __metadata("design:type", String)
    ], CreateApiSecretPathParams.prototype, "apiKey", void 0);
    return CreateApiSecretPathParams;
}(SpeakeasyBase));
export { CreateApiSecretPathParams };
var CreateApiSecretSecurity = /** @class */ (function (_super) {
    __extends(CreateApiSecretSecurity, _super);
    function CreateApiSecretSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], CreateApiSecretSecurity.prototype, "basicAuth", void 0);
    return CreateApiSecretSecurity;
}(SpeakeasyBase));
export { CreateApiSecretSecurity };
var CreateApiSecretRequest = /** @class */ (function (_super) {
    __extends(CreateApiSecretRequest, _super);
    function CreateApiSecretRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateApiSecretPathParams)
    ], CreateApiSecretRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateSecretRequest)
    ], CreateApiSecretRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateApiSecretSecurity)
    ], CreateApiSecretRequest.prototype, "security", void 0);
    return CreateApiSecretRequest;
}(SpeakeasyBase));
export { CreateApiSecretRequest };
var CreateApiSecretResponse = /** @class */ (function (_super) {
    __extends(CreateApiSecretResponse, _super);
    function CreateApiSecretResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateApiSecretResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorApiKeyNotFound)
    ], CreateApiSecretResponse.prototype, "errorApiKeyNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateApiSecretResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateApiSecretResponse.prototype, "createApiSecret400ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateApiSecretResponse.prototype, "createApiSecret401ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SecretInfo)
    ], CreateApiSecretResponse.prototype, "secretInfo", void 0);
    return CreateApiSecretResponse;
}(SpeakeasyBase));
export { CreateApiSecretResponse };
