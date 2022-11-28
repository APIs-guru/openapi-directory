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
var GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsPathParams = /** @class */ (function (_super) {
    __extends(GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsPathParams, _super);
    function GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=endDate" }),
        __metadata("design:type", Date)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsPathParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" }),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsPathParams.prototype, "serviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=startDate" }),
        __metadata("design:type", Date)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsPathParams.prototype, "startDate", void 0);
    return GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsPathParams;
}(SpeakeasyBase));
export { GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsPathParams };
var GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams = /** @class */ (function (_super) {
    __extends(GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams, _super);
    function GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destination" }),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=duration" }),
        __metadata("design:type", Number)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval" }),
        __metadata("design:type", Number)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams.prototype, "interval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" }),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceGroupId" }),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams.prototype, "resourceGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceId" }),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceIds" }),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams.prototype, "resourceIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roundRobin" }),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams.prototype, "roundRobin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tzOffset" }),
        __metadata("design:type", Number)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams.prototype, "tzOffset", void 0);
    return GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams;
}(SpeakeasyBase));
export { GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams };
var GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsRequest = /** @class */ (function (_super) {
    __extends(GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsRequest, _super);
    function GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsPathParams)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsRequest.prototype, "queryParams", void 0);
    return GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsRequest;
}(SpeakeasyBase));
export { GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsRequest };
var GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsResponse = /** @class */ (function (_super) {
    __extends(GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsResponse, _super);
    function GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.WindowAvailabilityViewModel)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsResponse.prototype, "windowAvailabilityViewModel", void 0);
    return GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsResponse;
}(SpeakeasyBase));
export { GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsResponse };
