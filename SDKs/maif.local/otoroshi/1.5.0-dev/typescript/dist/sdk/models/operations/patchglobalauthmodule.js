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
var PatchGlobalAuthModulePathParams = /** @class */ (function (_super) {
    __extends(PatchGlobalAuthModulePathParams, _super);
    function PatchGlobalAuthModulePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PatchGlobalAuthModulePathParams.prototype, "id", void 0);
    return PatchGlobalAuthModulePathParams;
}(SpeakeasyBase));
export { PatchGlobalAuthModulePathParams };
var PatchGlobalAuthModuleSecurity = /** @class */ (function (_super) {
    __extends(PatchGlobalAuthModuleSecurity, _super);
    function PatchGlobalAuthModuleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeOtoroshiAuth)
    ], PatchGlobalAuthModuleSecurity.prototype, "otoroshiAuth", void 0);
    return PatchGlobalAuthModuleSecurity;
}(SpeakeasyBase));
export { PatchGlobalAuthModuleSecurity };
var PatchGlobalAuthModuleRequest = /** @class */ (function (_super) {
    __extends(PatchGlobalAuthModuleRequest, _super);
    function PatchGlobalAuthModuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchGlobalAuthModulePathParams)
    ], PatchGlobalAuthModuleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.Patch }),
        __metadata("design:type", Array)
    ], PatchGlobalAuthModuleRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchGlobalAuthModuleSecurity)
    ], PatchGlobalAuthModuleRequest.prototype, "security", void 0);
    return PatchGlobalAuthModuleRequest;
}(SpeakeasyBase));
export { PatchGlobalAuthModuleRequest };
var PatchGlobalAuthModuleResponse = /** @class */ (function (_super) {
    __extends(PatchGlobalAuthModuleResponse, _super);
    function PatchGlobalAuthModuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchGlobalAuthModuleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchGlobalAuthModuleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PatchGlobalAuthModuleResponse.prototype, "patchGlobalAuthModule200ApplicationJsonOneOf", void 0);
    return PatchGlobalAuthModuleResponse;
}(SpeakeasyBase));
export { PatchGlobalAuthModuleResponse };
