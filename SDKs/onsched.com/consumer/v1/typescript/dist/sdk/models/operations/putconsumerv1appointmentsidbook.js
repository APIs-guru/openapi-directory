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
var PutConsumerV1AppointmentsIdBookPathParams = /** @class */ (function (_super) {
    __extends(PutConsumerV1AppointmentsIdBookPathParams, _super);
    function PutConsumerV1AppointmentsIdBookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutConsumerV1AppointmentsIdBookPathParams.prototype, "id", void 0);
    return PutConsumerV1AppointmentsIdBookPathParams;
}(SpeakeasyBase));
export { PutConsumerV1AppointmentsIdBookPathParams };
var PutConsumerV1AppointmentsIdBookRequests = /** @class */ (function (_super) {
    __extends(PutConsumerV1AppointmentsIdBookRequests, _super);
    function PutConsumerV1AppointmentsIdBookRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.AppointmentBookModel)
    ], PutConsumerV1AppointmentsIdBookRequests.prototype, "appointmentBookModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AppointmentBookModel)
    ], PutConsumerV1AppointmentsIdBookRequests.prototype, "appointmentBookModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.AppointmentBookModel)
    ], PutConsumerV1AppointmentsIdBookRequests.prototype, "appointmentBookModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.AppointmentBookModel)
    ], PutConsumerV1AppointmentsIdBookRequests.prototype, "appointmentBookModel3", void 0);
    return PutConsumerV1AppointmentsIdBookRequests;
}(SpeakeasyBase));
export { PutConsumerV1AppointmentsIdBookRequests };
var PutConsumerV1AppointmentsIdBookRequest = /** @class */ (function (_super) {
    __extends(PutConsumerV1AppointmentsIdBookRequest, _super);
    function PutConsumerV1AppointmentsIdBookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutConsumerV1AppointmentsIdBookPathParams)
    ], PutConsumerV1AppointmentsIdBookRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutConsumerV1AppointmentsIdBookRequests)
    ], PutConsumerV1AppointmentsIdBookRequest.prototype, "request", void 0);
    return PutConsumerV1AppointmentsIdBookRequest;
}(SpeakeasyBase));
export { PutConsumerV1AppointmentsIdBookRequest };
var PutConsumerV1AppointmentsIdBookResponse = /** @class */ (function (_super) {
    __extends(PutConsumerV1AppointmentsIdBookResponse, _super);
    function PutConsumerV1AppointmentsIdBookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AppointmentViewModel)
    ], PutConsumerV1AppointmentsIdBookResponse.prototype, "appointmentViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutConsumerV1AppointmentsIdBookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutConsumerV1AppointmentsIdBookResponse.prototype, "statusCode", void 0);
    return PutConsumerV1AppointmentsIdBookResponse;
}(SpeakeasyBase));
export { PutConsumerV1AppointmentsIdBookResponse };
