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
var RemoveLinodeIpPathParams = /** @class */ (function (_super) {
    __extends(RemoveLinodeIpPathParams, _super);
    function RemoveLinodeIpPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" }),
        __metadata("design:type", String)
    ], RemoveLinodeIpPathParams.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], RemoveLinodeIpPathParams.prototype, "linodeId", void 0);
    return RemoveLinodeIpPathParams;
}(SpeakeasyBase));
export { RemoveLinodeIpPathParams };
var RemoveLinodeIpSecurity = /** @class */ (function (_super) {
    __extends(RemoveLinodeIpSecurity, _super);
    function RemoveLinodeIpSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], RemoveLinodeIpSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], RemoveLinodeIpSecurity.prototype, "oauth", void 0);
    return RemoveLinodeIpSecurity;
}(SpeakeasyBase));
export { RemoveLinodeIpSecurity };
var RemoveLinodeIpDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveLinodeIpDefaultApplicationJson, _super);
    function RemoveLinodeIpDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], RemoveLinodeIpDefaultApplicationJson.prototype, "errors", void 0);
    return RemoveLinodeIpDefaultApplicationJson;
}(SpeakeasyBase));
export { RemoveLinodeIpDefaultApplicationJson };
var RemoveLinodeIpRequest = /** @class */ (function (_super) {
    __extends(RemoveLinodeIpRequest, _super);
    function RemoveLinodeIpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveLinodeIpPathParams)
    ], RemoveLinodeIpRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveLinodeIpSecurity)
    ], RemoveLinodeIpRequest.prototype, "security", void 0);
    return RemoveLinodeIpRequest;
}(SpeakeasyBase));
export { RemoveLinodeIpRequest };
var RemoveLinodeIpResponse = /** @class */ (function (_super) {
    __extends(RemoveLinodeIpResponse, _super);
    function RemoveLinodeIpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveLinodeIpResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveLinodeIpResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], RemoveLinodeIpResponse.prototype, "removeLinodeIp200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveLinodeIpDefaultApplicationJson)
    ], RemoveLinodeIpResponse.prototype, "removeLinodeIpDefaultApplicationJsonObject", void 0);
    return RemoveLinodeIpResponse;
}(SpeakeasyBase));
export { RemoveLinodeIpResponse };
