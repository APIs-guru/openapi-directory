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
var GetProjectConfigPathParams = /** @class */ (function (_super) {
    __extends(GetProjectConfigPathParams, _super);
    function GetProjectConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-id" }),
        __metadata("design:type", Number)
    ], GetProjectConfigPathParams.prototype, "projectId", void 0);
    return GetProjectConfigPathParams;
}(SpeakeasyBase));
export { GetProjectConfigPathParams };
export var GetProjectConfigSourceEnum;
(function (GetProjectConfigSourceEnum) {
    GetProjectConfigSourceEnum["Repository"] = "repository";
    GetProjectConfigSourceEnum["Administrator"] = "administrator";
})(GetProjectConfigSourceEnum || (GetProjectConfigSourceEnum = {}));
var GetProjectConfigQueryParams = /** @class */ (function (_super) {
    __extends(GetProjectConfigQueryParams, _super);
    function GetProjectConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], GetProjectConfigQueryParams.prototype, "source", void 0);
    return GetProjectConfigQueryParams;
}(SpeakeasyBase));
export { GetProjectConfigQueryParams };
var GetProjectConfigSecurity = /** @class */ (function (_super) {
    __extends(GetProjectConfigSecurity, _super);
    function GetProjectConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeAccessToken)
    ], GetProjectConfigSecurity.prototype, "accessToken", void 0);
    return GetProjectConfigSecurity;
}(SpeakeasyBase));
export { GetProjectConfigSecurity };
var GetProjectConfigRequest = /** @class */ (function (_super) {
    __extends(GetProjectConfigRequest, _super);
    function GetProjectConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProjectConfigPathParams)
    ], GetProjectConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProjectConfigQueryParams)
    ], GetProjectConfigRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProjectConfigSecurity)
    ], GetProjectConfigRequest.prototype, "security", void 0);
    return GetProjectConfigRequest;
}(SpeakeasyBase));
export { GetProjectConfigRequest };
var GetProjectConfigResponse = /** @class */ (function (_super) {
    __extends(GetProjectConfigResponse, _super);
    function GetProjectConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetProjectConfigResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProjectConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProjectConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetProjectConfigResponse.prototype, "getProjectConfig400ApplicationJsonObject", void 0);
    return GetProjectConfigResponse;
}(SpeakeasyBase));
export { GetProjectConfigResponse };
