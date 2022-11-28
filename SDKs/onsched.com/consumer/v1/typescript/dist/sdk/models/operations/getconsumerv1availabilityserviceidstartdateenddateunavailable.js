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
var GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailablePathParams = /** @class */ (function (_super) {
    __extends(GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailablePathParams, _super);
    function GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailablePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=endDate" }),
        __metadata("design:type", Date)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailablePathParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" }),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailablePathParams.prototype, "serviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=startDate" }),
        __metadata("design:type", Date)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailablePathParams.prototype, "startDate", void 0);
    return GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailablePathParams;
}(SpeakeasyBase));
export { GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailablePathParams };
var GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryParams = /** @class */ (function (_super) {
    __extends(GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryParams, _super);
    function GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=duration" }),
        __metadata("design:type", Number)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryParams.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fullServerBasedAvailability" }),
        __metadata("design:type", Boolean)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryParams.prototype, "fullServerBasedAvailability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" }),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryParams.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceId" }),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryParams.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tzOffset" }),
        __metadata("design:type", Number)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryParams.prototype, "tzOffset", void 0);
    return GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryParams;
}(SpeakeasyBase));
export { GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryParams };
var GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRequest = /** @class */ (function (_super) {
    __extends(GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRequest, _super);
    function GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailablePathParams)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryParams)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRequest.prototype, "queryParams", void 0);
    return GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRequest;
}(SpeakeasyBase));
export { GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRequest };
var GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableResponse = /** @class */ (function (_super) {
    __extends(GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableResponse, _super);
    function GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableResponse.prototype, "unavailableTimeListViewModel", void 0);
    return GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableResponse;
}(SpeakeasyBase));
export { GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableResponse };
