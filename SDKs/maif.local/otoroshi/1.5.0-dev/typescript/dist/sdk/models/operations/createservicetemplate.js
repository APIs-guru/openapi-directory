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
var CreateServiceTemplatePathParams = /** @class */ (function (_super) {
    __extends(CreateServiceTemplatePathParams, _super);
    function CreateServiceTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" }),
        __metadata("design:type", String)
    ], CreateServiceTemplatePathParams.prototype, "serviceId", void 0);
    return CreateServiceTemplatePathParams;
}(SpeakeasyBase));
export { CreateServiceTemplatePathParams };
var CreateServiceTemplateSecurity = /** @class */ (function (_super) {
    __extends(CreateServiceTemplateSecurity, _super);
    function CreateServiceTemplateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeOtoroshiAuth)
    ], CreateServiceTemplateSecurity.prototype, "otoroshiAuth", void 0);
    return CreateServiceTemplateSecurity;
}(SpeakeasyBase));
export { CreateServiceTemplateSecurity };
var CreateServiceTemplateRequest = /** @class */ (function (_super) {
    __extends(CreateServiceTemplateRequest, _super);
    function CreateServiceTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateServiceTemplatePathParams)
    ], CreateServiceTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ErrorTemplate)
    ], CreateServiceTemplateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateServiceTemplateSecurity)
    ], CreateServiceTemplateRequest.prototype, "security", void 0);
    return CreateServiceTemplateRequest;
}(SpeakeasyBase));
export { CreateServiceTemplateRequest };
var CreateServiceTemplateResponse = /** @class */ (function (_super) {
    __extends(CreateServiceTemplateResponse, _super);
    function CreateServiceTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateServiceTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorTemplate)
    ], CreateServiceTemplateResponse.prototype, "errorTemplate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateServiceTemplateResponse.prototype, "statusCode", void 0);
    return CreateServiceTemplateResponse;
}(SpeakeasyBase));
export { CreateServiceTemplateResponse };
