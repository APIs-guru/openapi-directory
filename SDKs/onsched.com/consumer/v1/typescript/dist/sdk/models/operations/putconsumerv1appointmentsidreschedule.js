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
var PutConsumerV1AppointmentsIdReschedulePathParams = /** @class */ (function (_super) {
    __extends(PutConsumerV1AppointmentsIdReschedulePathParams, _super);
    function PutConsumerV1AppointmentsIdReschedulePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutConsumerV1AppointmentsIdReschedulePathParams.prototype, "id", void 0);
    return PutConsumerV1AppointmentsIdReschedulePathParams;
}(SpeakeasyBase));
export { PutConsumerV1AppointmentsIdReschedulePathParams };
var PutConsumerV1AppointmentsIdRescheduleRequests = /** @class */ (function (_super) {
    __extends(PutConsumerV1AppointmentsIdRescheduleRequests, _super);
    function PutConsumerV1AppointmentsIdRescheduleRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.AppointmentRescheduleModel)
    ], PutConsumerV1AppointmentsIdRescheduleRequests.prototype, "appointmentRescheduleModel", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AppointmentRescheduleModel)
    ], PutConsumerV1AppointmentsIdRescheduleRequests.prototype, "appointmentRescheduleModel1", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.AppointmentRescheduleModel)
    ], PutConsumerV1AppointmentsIdRescheduleRequests.prototype, "appointmentRescheduleModel2", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.AppointmentRescheduleModel)
    ], PutConsumerV1AppointmentsIdRescheduleRequests.prototype, "appointmentRescheduleModel3", void 0);
    return PutConsumerV1AppointmentsIdRescheduleRequests;
}(SpeakeasyBase));
export { PutConsumerV1AppointmentsIdRescheduleRequests };
var PutConsumerV1AppointmentsIdRescheduleRequest = /** @class */ (function (_super) {
    __extends(PutConsumerV1AppointmentsIdRescheduleRequest, _super);
    function PutConsumerV1AppointmentsIdRescheduleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutConsumerV1AppointmentsIdReschedulePathParams)
    ], PutConsumerV1AppointmentsIdRescheduleRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PutConsumerV1AppointmentsIdRescheduleRequests)
    ], PutConsumerV1AppointmentsIdRescheduleRequest.prototype, "request", void 0);
    return PutConsumerV1AppointmentsIdRescheduleRequest;
}(SpeakeasyBase));
export { PutConsumerV1AppointmentsIdRescheduleRequest };
var PutConsumerV1AppointmentsIdRescheduleResponse = /** @class */ (function (_super) {
    __extends(PutConsumerV1AppointmentsIdRescheduleResponse, _super);
    function PutConsumerV1AppointmentsIdRescheduleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AppointmentViewModel)
    ], PutConsumerV1AppointmentsIdRescheduleResponse.prototype, "appointmentViewModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutConsumerV1AppointmentsIdRescheduleResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutConsumerV1AppointmentsIdRescheduleResponse.prototype, "statusCode", void 0);
    return PutConsumerV1AppointmentsIdRescheduleResponse;
}(SpeakeasyBase));
export { PutConsumerV1AppointmentsIdRescheduleResponse };
