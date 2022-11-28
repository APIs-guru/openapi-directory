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
var UpdateProductPathParams = /** @class */ (function (_super) {
    __extends(UpdateProductPathParams, _super);
    function UpdateProductPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productNumber" }),
        __metadata("design:type", String)
    ], UpdateProductPathParams.prototype, "productNumber", void 0);
    return UpdateProductPathParams;
}(SpeakeasyBase));
export { UpdateProductPathParams };
export var UpdateProductRequestBodyVatModeEnum;
(function (UpdateProductRequestBodyVatModeEnum) {
    UpdateProductRequestBodyVatModeEnum["Gross"] = "GROSS";
    UpdateProductRequestBodyVatModeEnum["Net"] = "NET";
})(UpdateProductRequestBodyVatModeEnum || (UpdateProductRequestBodyVatModeEnum = {}));
var UpdateProductRequestBody = /** @class */ (function (_super) {
    __extends(UpdateProductRequestBody, _super);
    function UpdateProductRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=active;" }),
        __metadata("design:type", Boolean)
    ], UpdateProductRequestBody.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=description;" }),
        __metadata("design:type", String)
    ], UpdateProductRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=licenseeAutoCreate;" }),
        __metadata("design:type", Boolean)
    ], UpdateProductRequestBody.prototype, "licenseeAutoCreate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=licensingInfo;" }),
        __metadata("design:type", String)
    ], UpdateProductRequestBody.prototype, "licensingInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=name;" }),
        __metadata("design:type", String)
    ], UpdateProductRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=number;" }),
        __metadata("design:type", String)
    ], UpdateProductRequestBody.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=vatMode;" }),
        __metadata("design:type", String)
    ], UpdateProductRequestBody.prototype, "vatMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=version;" }),
        __metadata("design:type", String)
    ], UpdateProductRequestBody.prototype, "version", void 0);
    return UpdateProductRequestBody;
}(SpeakeasyBase));
export { UpdateProductRequestBody };
var UpdateProductSecurity = /** @class */ (function (_super) {
    __extends(UpdateProductSecurity, _super);
    function UpdateProductSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], UpdateProductSecurity.prototype, "basicAuth", void 0);
    return UpdateProductSecurity;
}(SpeakeasyBase));
export { UpdateProductSecurity };
var UpdateProductRequest = /** @class */ (function (_super) {
    __extends(UpdateProductRequest, _super);
    function UpdateProductRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateProductPathParams)
    ], UpdateProductRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateProductRequestBody)
    ], UpdateProductRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateProductSecurity)
    ], UpdateProductRequest.prototype, "security", void 0);
    return UpdateProductRequest;
}(SpeakeasyBase));
export { UpdateProductRequest };
var UpdateProductResponse = /** @class */ (function (_super) {
    __extends(UpdateProductResponse, _super);
    function UpdateProductResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UpdateProductResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateProductResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateProductResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateProductResponse.prototype, "netlicensing", void 0);
    return UpdateProductResponse;
}(SpeakeasyBase));
export { UpdateProductResponse };
