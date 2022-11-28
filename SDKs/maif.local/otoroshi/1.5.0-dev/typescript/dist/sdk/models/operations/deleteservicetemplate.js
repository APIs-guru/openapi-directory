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
var DeleteServiceTemplatePathParams = /** @class */ (function (_super) {
    __extends(DeleteServiceTemplatePathParams, _super);
    function DeleteServiceTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" }),
        __metadata("design:type", String)
    ], DeleteServiceTemplatePathParams.prototype, "serviceId", void 0);
    return DeleteServiceTemplatePathParams;
}(SpeakeasyBase));
export { DeleteServiceTemplatePathParams };
var DeleteServiceTemplateSecurity = /** @class */ (function (_super) {
    __extends(DeleteServiceTemplateSecurity, _super);
    function DeleteServiceTemplateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeOtoroshiAuth)
    ], DeleteServiceTemplateSecurity.prototype, "otoroshiAuth", void 0);
    return DeleteServiceTemplateSecurity;
}(SpeakeasyBase));
export { DeleteServiceTemplateSecurity };
var DeleteServiceTemplateRequest = /** @class */ (function (_super) {
    __extends(DeleteServiceTemplateRequest, _super);
    function DeleteServiceTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteServiceTemplatePathParams)
    ], DeleteServiceTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteServiceTemplateSecurity)
    ], DeleteServiceTemplateRequest.prototype, "security", void 0);
    return DeleteServiceTemplateRequest;
}(SpeakeasyBase));
export { DeleteServiceTemplateRequest };
var DeleteServiceTemplateResponse = /** @class */ (function (_super) {
    __extends(DeleteServiceTemplateResponse, _super);
    function DeleteServiceTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteServiceTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Deleted)
    ], DeleteServiceTemplateResponse.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteServiceTemplateResponse.prototype, "statusCode", void 0);
    return DeleteServiceTemplateResponse;
}(SpeakeasyBase));
export { DeleteServiceTemplateResponse };
