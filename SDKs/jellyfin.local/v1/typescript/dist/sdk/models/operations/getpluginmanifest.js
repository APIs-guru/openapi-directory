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
var GetPluginManifestPathParams = /** @class */ (function (_super) {
    __extends(GetPluginManifestPathParams, _super);
    function GetPluginManifestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pluginId" }),
        __metadata("design:type", String)
    ], GetPluginManifestPathParams.prototype, "pluginId", void 0);
    return GetPluginManifestPathParams;
}(SpeakeasyBase));
export { GetPluginManifestPathParams };
var GetPluginManifestSecurity = /** @class */ (function (_super) {
    __extends(GetPluginManifestSecurity, _super);
    function GetPluginManifestSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetPluginManifestSecurity.prototype, "customAuthentication", void 0);
    return GetPluginManifestSecurity;
}(SpeakeasyBase));
export { GetPluginManifestSecurity };
var GetPluginManifestRequest = /** @class */ (function (_super) {
    __extends(GetPluginManifestRequest, _super);
    function GetPluginManifestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPluginManifestPathParams)
    ], GetPluginManifestRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPluginManifestSecurity)
    ], GetPluginManifestRequest.prototype, "security", void 0);
    return GetPluginManifestRequest;
}(SpeakeasyBase));
export { GetPluginManifestRequest };
var GetPluginManifestResponse = /** @class */ (function (_super) {
    __extends(GetPluginManifestResponse, _super);
    function GetPluginManifestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPluginManifestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetPluginManifestResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPluginManifestResponse.prototype, "statusCode", void 0);
    return GetPluginManifestResponse;
}(SpeakeasyBase));
export { GetPluginManifestResponse };
