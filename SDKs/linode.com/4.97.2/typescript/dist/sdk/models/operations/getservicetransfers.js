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
var GetServiceTransfersQueryParams = /** @class */ (function (_super) {
    __extends(GetServiceTransfersQueryParams, _super);
    function GetServiceTransfersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetServiceTransfersQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetServiceTransfersQueryParams.prototype, "pageSize", void 0);
    return GetServiceTransfersQueryParams;
}(SpeakeasyBase));
export { GetServiceTransfersQueryParams };
var GetServiceTransfersSecurity = /** @class */ (function (_super) {
    __extends(GetServiceTransfersSecurity, _super);
    function GetServiceTransfersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetServiceTransfersSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetServiceTransfersSecurity.prototype, "oauth", void 0);
    return GetServiceTransfersSecurity;
}(SpeakeasyBase));
export { GetServiceTransfersSecurity };
var GetServiceTransfers200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetServiceTransfers200ApplicationJson, _super);
    function GetServiceTransfers200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.ServiceTransfer }),
        __metadata("design:type", Array)
    ], GetServiceTransfers200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetServiceTransfers200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetServiceTransfers200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetServiceTransfers200ApplicationJson.prototype, "results", void 0);
    return GetServiceTransfers200ApplicationJson;
}(SpeakeasyBase));
export { GetServiceTransfers200ApplicationJson };
var GetServiceTransfersDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetServiceTransfersDefaultApplicationJson, _super);
    function GetServiceTransfersDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetServiceTransfersDefaultApplicationJson.prototype, "errors", void 0);
    return GetServiceTransfersDefaultApplicationJson;
}(SpeakeasyBase));
export { GetServiceTransfersDefaultApplicationJson };
var GetServiceTransfersRequest = /** @class */ (function (_super) {
    __extends(GetServiceTransfersRequest, _super);
    function GetServiceTransfersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetServiceTransfersQueryParams)
    ], GetServiceTransfersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetServiceTransfersSecurity)
    ], GetServiceTransfersRequest.prototype, "security", void 0);
    return GetServiceTransfersRequest;
}(SpeakeasyBase));
export { GetServiceTransfersRequest };
var GetServiceTransfersResponse = /** @class */ (function (_super) {
    __extends(GetServiceTransfersResponse, _super);
    function GetServiceTransfersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetServiceTransfersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetServiceTransfersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetServiceTransfers200ApplicationJson)
    ], GetServiceTransfersResponse.prototype, "getServiceTransfers200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetServiceTransfersDefaultApplicationJson)
    ], GetServiceTransfersResponse.prototype, "getServiceTransfersDefaultApplicationJsonObject", void 0);
    return GetServiceTransfersResponse;
}(SpeakeasyBase));
export { GetServiceTransfersResponse };
