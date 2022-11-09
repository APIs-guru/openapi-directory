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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesPathParams = /** @class */ (function (_super) {
    __extends(GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesPathParams, _super);
    function GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=endDate" }),
        __metadata("design:type", Date)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesPathParams.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" }),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesPathParams.prototype, "serviceId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=startDate" }),
        __metadata("design:type", Date)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesPathParams.prototype, "startDate", void 0);
    return GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesPathParams;
}(SpeakeasyBase));
export { GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesPathParams };
var GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams = /** @class */ (function (_super) {
    __extends(GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams, _super);
    function GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dayAvailability" }),
        __metadata("design:type", Number)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams.prototype, "dayAvailability", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dayAvailabilityStartDate" }),
        __metadata("design:type", Date)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams.prototype, "dayAvailabilityStartDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=destination" }),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams.prototype, "destination", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=duration" }),
        __metadata("design:type", Number)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams.prototype, "duration", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=endTime" }),
        __metadata("design:type", Number)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams.prototype, "endTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=firstDayAvailable" }),
        __metadata("design:type", Boolean)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams.prototype, "firstDayAvailable", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=interval" }),
        __metadata("design:type", Number)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams.prototype, "interval", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=locationId" }),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams.prototype, "locationId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=resourceGroupId" }),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams.prototype, "resourceGroupId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=resourceId" }),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams.prototype, "resourceId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=resourceIds" }),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams.prototype, "resourceIds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=roundRobin" }),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams.prototype, "roundRobin", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", Number)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams.prototype, "startTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=tzOffset" }),
        __metadata("design:type", Number)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams.prototype, "tzOffset", void 0);
    return GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams;
}(SpeakeasyBase));
export { GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams };
var GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesRequest = /** @class */ (function (_super) {
    __extends(GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesRequest, _super);
    function GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesPathParams)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesRequest.prototype, "queryParams", void 0);
    return GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesRequest;
}(SpeakeasyBase));
export { GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesRequest };
var GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesResponse = /** @class */ (function (_super) {
    __extends(GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesResponse, _super);
    function GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Availability3ViewModel)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesResponse.prototype, "availability3ViewModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesResponse.prototype, "statusCode", void 0);
    return GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesResponse;
}(SpeakeasyBase));
export { GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesResponse };
