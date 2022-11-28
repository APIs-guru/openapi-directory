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
var UpdateDiscountPathParams = /** @class */ (function (_super) {
    __extends(UpdateDiscountPathParams, _super);
    function UpdateDiscountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discountUuid" }),
        __metadata("design:type", String)
    ], UpdateDiscountPathParams.prototype, "discountUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" }),
        __metadata("design:type", String)
    ], UpdateDiscountPathParams.prototype, "organizationUuid", void 0);
    return UpdateDiscountPathParams;
}(SpeakeasyBase));
export { UpdateDiscountPathParams };
var UpdateDiscountHeaders = /** @class */ (function (_super) {
    __extends(UpdateDiscountHeaders, _super);
    function UpdateDiscountHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], UpdateDiscountHeaders.prototype, "ifMatch", void 0);
    return UpdateDiscountHeaders;
}(SpeakeasyBase));
export { UpdateDiscountHeaders };
var UpdateDiscountSecurity = /** @class */ (function (_super) {
    __extends(UpdateDiscountSecurity, _super);
    function UpdateDiscountSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeZettleApiKey)
    ], UpdateDiscountSecurity.prototype, "zettleApiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeZettleOauth)
    ], UpdateDiscountSecurity.prototype, "zettleOauth", void 0);
    return UpdateDiscountSecurity;
}(SpeakeasyBase));
export { UpdateDiscountSecurity };
var UpdateDiscountRequest = /** @class */ (function (_super) {
    __extends(UpdateDiscountRequest, _super);
    function UpdateDiscountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDiscountPathParams)
    ], UpdateDiscountRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDiscountHeaders)
    ], UpdateDiscountRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DiscountRequest)
    ], UpdateDiscountRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDiscountSecurity)
    ], UpdateDiscountRequest.prototype, "security", void 0);
    return UpdateDiscountRequest;
}(SpeakeasyBase));
export { UpdateDiscountRequest };
var UpdateDiscountResponse = /** @class */ (function (_super) {
    __extends(UpdateDiscountResponse, _super);
    function UpdateDiscountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDiscountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], UpdateDiscountResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateDiscountResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDiscountResponse.prototype, "statusCode", void 0);
    return UpdateDiscountResponse;
}(SpeakeasyBase));
export { UpdateDiscountResponse };
