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
var SeatDetailsPathParams = /** @class */ (function (_super) {
    __extends(SeatDetailsPathParams, _super);
    function SeatDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=aircraftCode" }),
        __metadata("design:type", String)
    ], SeatDetailsPathParams.prototype, "aircraftCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cabinCode" }),
        __metadata("design:type", String)
    ], SeatDetailsPathParams.prototype, "cabinCode", void 0);
    return SeatDetailsPathParams;
}(SpeakeasyBase));
export { SeatDetailsPathParams };
var SeatDetailsQueryParams = /** @class */ (function (_super) {
    __extends(SeatDetailsQueryParams, _super);
    function SeatDetailsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], SeatDetailsQueryParams.prototype, "lang", void 0);
    return SeatDetailsQueryParams;
}(SpeakeasyBase));
export { SeatDetailsQueryParams };
var SeatDetailsHeaders = /** @class */ (function (_super) {
    __extends(SeatDetailsHeaders, _super);
    function SeatDetailsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], SeatDetailsHeaders.prototype, "accept", void 0);
    return SeatDetailsHeaders;
}(SpeakeasyBase));
export { SeatDetailsHeaders };
var SeatDetailsSecurity = /** @class */ (function (_super) {
    __extends(SeatDetailsSecurity, _super);
    function SeatDetailsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], SeatDetailsSecurity.prototype, "auth", void 0);
    return SeatDetailsSecurity;
}(SpeakeasyBase));
export { SeatDetailsSecurity };
var SeatDetailsRequest = /** @class */ (function (_super) {
    __extends(SeatDetailsRequest, _super);
    function SeatDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SeatDetailsPathParams)
    ], SeatDetailsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SeatDetailsQueryParams)
    ], SeatDetailsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SeatDetailsHeaders)
    ], SeatDetailsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SeatDetailsSecurity)
    ], SeatDetailsRequest.prototype, "security", void 0);
    return SeatDetailsRequest;
}(SpeakeasyBase));
export { SeatDetailsRequest };
var SeatDetailsResponse = /** @class */ (function (_super) {
    __extends(SeatDetailsResponse, _super);
    function SeatDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SeatDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SeatDetailsResponse.prototype, "seatDetails200ApplicationJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SeatDetailsResponse.prototype, "statusCode", void 0);
    return SeatDetailsResponse;
}(SpeakeasyBase));
export { SeatDetailsResponse };
