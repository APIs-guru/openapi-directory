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
export var ConvertRequestBodyValidateEnum;
(function (ConvertRequestBodyValidateEnum) {
    ConvertRequestBodyValidateEnum["On"] = "on";
})(ConvertRequestBodyValidateEnum || (ConvertRequestBodyValidateEnum = {}));
var ConvertRequestBody = /** @class */ (function (_super) {
    __extends(ConvertRequestBody, _super);
    function ConvertRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, name=filename" }),
        __metadata("design:type", String)
    ], ConvertRequestBody.prototype, "filename", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=source" }),
        __metadata("design:type", String)
    ], ConvertRequestBody.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=validate" }),
        __metadata("design:type", String)
    ], ConvertRequestBody.prototype, "validate", void 0);
    return ConvertRequestBody;
}(SpeakeasyBase));
export { ConvertRequestBody };
var ConvertRequest = /** @class */ (function (_super) {
    __extends(ConvertRequest, _super);
    function ConvertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ConvertRequestBody)
    ], ConvertRequest.prototype, "request", void 0);
    return ConvertRequest;
}(SpeakeasyBase));
export { ConvertRequest };
var ConvertResponse = /** @class */ (function (_super) {
    __extends(ConvertResponse, _super);
    function ConvertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ConvertResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ConvertResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ConvertResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ConvertResponse.prototype, "convert200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ConvertResponse.prototype, "convert400ApplicationJsonAny", void 0);
    return ConvertResponse;
}(SpeakeasyBase));
export { ConvertResponse };
