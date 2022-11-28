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
var UpdateKeyPathParams = /** @class */ (function (_super) {
    __extends(UpdateKeyPathParams, _super);
    function UpdateKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdateKeyPathParams.prototype, "id", void 0);
    return UpdateKeyPathParams;
}(SpeakeasyBase));
export { UpdateKeyPathParams };
var UpdateKeySecurity = /** @class */ (function (_super) {
    __extends(UpdateKeySecurity, _super);
    function UpdateKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=cookie" }),
        __metadata("design:type", shared.SchemeCookieSid)
    ], UpdateKeySecurity.prototype, "cookieSid", void 0);
    return UpdateKeySecurity;
}(SpeakeasyBase));
export { UpdateKeySecurity };
var UpdateKeyRequest = /** @class */ (function (_super) {
    __extends(UpdateKeyRequest, _super);
    function UpdateKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateKeyPathParams)
    ], UpdateKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.KeyInput)
    ], UpdateKeyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateKeySecurity)
    ], UpdateKeyRequest.prototype, "security", void 0);
    return UpdateKeyRequest;
}(SpeakeasyBase));
export { UpdateKeyRequest };
var UpdateKeyResponse = /** @class */ (function (_super) {
    __extends(UpdateKeyResponse, _super);
    function UpdateKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResponseDefaultResource)
    ], UpdateKeyResponse.prototype, "responseDefaultResource", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateKeyResponse.prototype, "statusCode", void 0);
    return UpdateKeyResponse;
}(SpeakeasyBase));
export { UpdateKeyResponse };
