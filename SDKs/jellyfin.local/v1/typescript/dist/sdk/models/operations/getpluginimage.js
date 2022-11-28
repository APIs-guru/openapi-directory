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
var GetPluginImagePathParamsInput = /** @class */ (function (_super) {
    __extends(GetPluginImagePathParamsInput, _super);
    function GetPluginImagePathParamsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pluginId" }),
        __metadata("design:type", String)
    ], GetPluginImagePathParamsInput.prototype, "pluginId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", shared.Version)
    ], GetPluginImagePathParamsInput.prototype, "version", void 0);
    return GetPluginImagePathParamsInput;
}(SpeakeasyBase));
export { GetPluginImagePathParamsInput };
var GetPluginImageSecurity = /** @class */ (function (_super) {
    __extends(GetPluginImageSecurity, _super);
    function GetPluginImageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetPluginImageSecurity.prototype, "customAuthentication", void 0);
    return GetPluginImageSecurity;
}(SpeakeasyBase));
export { GetPluginImageSecurity };
var GetPluginImageRequest = /** @class */ (function (_super) {
    __extends(GetPluginImageRequest, _super);
    function GetPluginImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPluginImagePathParamsInput)
    ], GetPluginImageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPluginImageSecurity)
    ], GetPluginImageRequest.prototype, "security", void 0);
    return GetPluginImageRequest;
}(SpeakeasyBase));
export { GetPluginImageRequest };
var GetPluginImageResponse = /** @class */ (function (_super) {
    __extends(GetPluginImageResponse, _super);
    function GetPluginImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPluginImageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetPluginImageResponse.prototype, "getPluginImage200ImageWildcardBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetPluginImageResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPluginImageResponse.prototype, "statusCode", void 0);
    return GetPluginImageResponse;
}(SpeakeasyBase));
export { GetPluginImageResponse };
