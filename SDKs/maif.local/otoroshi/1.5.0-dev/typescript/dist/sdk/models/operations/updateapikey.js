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
var UpdateApiKeyPathParams = /** @class */ (function (_super) {
    __extends(UpdateApiKeyPathParams, _super);
    function UpdateApiKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" }),
        __metadata("design:type", String)
    ], UpdateApiKeyPathParams.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" }),
        __metadata("design:type", String)
    ], UpdateApiKeyPathParams.prototype, "serviceId", void 0);
    return UpdateApiKeyPathParams;
}(SpeakeasyBase));
export { UpdateApiKeyPathParams };
var UpdateApiKeySecurity = /** @class */ (function (_super) {
    __extends(UpdateApiKeySecurity, _super);
    function UpdateApiKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeOtoroshiAuth)
    ], UpdateApiKeySecurity.prototype, "otoroshiAuth", void 0);
    return UpdateApiKeySecurity;
}(SpeakeasyBase));
export { UpdateApiKeySecurity };
var UpdateApiKeyRequest = /** @class */ (function (_super) {
    __extends(UpdateApiKeyRequest, _super);
    function UpdateApiKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateApiKeyPathParams)
    ], UpdateApiKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApiKey)
    ], UpdateApiKeyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateApiKeySecurity)
    ], UpdateApiKeyRequest.prototype, "security", void 0);
    return UpdateApiKeyRequest;
}(SpeakeasyBase));
export { UpdateApiKeyRequest };
var UpdateApiKeyResponse = /** @class */ (function (_super) {
    __extends(UpdateApiKeyResponse, _super);
    function UpdateApiKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiKey)
    ], UpdateApiKeyResponse.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateApiKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateApiKeyResponse.prototype, "statusCode", void 0);
    return UpdateApiKeyResponse;
}(SpeakeasyBase));
export { UpdateApiKeyResponse };
