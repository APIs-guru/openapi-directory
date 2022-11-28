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
var PostSetupV1ServicesBookingwindowsRequests = /** @class */ (function (_super) {
    __extends(PostSetupV1ServicesBookingwindowsRequests, _super);
    function PostSetupV1ServicesBookingwindowsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.BookingWindowInputModel)
    ], PostSetupV1ServicesBookingwindowsRequests.prototype, "bookingWindowInputModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BookingWindowInputModel)
    ], PostSetupV1ServicesBookingwindowsRequests.prototype, "bookingWindowInputModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.BookingWindowInputModel)
    ], PostSetupV1ServicesBookingwindowsRequests.prototype, "bookingWindowInputModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.BookingWindowInputModel)
    ], PostSetupV1ServicesBookingwindowsRequests.prototype, "bookingWindowInputModel3", void 0);
    return PostSetupV1ServicesBookingwindowsRequests;
}(SpeakeasyBase));
export { PostSetupV1ServicesBookingwindowsRequests };
var PostSetupV1ServicesBookingwindowsRequest = /** @class */ (function (_super) {
    __extends(PostSetupV1ServicesBookingwindowsRequest, _super);
    function PostSetupV1ServicesBookingwindowsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetupV1ServicesBookingwindowsRequests)
    ], PostSetupV1ServicesBookingwindowsRequest.prototype, "request", void 0);
    return PostSetupV1ServicesBookingwindowsRequest;
}(SpeakeasyBase));
export { PostSetupV1ServicesBookingwindowsRequest };
var PostSetupV1ServicesBookingwindowsResponse = /** @class */ (function (_super) {
    __extends(PostSetupV1ServicesBookingwindowsResponse, _super);
    function PostSetupV1ServicesBookingwindowsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BookingWindowViewModel)
    ], PostSetupV1ServicesBookingwindowsResponse.prototype, "bookingWindowViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSetupV1ServicesBookingwindowsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSetupV1ServicesBookingwindowsResponse.prototype, "statusCode", void 0);
    return PostSetupV1ServicesBookingwindowsResponse;
}(SpeakeasyBase));
export { PostSetupV1ServicesBookingwindowsResponse };
