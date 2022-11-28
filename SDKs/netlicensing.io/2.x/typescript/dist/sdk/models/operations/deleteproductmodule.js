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
var DeleteProductModulePathParams = /** @class */ (function (_super) {
    __extends(DeleteProductModulePathParams, _super);
    function DeleteProductModulePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productModuleNumber" }),
        __metadata("design:type", String)
    ], DeleteProductModulePathParams.prototype, "productModuleNumber", void 0);
    return DeleteProductModulePathParams;
}(SpeakeasyBase));
export { DeleteProductModulePathParams };
var DeleteProductModuleQueryParams = /** @class */ (function (_super) {
    __extends(DeleteProductModuleQueryParams, _super);
    function DeleteProductModuleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forceCascade" }),
        __metadata("design:type", Boolean)
    ], DeleteProductModuleQueryParams.prototype, "forceCascade", void 0);
    return DeleteProductModuleQueryParams;
}(SpeakeasyBase));
export { DeleteProductModuleQueryParams };
var DeleteProductModuleSecurity = /** @class */ (function (_super) {
    __extends(DeleteProductModuleSecurity, _super);
    function DeleteProductModuleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], DeleteProductModuleSecurity.prototype, "basicAuth", void 0);
    return DeleteProductModuleSecurity;
}(SpeakeasyBase));
export { DeleteProductModuleSecurity };
var DeleteProductModuleRequest = /** @class */ (function (_super) {
    __extends(DeleteProductModuleRequest, _super);
    function DeleteProductModuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProductModulePathParams)
    ], DeleteProductModuleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProductModuleQueryParams)
    ], DeleteProductModuleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProductModuleSecurity)
    ], DeleteProductModuleRequest.prototype, "security", void 0);
    return DeleteProductModuleRequest;
}(SpeakeasyBase));
export { DeleteProductModuleRequest };
var DeleteProductModuleResponse = /** @class */ (function (_super) {
    __extends(DeleteProductModuleResponse, _super);
    function DeleteProductModuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DeleteProductModuleResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteProductModuleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteProductModuleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteProductModuleResponse.prototype, "netlicensing", void 0);
    return DeleteProductModuleResponse;
}(SpeakeasyBase));
export { DeleteProductModuleResponse };
