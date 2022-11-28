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
var DeleteApiKeyPathParams = /** @class */ (function (_super) {
    __extends(DeleteApiKeyPathParams, _super);
    function DeleteApiKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" }),
        __metadata("design:type", String)
    ], DeleteApiKeyPathParams.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" }),
        __metadata("design:type", String)
    ], DeleteApiKeyPathParams.prototype, "serviceId", void 0);
    return DeleteApiKeyPathParams;
}(SpeakeasyBase));
export { DeleteApiKeyPathParams };
var DeleteApiKeySecurity = /** @class */ (function (_super) {
    __extends(DeleteApiKeySecurity, _super);
    function DeleteApiKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeOtoroshiAuth)
    ], DeleteApiKeySecurity.prototype, "otoroshiAuth", void 0);
    return DeleteApiKeySecurity;
}(SpeakeasyBase));
export { DeleteApiKeySecurity };
var DeleteApiKeyRequest = /** @class */ (function (_super) {
    __extends(DeleteApiKeyRequest, _super);
    function DeleteApiKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteApiKeyPathParams)
    ], DeleteApiKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteApiKeySecurity)
    ], DeleteApiKeyRequest.prototype, "security", void 0);
    return DeleteApiKeyRequest;
}(SpeakeasyBase));
export { DeleteApiKeyRequest };
var DeleteApiKeyResponse = /** @class */ (function (_super) {
    __extends(DeleteApiKeyResponse, _super);
    function DeleteApiKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteApiKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Deleted)
    ], DeleteApiKeyResponse.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteApiKeyResponse.prototype, "statusCode", void 0);
    return DeleteApiKeyResponse;
}(SpeakeasyBase));
export { DeleteApiKeyResponse };
