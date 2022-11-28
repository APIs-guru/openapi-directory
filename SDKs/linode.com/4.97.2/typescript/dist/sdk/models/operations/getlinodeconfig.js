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
var GetLinodeConfigPathParams = /** @class */ (function (_super) {
    __extends(GetLinodeConfigPathParams, _super);
    function GetLinodeConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" }),
        __metadata("design:type", Number)
    ], GetLinodeConfigPathParams.prototype, "configId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], GetLinodeConfigPathParams.prototype, "linodeId", void 0);
    return GetLinodeConfigPathParams;
}(SpeakeasyBase));
export { GetLinodeConfigPathParams };
var GetLinodeConfigSecurity = /** @class */ (function (_super) {
    __extends(GetLinodeConfigSecurity, _super);
    function GetLinodeConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetLinodeConfigSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetLinodeConfigSecurity.prototype, "oauth", void 0);
    return GetLinodeConfigSecurity;
}(SpeakeasyBase));
export { GetLinodeConfigSecurity };
var GetLinodeConfigDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetLinodeConfigDefaultApplicationJson, _super);
    function GetLinodeConfigDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetLinodeConfigDefaultApplicationJson.prototype, "errors", void 0);
    return GetLinodeConfigDefaultApplicationJson;
}(SpeakeasyBase));
export { GetLinodeConfigDefaultApplicationJson };
var GetLinodeConfigRequest = /** @class */ (function (_super) {
    __extends(GetLinodeConfigRequest, _super);
    function GetLinodeConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeConfigPathParams)
    ], GetLinodeConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeConfigSecurity)
    ], GetLinodeConfigRequest.prototype, "security", void 0);
    return GetLinodeConfigRequest;
}(SpeakeasyBase));
export { GetLinodeConfigRequest };
var GetLinodeConfigResponse = /** @class */ (function (_super) {
    __extends(GetLinodeConfigResponse, _super);
    function GetLinodeConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLinodeConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LinodeConfig)
    ], GetLinodeConfigResponse.prototype, "linodeConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLinodeConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeConfigDefaultApplicationJson)
    ], GetLinodeConfigResponse.prototype, "getLinodeConfigDefaultApplicationJsonObject", void 0);
    return GetLinodeConfigResponse;
}(SpeakeasyBase));
export { GetLinodeConfigResponse };
