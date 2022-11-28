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
var GetLinodeIpPathParams = /** @class */ (function (_super) {
    __extends(GetLinodeIpPathParams, _super);
    function GetLinodeIpPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" }),
        __metadata("design:type", String)
    ], GetLinodeIpPathParams.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], GetLinodeIpPathParams.prototype, "linodeId", void 0);
    return GetLinodeIpPathParams;
}(SpeakeasyBase));
export { GetLinodeIpPathParams };
var GetLinodeIpSecurity = /** @class */ (function (_super) {
    __extends(GetLinodeIpSecurity, _super);
    function GetLinodeIpSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetLinodeIpSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetLinodeIpSecurity.prototype, "oauth", void 0);
    return GetLinodeIpSecurity;
}(SpeakeasyBase));
export { GetLinodeIpSecurity };
var GetLinodeIpDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetLinodeIpDefaultApplicationJson, _super);
    function GetLinodeIpDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetLinodeIpDefaultApplicationJson.prototype, "errors", void 0);
    return GetLinodeIpDefaultApplicationJson;
}(SpeakeasyBase));
export { GetLinodeIpDefaultApplicationJson };
var GetLinodeIpRequest = /** @class */ (function (_super) {
    __extends(GetLinodeIpRequest, _super);
    function GetLinodeIpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeIpPathParams)
    ], GetLinodeIpRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeIpSecurity)
    ], GetLinodeIpRequest.prototype, "security", void 0);
    return GetLinodeIpRequest;
}(SpeakeasyBase));
export { GetLinodeIpRequest };
var GetLinodeIpResponse = /** @class */ (function (_super) {
    __extends(GetLinodeIpResponse, _super);
    function GetLinodeIpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLinodeIpResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.IpAddress)
    ], GetLinodeIpResponse.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLinodeIpResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeIpDefaultApplicationJson)
    ], GetLinodeIpResponse.prototype, "getLinodeIpDefaultApplicationJsonObject", void 0);
    return GetLinodeIpResponse;
}(SpeakeasyBase));
export { GetLinodeIpResponse };
