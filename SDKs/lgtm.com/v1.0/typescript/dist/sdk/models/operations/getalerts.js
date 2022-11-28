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
var GetAlertsPathParams = /** @class */ (function (_super) {
    __extends(GetAlertsPathParams, _super);
    function GetAlertsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=analysis-id" }),
        __metadata("design:type", String)
    ], GetAlertsPathParams.prototype, "analysisId", void 0);
    return GetAlertsPathParams;
}(SpeakeasyBase));
export { GetAlertsPathParams };
var GetAlertsQueryParams = /** @class */ (function (_super) {
    __extends(GetAlertsQueryParams, _super);
    function GetAlertsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excluded-files" }),
        __metadata("design:type", Boolean)
    ], GetAlertsQueryParams.prototype, "excludedFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sarif-version" }),
        __metadata("design:type", String)
    ], GetAlertsQueryParams.prototype, "sarifVersion", void 0);
    return GetAlertsQueryParams;
}(SpeakeasyBase));
export { GetAlertsQueryParams };
var GetAlertsSecurity = /** @class */ (function (_super) {
    __extends(GetAlertsSecurity, _super);
    function GetAlertsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeAccessToken)
    ], GetAlertsSecurity.prototype, "accessToken", void 0);
    return GetAlertsSecurity;
}(SpeakeasyBase));
export { GetAlertsSecurity };
var GetAlertsRequest = /** @class */ (function (_super) {
    __extends(GetAlertsRequest, _super);
    function GetAlertsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAlertsPathParams)
    ], GetAlertsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAlertsQueryParams)
    ], GetAlertsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAlertsSecurity)
    ], GetAlertsRequest.prototype, "security", void 0);
    return GetAlertsRequest;
}(SpeakeasyBase));
export { GetAlertsRequest };
var GetAlertsResponse = /** @class */ (function (_super) {
    __extends(GetAlertsResponse, _super);
    function GetAlertsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAlertsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAlertsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetAlertsResponse.prototype, "getAlerts200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetAlertsResponse.prototype, "getAlerts200ApplicationSarifPlusJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAlertsResponse.prototype, "getAlerts200TextCsvString", void 0);
    return GetAlertsResponse;
}(SpeakeasyBase));
export { GetAlertsResponse };
