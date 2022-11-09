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
var BestFaresQueryParams = /** @class */ (function (_super) {
    __extends(BestFaresQueryParams, _super);
    function BestFaresQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=cabin-class" }),
        __metadata("design:type", String)
    ], BestFaresQueryParams.prototype, "cabinClass", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=catalogues" }),
        __metadata("design:type", String)
    ], BestFaresQueryParams.prototype, "catalogues", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], BestFaresQueryParams.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=destination" }),
        __metadata("design:type", String)
    ], BestFaresQueryParams.prototype, "destination", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fare-family" }),
        __metadata("design:type", String)
    ], BestFaresQueryParams.prototype, "fareFamily", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=origin" }),
        __metadata("design:type", String)
    ], BestFaresQueryParams.prototype, "origin", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=range" }),
        __metadata("design:type", String)
    ], BestFaresQueryParams.prototype, "range", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=trackingid" }),
        __metadata("design:type", String)
    ], BestFaresQueryParams.prototype, "trackingid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=travel-date" }),
        __metadata("design:type", String)
    ], BestFaresQueryParams.prototype, "travelDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=trip-duration" }),
        __metadata("design:type", String)
    ], BestFaresQueryParams.prototype, "tripDuration", void 0);
    return BestFaresQueryParams;
}(SpeakeasyBase));
export { BestFaresQueryParams };
var BestFaresHeaders = /** @class */ (function (_super) {
    __extends(BestFaresHeaders, _super);
    function BestFaresHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], BestFaresHeaders.prototype, "accept", void 0);
    return BestFaresHeaders;
}(SpeakeasyBase));
export { BestFaresHeaders };
var BestFaresSecurity = /** @class */ (function (_super) {
    __extends(BestFaresSecurity, _super);
    function BestFaresSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], BestFaresSecurity.prototype, "auth", void 0);
    return BestFaresSecurity;
}(SpeakeasyBase));
export { BestFaresSecurity };
var BestFaresRequest = /** @class */ (function (_super) {
    __extends(BestFaresRequest, _super);
    function BestFaresRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BestFaresQueryParams)
    ], BestFaresRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BestFaresHeaders)
    ], BestFaresRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BestFaresSecurity)
    ], BestFaresRequest.prototype, "security", void 0);
    return BestFaresRequest;
}(SpeakeasyBase));
export { BestFaresRequest };
var BestFaresResponse = /** @class */ (function (_super) {
    __extends(BestFaresResponse, _super);
    function BestFaresResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BestFaresResponse.prototype, "bestFares200ApplicationJsonString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BestFaresResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BestFaresResponse.prototype, "statusCode", void 0);
    return BestFaresResponse;
}(SpeakeasyBase));
export { BestFaresResponse };
