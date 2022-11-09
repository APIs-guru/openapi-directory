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
var AllFaresQueryParams = /** @class */ (function (_super) {
    __extends(AllFaresQueryParams, _super);
    function AllFaresQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=cabin-class" }),
        __metadata("design:type", String)
    ], AllFaresQueryParams.prototype, "cabinClass", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=catalogues" }),
        __metadata("design:type", String)
    ], AllFaresQueryParams.prototype, "catalogues", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=destination" }),
        __metadata("design:type", String)
    ], AllFaresQueryParams.prototype, "destination", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fare-family" }),
        __metadata("design:type", String)
    ], AllFaresQueryParams.prototype, "fareFamily", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=origin" }),
        __metadata("design:type", String)
    ], AllFaresQueryParams.prototype, "origin", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=return-date" }),
        __metadata("design:type", String)
    ], AllFaresQueryParams.prototype, "returnDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=trackingid" }),
        __metadata("design:type", String)
    ], AllFaresQueryParams.prototype, "trackingid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=travel-date" }),
        __metadata("design:type", String)
    ], AllFaresQueryParams.prototype, "travelDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=travelers" }),
        __metadata("design:type", String)
    ], AllFaresQueryParams.prototype, "travelers", void 0);
    return AllFaresQueryParams;
}(SpeakeasyBase));
export { AllFaresQueryParams };
var AllFaresHeaders = /** @class */ (function (_super) {
    __extends(AllFaresHeaders, _super);
    function AllFaresHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], AllFaresHeaders.prototype, "accept", void 0);
    return AllFaresHeaders;
}(SpeakeasyBase));
export { AllFaresHeaders };
var AllFaresSecurity = /** @class */ (function (_super) {
    __extends(AllFaresSecurity, _super);
    function AllFaresSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], AllFaresSecurity.prototype, "auth", void 0);
    return AllFaresSecurity;
}(SpeakeasyBase));
export { AllFaresSecurity };
var AllFaresRequest = /** @class */ (function (_super) {
    __extends(AllFaresRequest, _super);
    function AllFaresRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AllFaresQueryParams)
    ], AllFaresRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AllFaresHeaders)
    ], AllFaresRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AllFaresSecurity)
    ], AllFaresRequest.prototype, "security", void 0);
    return AllFaresRequest;
}(SpeakeasyBase));
export { AllFaresRequest };
var AllFaresResponse = /** @class */ (function (_super) {
    __extends(AllFaresResponse, _super);
    function AllFaresResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AllFaresResponse.prototype, "allFares200ApplicationJsonString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AllFaresResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AllFaresResponse.prototype, "statusCode", void 0);
    return AllFaresResponse;
}(SpeakeasyBase));
export { AllFaresResponse };
