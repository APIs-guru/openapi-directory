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
var PutSetupV1ServicesBookingwindowsIdPathParams = /** @class */ (function (_super) {
    __extends(PutSetupV1ServicesBookingwindowsIdPathParams, _super);
    function PutSetupV1ServicesBookingwindowsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutSetupV1ServicesBookingwindowsIdPathParams.prototype, "id", void 0);
    return PutSetupV1ServicesBookingwindowsIdPathParams;
}(SpeakeasyBase));
export { PutSetupV1ServicesBookingwindowsIdPathParams };
var PutSetupV1ServicesBookingwindowsIdRequests = /** @class */ (function (_super) {
    __extends(PutSetupV1ServicesBookingwindowsIdRequests, _super);
    function PutSetupV1ServicesBookingwindowsIdRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.BookingWindowUpdateModel)
    ], PutSetupV1ServicesBookingwindowsIdRequests.prototype, "bookingWindowUpdateModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BookingWindowUpdateModel)
    ], PutSetupV1ServicesBookingwindowsIdRequests.prototype, "bookingWindowUpdateModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.BookingWindowUpdateModel)
    ], PutSetupV1ServicesBookingwindowsIdRequests.prototype, "bookingWindowUpdateModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.BookingWindowUpdateModel)
    ], PutSetupV1ServicesBookingwindowsIdRequests.prototype, "bookingWindowUpdateModel3", void 0);
    return PutSetupV1ServicesBookingwindowsIdRequests;
}(SpeakeasyBase));
export { PutSetupV1ServicesBookingwindowsIdRequests };
var PutSetupV1ServicesBookingwindowsIdRequest = /** @class */ (function (_super) {
    __extends(PutSetupV1ServicesBookingwindowsIdRequest, _super);
    function PutSetupV1ServicesBookingwindowsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1ServicesBookingwindowsIdPathParams)
    ], PutSetupV1ServicesBookingwindowsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1ServicesBookingwindowsIdRequests)
    ], PutSetupV1ServicesBookingwindowsIdRequest.prototype, "request", void 0);
    return PutSetupV1ServicesBookingwindowsIdRequest;
}(SpeakeasyBase));
export { PutSetupV1ServicesBookingwindowsIdRequest };
var PutSetupV1ServicesBookingwindowsIdResponse = /** @class */ (function (_super) {
    __extends(PutSetupV1ServicesBookingwindowsIdResponse, _super);
    function PutSetupV1ServicesBookingwindowsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BookingWindowViewModel)
    ], PutSetupV1ServicesBookingwindowsIdResponse.prototype, "bookingWindowViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSetupV1ServicesBookingwindowsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSetupV1ServicesBookingwindowsIdResponse.prototype, "statusCode", void 0);
    return PutSetupV1ServicesBookingwindowsIdResponse;
}(SpeakeasyBase));
export { PutSetupV1ServicesBookingwindowsIdResponse };
