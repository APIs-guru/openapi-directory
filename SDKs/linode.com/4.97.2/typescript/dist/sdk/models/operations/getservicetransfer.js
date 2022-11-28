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
var GetServiceTransferPathParams = /** @class */ (function (_super) {
    __extends(GetServiceTransferPathParams, _super);
    function GetServiceTransferPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" }),
        __metadata("design:type", String)
    ], GetServiceTransferPathParams.prototype, "token", void 0);
    return GetServiceTransferPathParams;
}(SpeakeasyBase));
export { GetServiceTransferPathParams };
var GetServiceTransferSecurity = /** @class */ (function (_super) {
    __extends(GetServiceTransferSecurity, _super);
    function GetServiceTransferSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetServiceTransferSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetServiceTransferSecurity.prototype, "oauth", void 0);
    return GetServiceTransferSecurity;
}(SpeakeasyBase));
export { GetServiceTransferSecurity };
var GetServiceTransferDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetServiceTransferDefaultApplicationJson, _super);
    function GetServiceTransferDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetServiceTransferDefaultApplicationJson.prototype, "errors", void 0);
    return GetServiceTransferDefaultApplicationJson;
}(SpeakeasyBase));
export { GetServiceTransferDefaultApplicationJson };
var GetServiceTransferRequest = /** @class */ (function (_super) {
    __extends(GetServiceTransferRequest, _super);
    function GetServiceTransferRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetServiceTransferPathParams)
    ], GetServiceTransferRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetServiceTransferSecurity)
    ], GetServiceTransferRequest.prototype, "security", void 0);
    return GetServiceTransferRequest;
}(SpeakeasyBase));
export { GetServiceTransferRequest };
var GetServiceTransferResponse = /** @class */ (function (_super) {
    __extends(GetServiceTransferResponse, _super);
    function GetServiceTransferResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetServiceTransferResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceTransfer)
    ], GetServiceTransferResponse.prototype, "serviceTransfer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetServiceTransferResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetServiceTransferDefaultApplicationJson)
    ], GetServiceTransferResponse.prototype, "getServiceTransferDefaultApplicationJsonObject", void 0);
    return GetServiceTransferResponse;
}(SpeakeasyBase));
export { GetServiceTransferResponse };
