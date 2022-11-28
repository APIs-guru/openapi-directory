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
var LandlordControllerGetSasReportPathParams = /** @class */ (function (_super) {
    __extends(LandlordControllerGetSasReportPathParams, _super);
    function LandlordControllerGetSasReportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" }),
        __metadata("design:type", String)
    ], LandlordControllerGetSasReportPathParams.prototype, "shortName", void 0);
    return LandlordControllerGetSasReportPathParams;
}(SpeakeasyBase));
export { LandlordControllerGetSasReportPathParams };
var LandlordControllerGetSasReportQueryParams = /** @class */ (function (_super) {
    __extends(LandlordControllerGetSasReportQueryParams, _super);
    function LandlordControllerGetSasReportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], LandlordControllerGetSasReportQueryParams.prototype, "token", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=yearEnd" }),
        __metadata("design:type", Number)
    ], LandlordControllerGetSasReportQueryParams.prototype, "yearEnd", void 0);
    return LandlordControllerGetSasReportQueryParams;
}(SpeakeasyBase));
export { LandlordControllerGetSasReportQueryParams };
var LandlordControllerGetSasReportRequest = /** @class */ (function (_super) {
    __extends(LandlordControllerGetSasReportRequest, _super);
    function LandlordControllerGetSasReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LandlordControllerGetSasReportPathParams)
    ], LandlordControllerGetSasReportRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LandlordControllerGetSasReportQueryParams)
    ], LandlordControllerGetSasReportRequest.prototype, "queryParams", void 0);
    return LandlordControllerGetSasReportRequest;
}(SpeakeasyBase));
export { LandlordControllerGetSasReportRequest };
var LandlordControllerGetSasReportResponse = /** @class */ (function (_super) {
    __extends(LandlordControllerGetSasReportResponse, _super);
    function LandlordControllerGetSasReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], LandlordControllerGetSasReportResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LandlordControllerGetSasReportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], LandlordControllerGetSasReportResponse.prototype, "object", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LandlordControllerGetSasReportResponse.prototype, "statusCode", void 0);
    return LandlordControllerGetSasReportResponse;
}(SpeakeasyBase));
export { LandlordControllerGetSasReportResponse };
