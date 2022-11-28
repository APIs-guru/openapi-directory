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
var GetDiscountPathParams = /** @class */ (function (_super) {
    __extends(GetDiscountPathParams, _super);
    function GetDiscountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discountUuid" }),
        __metadata("design:type", String)
    ], GetDiscountPathParams.prototype, "discountUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" }),
        __metadata("design:type", String)
    ], GetDiscountPathParams.prototype, "organizationUuid", void 0);
    return GetDiscountPathParams;
}(SpeakeasyBase));
export { GetDiscountPathParams };
var GetDiscountHeaders = /** @class */ (function (_super) {
    __extends(GetDiscountHeaders, _super);
    function GetDiscountHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], GetDiscountHeaders.prototype, "ifNoneMatch", void 0);
    return GetDiscountHeaders;
}(SpeakeasyBase));
export { GetDiscountHeaders };
var GetDiscountSecurity = /** @class */ (function (_super) {
    __extends(GetDiscountSecurity, _super);
    function GetDiscountSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeZettleApiKey)
    ], GetDiscountSecurity.prototype, "zettleApiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeZettleOauth)
    ], GetDiscountSecurity.prototype, "zettleOauth", void 0);
    return GetDiscountSecurity;
}(SpeakeasyBase));
export { GetDiscountSecurity };
var GetDiscountRequest = /** @class */ (function (_super) {
    __extends(GetDiscountRequest, _super);
    function GetDiscountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDiscountPathParams)
    ], GetDiscountRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDiscountHeaders)
    ], GetDiscountRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDiscountSecurity)
    ], GetDiscountRequest.prototype, "security", void 0);
    return GetDiscountRequest;
}(SpeakeasyBase));
export { GetDiscountRequest };
var GetDiscountResponse = /** @class */ (function (_super) {
    __extends(GetDiscountResponse, _super);
    function GetDiscountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDiscountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DiscountResponse)
    ], GetDiscountResponse.prototype, "discountResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetDiscountResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDiscountResponse.prototype, "statusCode", void 0);
    return GetDiscountResponse;
}(SpeakeasyBase));
export { GetDiscountResponse };
