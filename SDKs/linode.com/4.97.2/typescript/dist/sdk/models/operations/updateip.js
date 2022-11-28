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
var UpdateIpPathParams = /** @class */ (function (_super) {
    __extends(UpdateIpPathParams, _super);
    function UpdateIpPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" }),
        __metadata("design:type", String)
    ], UpdateIpPathParams.prototype, "address", void 0);
    return UpdateIpPathParams;
}(SpeakeasyBase));
export { UpdateIpPathParams };
var UpdateIpSecurity = /** @class */ (function (_super) {
    __extends(UpdateIpSecurity, _super);
    function UpdateIpSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], UpdateIpSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateIpSecurity.prototype, "oauth", void 0);
    return UpdateIpSecurity;
}(SpeakeasyBase));
export { UpdateIpSecurity };
var UpdateIpDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateIpDefaultApplicationJson, _super);
    function UpdateIpDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], UpdateIpDefaultApplicationJson.prototype, "errors", void 0);
    return UpdateIpDefaultApplicationJson;
}(SpeakeasyBase));
export { UpdateIpDefaultApplicationJson };
var UpdateIpRequest = /** @class */ (function (_super) {
    __extends(UpdateIpRequest, _super);
    function UpdateIpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateIpPathParams)
    ], UpdateIpRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.IpAddressInput)
    ], UpdateIpRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateIpSecurity)
    ], UpdateIpRequest.prototype, "security", void 0);
    return UpdateIpRequest;
}(SpeakeasyBase));
export { UpdateIpRequest };
var UpdateIpResponse = /** @class */ (function (_super) {
    __extends(UpdateIpResponse, _super);
    function UpdateIpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateIpResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.IpAddress)
    ], UpdateIpResponse.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateIpResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateIpDefaultApplicationJson)
    ], UpdateIpResponse.prototype, "updateIpDefaultApplicationJsonObject", void 0);
    return UpdateIpResponse;
}(SpeakeasyBase));
export { UpdateIpResponse };
