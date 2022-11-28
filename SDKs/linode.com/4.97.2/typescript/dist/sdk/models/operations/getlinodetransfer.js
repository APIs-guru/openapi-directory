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
var GetLinodeTransferPathParams = /** @class */ (function (_super) {
    __extends(GetLinodeTransferPathParams, _super);
    function GetLinodeTransferPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], GetLinodeTransferPathParams.prototype, "linodeId", void 0);
    return GetLinodeTransferPathParams;
}(SpeakeasyBase));
export { GetLinodeTransferPathParams };
var GetLinodeTransferSecurity = /** @class */ (function (_super) {
    __extends(GetLinodeTransferSecurity, _super);
    function GetLinodeTransferSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetLinodeTransferSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetLinodeTransferSecurity.prototype, "oauth", void 0);
    return GetLinodeTransferSecurity;
}(SpeakeasyBase));
export { GetLinodeTransferSecurity };
var GetLinodeTransferDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetLinodeTransferDefaultApplicationJson, _super);
    function GetLinodeTransferDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetLinodeTransferDefaultApplicationJson.prototype, "errors", void 0);
    return GetLinodeTransferDefaultApplicationJson;
}(SpeakeasyBase));
export { GetLinodeTransferDefaultApplicationJson };
var GetLinodeTransferRequest = /** @class */ (function (_super) {
    __extends(GetLinodeTransferRequest, _super);
    function GetLinodeTransferRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeTransferPathParams)
    ], GetLinodeTransferRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeTransferSecurity)
    ], GetLinodeTransferRequest.prototype, "security", void 0);
    return GetLinodeTransferRequest;
}(SpeakeasyBase));
export { GetLinodeTransferRequest };
var GetLinodeTransferResponse = /** @class */ (function (_super) {
    __extends(GetLinodeTransferResponse, _super);
    function GetLinodeTransferResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLinodeTransferResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLinodeTransferResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetLinodeTransferResponse.prototype, "getLinodeTransfer200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeTransferDefaultApplicationJson)
    ], GetLinodeTransferResponse.prototype, "getLinodeTransferDefaultApplicationJsonObject", void 0);
    return GetLinodeTransferResponse;
}(SpeakeasyBase));
export { GetLinodeTransferResponse };
