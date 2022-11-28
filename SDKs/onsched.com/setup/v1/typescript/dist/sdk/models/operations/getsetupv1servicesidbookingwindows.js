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
var GetSetupV1ServicesIdBookingwindowsPathParams = /** @class */ (function (_super) {
    __extends(GetSetupV1ServicesIdBookingwindowsPathParams, _super);
    function GetSetupV1ServicesIdBookingwindowsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSetupV1ServicesIdBookingwindowsPathParams.prototype, "id", void 0);
    return GetSetupV1ServicesIdBookingwindowsPathParams;
}(SpeakeasyBase));
export { GetSetupV1ServicesIdBookingwindowsPathParams };
var GetSetupV1ServicesIdBookingwindowsQueryParams = /** @class */ (function (_super) {
    __extends(GetSetupV1ServicesIdBookingwindowsQueryParams, _super);
    function GetSetupV1ServicesIdBookingwindowsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSetupV1ServicesIdBookingwindowsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetSetupV1ServicesIdBookingwindowsQueryParams.prototype, "offset", void 0);
    return GetSetupV1ServicesIdBookingwindowsQueryParams;
}(SpeakeasyBase));
export { GetSetupV1ServicesIdBookingwindowsQueryParams };
var GetSetupV1ServicesIdBookingwindowsRequest = /** @class */ (function (_super) {
    __extends(GetSetupV1ServicesIdBookingwindowsRequest, _super);
    function GetSetupV1ServicesIdBookingwindowsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetupV1ServicesIdBookingwindowsPathParams)
    ], GetSetupV1ServicesIdBookingwindowsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetupV1ServicesIdBookingwindowsQueryParams)
    ], GetSetupV1ServicesIdBookingwindowsRequest.prototype, "queryParams", void 0);
    return GetSetupV1ServicesIdBookingwindowsRequest;
}(SpeakeasyBase));
export { GetSetupV1ServicesIdBookingwindowsRequest };
var GetSetupV1ServicesIdBookingwindowsResponse = /** @class */ (function (_super) {
    __extends(GetSetupV1ServicesIdBookingwindowsResponse, _super);
    function GetSetupV1ServicesIdBookingwindowsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BookingWindowViewModel)
    ], GetSetupV1ServicesIdBookingwindowsResponse.prototype, "bookingWindowViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSetupV1ServicesIdBookingwindowsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSetupV1ServicesIdBookingwindowsResponse.prototype, "statusCode", void 0);
    return GetSetupV1ServicesIdBookingwindowsResponse;
}(SpeakeasyBase));
export { GetSetupV1ServicesIdBookingwindowsResponse };
