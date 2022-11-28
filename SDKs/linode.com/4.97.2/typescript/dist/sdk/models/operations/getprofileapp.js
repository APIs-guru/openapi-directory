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
var GetProfileAppPathParams = /** @class */ (function (_super) {
    __extends(GetProfileAppPathParams, _super);
    function GetProfileAppPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], GetProfileAppPathParams.prototype, "appId", void 0);
    return GetProfileAppPathParams;
}(SpeakeasyBase));
export { GetProfileAppPathParams };
var GetProfileAppSecurity = /** @class */ (function (_super) {
    __extends(GetProfileAppSecurity, _super);
    function GetProfileAppSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetProfileAppSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetProfileAppSecurity.prototype, "oauth", void 0);
    return GetProfileAppSecurity;
}(SpeakeasyBase));
export { GetProfileAppSecurity };
var GetProfileAppDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetProfileAppDefaultApplicationJson, _super);
    function GetProfileAppDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetProfileAppDefaultApplicationJson.prototype, "errors", void 0);
    return GetProfileAppDefaultApplicationJson;
}(SpeakeasyBase));
export { GetProfileAppDefaultApplicationJson };
var GetProfileAppRequest = /** @class */ (function (_super) {
    __extends(GetProfileAppRequest, _super);
    function GetProfileAppRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProfileAppPathParams)
    ], GetProfileAppRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProfileAppSecurity)
    ], GetProfileAppRequest.prototype, "security", void 0);
    return GetProfileAppRequest;
}(SpeakeasyBase));
export { GetProfileAppRequest };
var GetProfileAppResponse = /** @class */ (function (_super) {
    __extends(GetProfileAppResponse, _super);
    function GetProfileAppResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthorizedApp)
    ], GetProfileAppResponse.prototype, "authorizedApp", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProfileAppResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProfileAppResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProfileAppDefaultApplicationJson)
    ], GetProfileAppResponse.prototype, "getProfileAppDefaultApplicationJsonObject", void 0);
    return GetProfileAppResponse;
}(SpeakeasyBase));
export { GetProfileAppResponse };
