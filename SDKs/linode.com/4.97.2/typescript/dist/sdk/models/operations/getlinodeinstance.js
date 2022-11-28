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
var GetLinodeInstancePathParams = /** @class */ (function (_super) {
    __extends(GetLinodeInstancePathParams, _super);
    function GetLinodeInstancePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], GetLinodeInstancePathParams.prototype, "linodeId", void 0);
    return GetLinodeInstancePathParams;
}(SpeakeasyBase));
export { GetLinodeInstancePathParams };
var GetLinodeInstanceSecurity = /** @class */ (function (_super) {
    __extends(GetLinodeInstanceSecurity, _super);
    function GetLinodeInstanceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetLinodeInstanceSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetLinodeInstanceSecurity.prototype, "oauth", void 0);
    return GetLinodeInstanceSecurity;
}(SpeakeasyBase));
export { GetLinodeInstanceSecurity };
var GetLinodeInstanceDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetLinodeInstanceDefaultApplicationJson, _super);
    function GetLinodeInstanceDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetLinodeInstanceDefaultApplicationJson.prototype, "errors", void 0);
    return GetLinodeInstanceDefaultApplicationJson;
}(SpeakeasyBase));
export { GetLinodeInstanceDefaultApplicationJson };
var GetLinodeInstanceRequest = /** @class */ (function (_super) {
    __extends(GetLinodeInstanceRequest, _super);
    function GetLinodeInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeInstancePathParams)
    ], GetLinodeInstanceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeInstanceSecurity)
    ], GetLinodeInstanceRequest.prototype, "security", void 0);
    return GetLinodeInstanceRequest;
}(SpeakeasyBase));
export { GetLinodeInstanceRequest };
var GetLinodeInstanceResponse = /** @class */ (function (_super) {
    __extends(GetLinodeInstanceResponse, _super);
    function GetLinodeInstanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLinodeInstanceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Linode)
    ], GetLinodeInstanceResponse.prototype, "linode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLinodeInstanceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeInstanceDefaultApplicationJson)
    ], GetLinodeInstanceResponse.prototype, "getLinodeInstanceDefaultApplicationJsonObject", void 0);
    return GetLinodeInstanceResponse;
}(SpeakeasyBase));
export { GetLinodeInstanceResponse };
