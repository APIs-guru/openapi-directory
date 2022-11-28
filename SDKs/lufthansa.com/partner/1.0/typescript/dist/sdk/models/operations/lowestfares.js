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
var LowestFaresQueryParams = /** @class */ (function (_super) {
    __extends(LowestFaresQueryParams, _super);
    function LowestFaresQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cabin-class" }),
        __metadata("design:type", String)
    ], LowestFaresQueryParams.prototype, "cabinClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=catalogues" }),
        __metadata("design:type", String)
    ], LowestFaresQueryParams.prototype, "catalogues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], LowestFaresQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destination" }),
        __metadata("design:type", String)
    ], LowestFaresQueryParams.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fare-family" }),
        __metadata("design:type", String)
    ], LowestFaresQueryParams.prototype, "fareFamily", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=origin" }),
        __metadata("design:type", String)
    ], LowestFaresQueryParams.prototype, "origin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=return-date" }),
        __metadata("design:type", String)
    ], LowestFaresQueryParams.prototype, "returnDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=travel-date" }),
        __metadata("design:type", String)
    ], LowestFaresQueryParams.prototype, "travelDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=travelers" }),
        __metadata("design:type", String)
    ], LowestFaresQueryParams.prototype, "travelers", void 0);
    return LowestFaresQueryParams;
}(SpeakeasyBase));
export { LowestFaresQueryParams };
var LowestFaresHeaders = /** @class */ (function (_super) {
    __extends(LowestFaresHeaders, _super);
    function LowestFaresHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], LowestFaresHeaders.prototype, "accept", void 0);
    return LowestFaresHeaders;
}(SpeakeasyBase));
export { LowestFaresHeaders };
var LowestFaresSecurity = /** @class */ (function (_super) {
    __extends(LowestFaresSecurity, _super);
    function LowestFaresSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], LowestFaresSecurity.prototype, "auth", void 0);
    return LowestFaresSecurity;
}(SpeakeasyBase));
export { LowestFaresSecurity };
var LowestFaresRequest = /** @class */ (function (_super) {
    __extends(LowestFaresRequest, _super);
    function LowestFaresRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LowestFaresQueryParams)
    ], LowestFaresRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LowestFaresHeaders)
    ], LowestFaresRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LowestFaresSecurity)
    ], LowestFaresRequest.prototype, "security", void 0);
    return LowestFaresRequest;
}(SpeakeasyBase));
export { LowestFaresRequest };
var LowestFaresResponse = /** @class */ (function (_super) {
    __extends(LowestFaresResponse, _super);
    function LowestFaresResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LowestFaresResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LowestFaresResponse.prototype, "lowestFares200ApplicationJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LowestFaresResponse.prototype, "statusCode", void 0);
    return LowestFaresResponse;
}(SpeakeasyBase));
export { LowestFaresResponse };
