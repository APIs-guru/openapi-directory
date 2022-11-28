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
var ApiKeysPathParams = /** @class */ (function (_super) {
    __extends(ApiKeysPathParams, _super);
    function ApiKeysPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" }),
        __metadata("design:type", String)
    ], ApiKeysPathParams.prototype, "serviceId", void 0);
    return ApiKeysPathParams;
}(SpeakeasyBase));
export { ApiKeysPathParams };
var ApiKeysSecurity = /** @class */ (function (_super) {
    __extends(ApiKeysSecurity, _super);
    function ApiKeysSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeOtoroshiAuth)
    ], ApiKeysSecurity.prototype, "otoroshiAuth", void 0);
    return ApiKeysSecurity;
}(SpeakeasyBase));
export { ApiKeysSecurity };
var ApiKeysRequest = /** @class */ (function (_super) {
    __extends(ApiKeysRequest, _super);
    function ApiKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApiKeysPathParams)
    ], ApiKeysRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApiKeysSecurity)
    ], ApiKeysRequest.prototype, "security", void 0);
    return ApiKeysRequest;
}(SpeakeasyBase));
export { ApiKeysRequest };
var ApiKeysResponse = /** @class */ (function (_super) {
    __extends(ApiKeysResponse, _super);
    function ApiKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ApiKey }),
        __metadata("design:type", Array)
    ], ApiKeysResponse.prototype, "apiKeys", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApiKeysResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApiKeysResponse.prototype, "statusCode", void 0);
    return ApiKeysResponse;
}(SpeakeasyBase));
export { ApiKeysResponse };
