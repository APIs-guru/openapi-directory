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
var LandlordControllerGetInvetoryReportPathParams = /** @class */ (function (_super) {
    __extends(LandlordControllerGetInvetoryReportPathParams, _super);
    function LandlordControllerGetInvetoryReportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" }),
        __metadata("design:type", String)
    ], LandlordControllerGetInvetoryReportPathParams.prototype, "shortName", void 0);
    return LandlordControllerGetInvetoryReportPathParams;
}(SpeakeasyBase));
export { LandlordControllerGetInvetoryReportPathParams };
var LandlordControllerGetInvetoryReportQueryParams = /** @class */ (function (_super) {
    __extends(LandlordControllerGetInvetoryReportQueryParams, _super);
    function LandlordControllerGetInvetoryReportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenancyID" }),
        __metadata("design:type", String)
    ], LandlordControllerGetInvetoryReportQueryParams.prototype, "tenancyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], LandlordControllerGetInvetoryReportQueryParams.prototype, "token", void 0);
    return LandlordControllerGetInvetoryReportQueryParams;
}(SpeakeasyBase));
export { LandlordControllerGetInvetoryReportQueryParams };
var LandlordControllerGetInvetoryReportRequest = /** @class */ (function (_super) {
    __extends(LandlordControllerGetInvetoryReportRequest, _super);
    function LandlordControllerGetInvetoryReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LandlordControllerGetInvetoryReportPathParams)
    ], LandlordControllerGetInvetoryReportRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LandlordControllerGetInvetoryReportQueryParams)
    ], LandlordControllerGetInvetoryReportRequest.prototype, "queryParams", void 0);
    return LandlordControllerGetInvetoryReportRequest;
}(SpeakeasyBase));
export { LandlordControllerGetInvetoryReportRequest };
var LandlordControllerGetInvetoryReportResponse = /** @class */ (function (_super) {
    __extends(LandlordControllerGetInvetoryReportResponse, _super);
    function LandlordControllerGetInvetoryReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], LandlordControllerGetInvetoryReportResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LandlordControllerGetInvetoryReportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], LandlordControllerGetInvetoryReportResponse.prototype, "object", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LandlordControllerGetInvetoryReportResponse.prototype, "statusCode", void 0);
    return LandlordControllerGetInvetoryReportResponse;
}(SpeakeasyBase));
export { LandlordControllerGetInvetoryReportResponse };
