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
var LandlordControllerGetMaintenanceJobsPathParams = /** @class */ (function (_super) {
    __extends(LandlordControllerGetMaintenanceJobsPathParams, _super);
    function LandlordControllerGetMaintenanceJobsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" }),
        __metadata("design:type", String)
    ], LandlordControllerGetMaintenanceJobsPathParams.prototype, "shortName", void 0);
    return LandlordControllerGetMaintenanceJobsPathParams;
}(SpeakeasyBase));
export { LandlordControllerGetMaintenanceJobsPathParams };
var LandlordControllerGetMaintenanceJobsQueryParams = /** @class */ (function (_super) {
    __extends(LandlordControllerGetMaintenanceJobsQueryParams, _super);
    function LandlordControllerGetMaintenanceJobsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], LandlordControllerGetMaintenanceJobsQueryParams.prototype, "token", void 0);
    return LandlordControllerGetMaintenanceJobsQueryParams;
}(SpeakeasyBase));
export { LandlordControllerGetMaintenanceJobsQueryParams };
var LandlordControllerGetMaintenanceJobsRequest = /** @class */ (function (_super) {
    __extends(LandlordControllerGetMaintenanceJobsRequest, _super);
    function LandlordControllerGetMaintenanceJobsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LandlordControllerGetMaintenanceJobsPathParams)
    ], LandlordControllerGetMaintenanceJobsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LandlordControllerGetMaintenanceJobsQueryParams)
    ], LandlordControllerGetMaintenanceJobsRequest.prototype, "queryParams", void 0);
    return LandlordControllerGetMaintenanceJobsRequest;
}(SpeakeasyBase));
export { LandlordControllerGetMaintenanceJobsRequest };
var LandlordControllerGetMaintenanceJobsResponse = /** @class */ (function (_super) {
    __extends(LandlordControllerGetMaintenanceJobsResponse, _super);
    function LandlordControllerGetMaintenanceJobsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LandlordControllerGetMaintenanceJobsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LandlordMaintenanceModel)
    ], LandlordControllerGetMaintenanceJobsResponse.prototype, "landlordMaintenanceModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LandlordControllerGetMaintenanceJobsResponse.prototype, "statusCode", void 0);
    return LandlordControllerGetMaintenanceJobsResponse;
}(SpeakeasyBase));
export { LandlordControllerGetMaintenanceJobsResponse };
