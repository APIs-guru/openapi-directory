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
var PutSetupV1ResourcesIdReassignAppointmentsResourceIdPathParams = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesIdReassignAppointmentsResourceIdPathParams, _super);
    function PutSetupV1ResourcesIdReassignAppointmentsResourceIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutSetupV1ResourcesIdReassignAppointmentsResourceIdPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceId" }),
        __metadata("design:type", String)
    ], PutSetupV1ResourcesIdReassignAppointmentsResourceIdPathParams.prototype, "resourceId", void 0);
    return PutSetupV1ResourcesIdReassignAppointmentsResourceIdPathParams;
}(SpeakeasyBase));
export { PutSetupV1ResourcesIdReassignAppointmentsResourceIdPathParams };
var PutSetupV1ResourcesIdReassignAppointmentsResourceIdQueryParams = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesIdReassignAppointmentsResourceIdQueryParams, _super);
    function PutSetupV1ResourcesIdReassignAppointmentsResourceIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=calendarId" }),
        __metadata("design:type", String)
    ], PutSetupV1ResourcesIdReassignAppointmentsResourceIdQueryParams.prototype, "calendarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", Date)
    ], PutSetupV1ResourcesIdReassignAppointmentsResourceIdQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", Date)
    ], PutSetupV1ResourcesIdReassignAppointmentsResourceIdQueryParams.prototype, "startDate", void 0);
    return PutSetupV1ResourcesIdReassignAppointmentsResourceIdQueryParams;
}(SpeakeasyBase));
export { PutSetupV1ResourcesIdReassignAppointmentsResourceIdQueryParams };
var PutSetupV1ResourcesIdReassignAppointmentsResourceIdRequest = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesIdReassignAppointmentsResourceIdRequest, _super);
    function PutSetupV1ResourcesIdReassignAppointmentsResourceIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1ResourcesIdReassignAppointmentsResourceIdPathParams)
    ], PutSetupV1ResourcesIdReassignAppointmentsResourceIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1ResourcesIdReassignAppointmentsResourceIdQueryParams)
    ], PutSetupV1ResourcesIdReassignAppointmentsResourceIdRequest.prototype, "queryParams", void 0);
    return PutSetupV1ResourcesIdReassignAppointmentsResourceIdRequest;
}(SpeakeasyBase));
export { PutSetupV1ResourcesIdReassignAppointmentsResourceIdRequest };
var PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse, _super);
    function PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.AppointmentViewModel }),
        __metadata("design:type", Array)
    ], PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse.prototype, "appointmentViewModels", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse.prototype, "statusCode", void 0);
    return PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse;
}(SpeakeasyBase));
export { PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse };
