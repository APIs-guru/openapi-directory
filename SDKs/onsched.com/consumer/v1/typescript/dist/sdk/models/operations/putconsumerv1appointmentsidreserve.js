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
var PutConsumerV1AppointmentsIdReservePathParams = /** @class */ (function (_super) {
    __extends(PutConsumerV1AppointmentsIdReservePathParams, _super);
    function PutConsumerV1AppointmentsIdReservePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutConsumerV1AppointmentsIdReservePathParams.prototype, "id", void 0);
    return PutConsumerV1AppointmentsIdReservePathParams;
}(SpeakeasyBase));
export { PutConsumerV1AppointmentsIdReservePathParams };
var PutConsumerV1AppointmentsIdReserveQueryParams = /** @class */ (function (_super) {
    __extends(PutConsumerV1AppointmentsIdReserveQueryParams, _super);
    function PutConsumerV1AppointmentsIdReserveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sendNotifications" }),
        __metadata("design:type", Boolean)
    ], PutConsumerV1AppointmentsIdReserveQueryParams.prototype, "sendNotifications", void 0);
    return PutConsumerV1AppointmentsIdReserveQueryParams;
}(SpeakeasyBase));
export { PutConsumerV1AppointmentsIdReserveQueryParams };
var PutConsumerV1AppointmentsIdReserveRequests = /** @class */ (function (_super) {
    __extends(PutConsumerV1AppointmentsIdReserveRequests, _super);
    function PutConsumerV1AppointmentsIdReserveRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.AppointmentReserveModel)
    ], PutConsumerV1AppointmentsIdReserveRequests.prototype, "appointmentReserveModel", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AppointmentReserveModel)
    ], PutConsumerV1AppointmentsIdReserveRequests.prototype, "appointmentReserveModel1", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.AppointmentReserveModel)
    ], PutConsumerV1AppointmentsIdReserveRequests.prototype, "appointmentReserveModel2", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.AppointmentReserveModel)
    ], PutConsumerV1AppointmentsIdReserveRequests.prototype, "appointmentReserveModel3", void 0);
    return PutConsumerV1AppointmentsIdReserveRequests;
}(SpeakeasyBase));
export { PutConsumerV1AppointmentsIdReserveRequests };
var PutConsumerV1AppointmentsIdReserveRequest = /** @class */ (function (_super) {
    __extends(PutConsumerV1AppointmentsIdReserveRequest, _super);
    function PutConsumerV1AppointmentsIdReserveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutConsumerV1AppointmentsIdReservePathParams)
    ], PutConsumerV1AppointmentsIdReserveRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PutConsumerV1AppointmentsIdReserveQueryParams)
    ], PutConsumerV1AppointmentsIdReserveRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PutConsumerV1AppointmentsIdReserveRequests)
    ], PutConsumerV1AppointmentsIdReserveRequest.prototype, "request", void 0);
    return PutConsumerV1AppointmentsIdReserveRequest;
}(SpeakeasyBase));
export { PutConsumerV1AppointmentsIdReserveRequest };
var PutConsumerV1AppointmentsIdReserveResponse = /** @class */ (function (_super) {
    __extends(PutConsumerV1AppointmentsIdReserveResponse, _super);
    function PutConsumerV1AppointmentsIdReserveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutConsumerV1AppointmentsIdReserveResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutConsumerV1AppointmentsIdReserveResponse.prototype, "statusCode", void 0);
    return PutConsumerV1AppointmentsIdReserveResponse;
}(SpeakeasyBase));
export { PutConsumerV1AppointmentsIdReserveResponse };
