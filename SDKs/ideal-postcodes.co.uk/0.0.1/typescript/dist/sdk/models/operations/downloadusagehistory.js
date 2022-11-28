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
var DownloadUsageHistoryPathParams = /** @class */ (function (_super) {
    __extends(DownloadUsageHistoryPathParams, _super);
    function DownloadUsageHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" }),
        __metadata("design:type", String)
    ], DownloadUsageHistoryPathParams.prototype, "key", void 0);
    return DownloadUsageHistoryPathParams;
}(SpeakeasyBase));
export { DownloadUsageHistoryPathParams };
var DownloadUsageHistoryQueryParams = /** @class */ (function (_super) {
    __extends(DownloadUsageHistoryQueryParams, _super);
    function DownloadUsageHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", Number)
    ], DownloadUsageHistoryQueryParams.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=licensee" }),
        __metadata("design:type", String)
    ], DownloadUsageHistoryQueryParams.prototype, "licensee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], DownloadUsageHistoryQueryParams.prototype, "start", void 0);
    return DownloadUsageHistoryQueryParams;
}(SpeakeasyBase));
export { DownloadUsageHistoryQueryParams };
var DownloadUsageHistorySecurity = /** @class */ (function (_super) {
    __extends(DownloadUsageHistorySecurity, _super);
    function DownloadUsageHistorySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DownloadUsageHistorySecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeUserToken)
    ], DownloadUsageHistorySecurity.prototype, "userToken", void 0);
    return DownloadUsageHistorySecurity;
}(SpeakeasyBase));
export { DownloadUsageHistorySecurity };
var DownloadUsageHistoryRequest = /** @class */ (function (_super) {
    __extends(DownloadUsageHistoryRequest, _super);
    function DownloadUsageHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DownloadUsageHistoryPathParams)
    ], DownloadUsageHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DownloadUsageHistoryQueryParams)
    ], DownloadUsageHistoryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DownloadUsageHistorySecurity)
    ], DownloadUsageHistoryRequest.prototype, "security", void 0);
    return DownloadUsageHistoryRequest;
}(SpeakeasyBase));
export { DownloadUsageHistoryRequest };
var DownloadUsageHistoryResponse = /** @class */ (function (_super) {
    __extends(DownloadUsageHistoryResponse, _super);
    function DownloadUsageHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DownloadUsageHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DownloadUsageHistoryResponse.prototype, "downloadUsageHistory200TextCsvString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseSchema)
    ], DownloadUsageHistoryResponse.prototype, "errorResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DownloadUsageHistoryResponse.prototype, "statusCode", void 0);
    return DownloadUsageHistoryResponse;
}(SpeakeasyBase));
export { DownloadUsageHistoryResponse };
