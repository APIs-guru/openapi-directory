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
var GetConsumerV1AppointmentsQueryParams = /** @class */ (function (_super) {
    __extends(GetConsumerV1AppointmentsQueryParams, _super);
    function GetConsumerV1AppointmentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bookedBy" }),
        __metadata("design:type", String)
    ], GetConsumerV1AppointmentsQueryParams.prototype, "bookedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=calendarId" }),
        __metadata("design:type", String)
    ], GetConsumerV1AppointmentsQueryParams.prototype, "calendarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customerId" }),
        __metadata("design:type", String)
    ], GetConsumerV1AppointmentsQueryParams.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], GetConsumerV1AppointmentsQueryParams.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", Date)
    ], GetConsumerV1AppointmentsQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lastname" }),
        __metadata("design:type", String)
    ], GetConsumerV1AppointmentsQueryParams.prototype, "lastname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetConsumerV1AppointmentsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" }),
        __metadata("design:type", String)
    ], GetConsumerV1AppointmentsQueryParams.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetConsumerV1AppointmentsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phone" }),
        __metadata("design:type", String)
    ], GetConsumerV1AppointmentsQueryParams.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceId" }),
        __metadata("design:type", String)
    ], GetConsumerV1AppointmentsQueryParams.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceAllocationId" }),
        __metadata("design:type", String)
    ], GetConsumerV1AppointmentsQueryParams.prototype, "serviceAllocationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceId" }),
        __metadata("design:type", String)
    ], GetConsumerV1AppointmentsQueryParams.prototype, "serviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", Date)
    ], GetConsumerV1AppointmentsQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetConsumerV1AppointmentsQueryParams.prototype, "status", void 0);
    return GetConsumerV1AppointmentsQueryParams;
}(SpeakeasyBase));
export { GetConsumerV1AppointmentsQueryParams };
var GetConsumerV1AppointmentsRequest = /** @class */ (function (_super) {
    __extends(GetConsumerV1AppointmentsRequest, _super);
    function GetConsumerV1AppointmentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConsumerV1AppointmentsQueryParams)
    ], GetConsumerV1AppointmentsRequest.prototype, "queryParams", void 0);
    return GetConsumerV1AppointmentsRequest;
}(SpeakeasyBase));
export { GetConsumerV1AppointmentsRequest };
var GetConsumerV1AppointmentsResponse = /** @class */ (function (_super) {
    __extends(GetConsumerV1AppointmentsResponse, _super);
    function GetConsumerV1AppointmentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetConsumerV1AppointmentsResponse.prototype, "appointmentListViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetConsumerV1AppointmentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetConsumerV1AppointmentsResponse.prototype, "statusCode", void 0);
    return GetConsumerV1AppointmentsResponse;
}(SpeakeasyBase));
export { GetConsumerV1AppointmentsResponse };
