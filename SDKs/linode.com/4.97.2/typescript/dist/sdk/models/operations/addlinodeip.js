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
var AddLinodeIpPathParams = /** @class */ (function (_super) {
    __extends(AddLinodeIpPathParams, _super);
    function AddLinodeIpPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], AddLinodeIpPathParams.prototype, "linodeId", void 0);
    return AddLinodeIpPathParams;
}(SpeakeasyBase));
export { AddLinodeIpPathParams };
var AddLinodeIpSecurity = /** @class */ (function (_super) {
    __extends(AddLinodeIpSecurity, _super);
    function AddLinodeIpSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], AddLinodeIpSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], AddLinodeIpSecurity.prototype, "oauth", void 0);
    return AddLinodeIpSecurity;
}(SpeakeasyBase));
export { AddLinodeIpSecurity };
var AddLinodeIpDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(AddLinodeIpDefaultApplicationJson, _super);
    function AddLinodeIpDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], AddLinodeIpDefaultApplicationJson.prototype, "errors", void 0);
    return AddLinodeIpDefaultApplicationJson;
}(SpeakeasyBase));
export { AddLinodeIpDefaultApplicationJson };
var AddLinodeIpRequest = /** @class */ (function (_super) {
    __extends(AddLinodeIpRequest, _super);
    function AddLinodeIpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddLinodeIpPathParams)
    ], AddLinodeIpRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], AddLinodeIpRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddLinodeIpSecurity)
    ], AddLinodeIpRequest.prototype, "security", void 0);
    return AddLinodeIpRequest;
}(SpeakeasyBase));
export { AddLinodeIpRequest };
var AddLinodeIpResponse = /** @class */ (function (_super) {
    __extends(AddLinodeIpResponse, _super);
    function AddLinodeIpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddLinodeIpResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.IpAddress)
    ], AddLinodeIpResponse.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddLinodeIpResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddLinodeIpDefaultApplicationJson)
    ], AddLinodeIpResponse.prototype, "addLinodeIpDefaultApplicationJsonObject", void 0);
    return AddLinodeIpResponse;
}(SpeakeasyBase));
export { AddLinodeIpResponse };
