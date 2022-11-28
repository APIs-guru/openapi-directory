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
var GetConsumerV1AvailabilityServiceIdStartDateEndDatePathParams = /** @class */ (function (_super) {
    __extends(GetConsumerV1AvailabilityServiceIdStartDateEndDatePathParams, _super);
    function GetConsumerV1AvailabilityServiceIdStartDateEndDatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=endDate" }),
        __metadata("design:type", Date)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDatePathParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" }),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDatePathParams.prototype, "serviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=startDate" }),
        __metadata("design:type", Date)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDatePathParams.prototype, "startDate", void 0);
    return GetConsumerV1AvailabilityServiceIdStartDateEndDatePathParams;
}(SpeakeasyBase));
export { GetConsumerV1AvailabilityServiceIdStartDateEndDatePathParams };
var GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams = /** @class */ (function (_super) {
    __extends(GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams, _super);
    function GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dayAvailability" }),
        __metadata("design:type", Number)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams.prototype, "dayAvailability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dayAvailabilityStartDate" }),
        __metadata("design:type", Date)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams.prototype, "dayAvailabilityStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destination" }),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=duration" }),
        __metadata("design:type", Number)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" }),
        __metadata("design:type", Number)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=firstDayAvailable" }),
        __metadata("design:type", Boolean)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams.prototype, "firstDayAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fullServerBasedAvailability" }),
        __metadata("design:type", Boolean)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams.prototype, "fullServerBasedAvailability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval" }),
        __metadata("design:type", Number)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams.prototype, "interval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" }),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceGroupId" }),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams.prototype, "resourceGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceId" }),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceIds" }),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams.prototype, "resourceIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roundRobin" }),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams.prototype, "roundRobin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", Number)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tzOffset" }),
        __metadata("design:type", Number)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams.prototype, "tzOffset", void 0);
    return GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams;
}(SpeakeasyBase));
export { GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams };
var GetConsumerV1AvailabilityServiceIdStartDateEndDateRequest = /** @class */ (function (_super) {
    __extends(GetConsumerV1AvailabilityServiceIdStartDateEndDateRequest, _super);
    function GetConsumerV1AvailabilityServiceIdStartDateEndDateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConsumerV1AvailabilityServiceIdStartDateEndDatePathParams)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateRequest.prototype, "queryParams", void 0);
    return GetConsumerV1AvailabilityServiceIdStartDateEndDateRequest;
}(SpeakeasyBase));
export { GetConsumerV1AvailabilityServiceIdStartDateEndDateRequest };
var GetConsumerV1AvailabilityServiceIdStartDateEndDateResponse = /** @class */ (function (_super) {
    __extends(GetConsumerV1AvailabilityServiceIdStartDateEndDateResponse, _super);
    function GetConsumerV1AvailabilityServiceIdStartDateEndDateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AvailabilityViewModel)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateResponse.prototype, "availabilityViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateResponse.prototype, "statusCode", void 0);
    return GetConsumerV1AvailabilityServiceIdStartDateEndDateResponse;
}(SpeakeasyBase));
export { GetConsumerV1AvailabilityServiceIdStartDateEndDateResponse };
