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
var ValidateRequestBody = /** @class */ (function (_super) {
    __extends(ValidateRequestBody, _super);
    function ValidateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, name=filename" }),
        __metadata("design:type", String)
    ], ValidateRequestBody.prototype, "filename", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=source" }),
        __metadata("design:type", String)
    ], ValidateRequestBody.prototype, "source", void 0);
    return ValidateRequestBody;
}(SpeakeasyBase));
export { ValidateRequestBody };
var ValidateRequest = /** @class */ (function (_super) {
    __extends(ValidateRequest, _super);
    function ValidateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ValidateRequestBody)
    ], ValidateRequest.prototype, "request", void 0);
    return ValidateRequest;
}(SpeakeasyBase));
export { ValidateRequest };
var ValidateResponse = /** @class */ (function (_super) {
    __extends(ValidateResponse, _super);
    function ValidateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ValidateResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ValidateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ValidateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ValidateResponse.prototype, "validate400ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ValidationResult)
    ], ValidateResponse.prototype, "validationResult", void 0);
    return ValidateResponse;
}(SpeakeasyBase));
export { ValidateResponse };
