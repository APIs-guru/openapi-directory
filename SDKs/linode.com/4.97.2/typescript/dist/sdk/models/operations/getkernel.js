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
var GetKernelPathParams = /** @class */ (function (_super) {
    __extends(GetKernelPathParams, _super);
    function GetKernelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=kernelId" }),
        __metadata("design:type", String)
    ], GetKernelPathParams.prototype, "kernelId", void 0);
    return GetKernelPathParams;
}(SpeakeasyBase));
export { GetKernelPathParams };
var GetKernelDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetKernelDefaultApplicationJson, _super);
    function GetKernelDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetKernelDefaultApplicationJson.prototype, "errors", void 0);
    return GetKernelDefaultApplicationJson;
}(SpeakeasyBase));
export { GetKernelDefaultApplicationJson };
var GetKernelRequest = /** @class */ (function (_super) {
    __extends(GetKernelRequest, _super);
    function GetKernelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetKernelPathParams)
    ], GetKernelRequest.prototype, "pathParams", void 0);
    return GetKernelRequest;
}(SpeakeasyBase));
export { GetKernelRequest };
var GetKernelResponse = /** @class */ (function (_super) {
    __extends(GetKernelResponse, _super);
    function GetKernelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetKernelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Kernel)
    ], GetKernelResponse.prototype, "kernel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetKernelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetKernelDefaultApplicationJson)
    ], GetKernelResponse.prototype, "getKernelDefaultApplicationJsonObject", void 0);
    return GetKernelResponse;
}(SpeakeasyBase));
export { GetKernelResponse };
