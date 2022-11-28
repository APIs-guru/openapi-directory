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
var GetEntityTransfersQueryParams = /** @class */ (function (_super) {
    __extends(GetEntityTransfersQueryParams, _super);
    function GetEntityTransfersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetEntityTransfersQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetEntityTransfersQueryParams.prototype, "pageSize", void 0);
    return GetEntityTransfersQueryParams;
}(SpeakeasyBase));
export { GetEntityTransfersQueryParams };
var GetEntityTransfersSecurity = /** @class */ (function (_super) {
    __extends(GetEntityTransfersSecurity, _super);
    function GetEntityTransfersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetEntityTransfersSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetEntityTransfersSecurity.prototype, "oauth", void 0);
    return GetEntityTransfersSecurity;
}(SpeakeasyBase));
export { GetEntityTransfersSecurity };
var GetEntityTransfers200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetEntityTransfers200ApplicationJson, _super);
    function GetEntityTransfers200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.EntityTransfer }),
        __metadata("design:type", Array)
    ], GetEntityTransfers200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetEntityTransfers200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetEntityTransfers200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetEntityTransfers200ApplicationJson.prototype, "results", void 0);
    return GetEntityTransfers200ApplicationJson;
}(SpeakeasyBase));
export { GetEntityTransfers200ApplicationJson };
var GetEntityTransfersDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetEntityTransfersDefaultApplicationJson, _super);
    function GetEntityTransfersDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetEntityTransfersDefaultApplicationJson.prototype, "errors", void 0);
    return GetEntityTransfersDefaultApplicationJson;
}(SpeakeasyBase));
export { GetEntityTransfersDefaultApplicationJson };
var GetEntityTransfersRequest = /** @class */ (function (_super) {
    __extends(GetEntityTransfersRequest, _super);
    function GetEntityTransfersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEntityTransfersQueryParams)
    ], GetEntityTransfersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEntityTransfersSecurity)
    ], GetEntityTransfersRequest.prototype, "security", void 0);
    return GetEntityTransfersRequest;
}(SpeakeasyBase));
export { GetEntityTransfersRequest };
var GetEntityTransfersResponse = /** @class */ (function (_super) {
    __extends(GetEntityTransfersResponse, _super);
    function GetEntityTransfersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEntityTransfersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEntityTransfersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEntityTransfers200ApplicationJson)
    ], GetEntityTransfersResponse.prototype, "getEntityTransfers200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEntityTransfersDefaultApplicationJson)
    ], GetEntityTransfersResponse.prototype, "getEntityTransfersDefaultApplicationJsonObject", void 0);
    return GetEntityTransfersResponse;
}(SpeakeasyBase));
export { GetEntityTransfersResponse };
