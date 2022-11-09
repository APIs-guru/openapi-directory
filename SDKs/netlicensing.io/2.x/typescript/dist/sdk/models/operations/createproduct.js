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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var CreateProductRequestBodyVatModeEnum;
(function (CreateProductRequestBodyVatModeEnum) {
    CreateProductRequestBodyVatModeEnum["Gross"] = "GROSS";
    CreateProductRequestBodyVatModeEnum["Net"] = "NET";
})(CreateProductRequestBodyVatModeEnum || (CreateProductRequestBodyVatModeEnum = {}));
var CreateProductRequestBody = /** @class */ (function (_super) {
    __extends(CreateProductRequestBody, _super);
    function CreateProductRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=active;" }),
        __metadata("design:type", Boolean)
    ], CreateProductRequestBody.prototype, "active", void 0);
    __decorate([
        Metadata({ data: "form, name=description;" }),
        __metadata("design:type", String)
    ], CreateProductRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "form, name=licenseeAutoCreate;" }),
        __metadata("design:type", Boolean)
    ], CreateProductRequestBody.prototype, "licenseeAutoCreate", void 0);
    __decorate([
        Metadata({ data: "form, name=licensingInfo;" }),
        __metadata("design:type", String)
    ], CreateProductRequestBody.prototype, "licensingInfo", void 0);
    __decorate([
        Metadata({ data: "form, name=name;" }),
        __metadata("design:type", String)
    ], CreateProductRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "form, name=number;" }),
        __metadata("design:type", String)
    ], CreateProductRequestBody.prototype, "number", void 0);
    __decorate([
        Metadata({ data: "form, name=vatMode;" }),
        __metadata("design:type", String)
    ], CreateProductRequestBody.prototype, "vatMode", void 0);
    __decorate([
        Metadata({ data: "form, name=version;" }),
        __metadata("design:type", String)
    ], CreateProductRequestBody.prototype, "version", void 0);
    return CreateProductRequestBody;
}(SpeakeasyBase));
export { CreateProductRequestBody };
var CreateProductSecurity = /** @class */ (function (_super) {
    __extends(CreateProductSecurity, _super);
    function CreateProductSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], CreateProductSecurity.prototype, "basicAuth", void 0);
    return CreateProductSecurity;
}(SpeakeasyBase));
export { CreateProductSecurity };
var CreateProductRequest = /** @class */ (function (_super) {
    __extends(CreateProductRequest, _super);
    function CreateProductRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateProductRequestBody)
    ], CreateProductRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateProductSecurity)
    ], CreateProductRequest.prototype, "security", void 0);
    return CreateProductRequest;
}(SpeakeasyBase));
export { CreateProductRequest };
var CreateProductResponse = /** @class */ (function (_super) {
    __extends(CreateProductResponse, _super);
    function CreateProductResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], CreateProductResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateProductResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateProductResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateProductResponse.prototype, "netlicensing", void 0);
    return CreateProductResponse;
}(SpeakeasyBase));
export { CreateProductResponse };
