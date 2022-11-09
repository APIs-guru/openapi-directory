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
var OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams = /** @class */ (function (_super) {
    __extends(OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams, _super);
    function OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=cabinClass" }),
        __metadata("design:type", String)
    ], OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams.prototype, "cabinClass", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=date" }),
        __metadata("design:type", String)
    ], OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams.prototype, "date", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=destination" }),
        __metadata("design:type", String)
    ], OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams.prototype, "destination", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=flightNumber" }),
        __metadata("design:type", String)
    ], OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams.prototype, "flightNumber", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=origin" }),
        __metadata("design:type", String)
    ], OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams.prototype, "origin", void 0);
    return OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams;
}(SpeakeasyBase));
export { OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams };
var OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetHeaders = /** @class */ (function (_super) {
    __extends(OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetHeaders, _super);
    function OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetHeaders.prototype, "accept", void 0);
    return OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetHeaders;
}(SpeakeasyBase));
export { OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetHeaders };
var OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity = /** @class */ (function (_super) {
    __extends(OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity, _super);
    function OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity.prototype, "auth", void 0);
    return OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity;
}(SpeakeasyBase));
export { OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity };
var OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest = /** @class */ (function (_super) {
    __extends(OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest, _super);
    function OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams)
    ], OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetHeaders)
    ], OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity)
    ], OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest.prototype, "security", void 0);
    return OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest;
}(SpeakeasyBase));
export { OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest };
var OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse = /** @class */ (function (_super) {
    __extends(OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse, _super);
    function OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse.prototype, "offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet200ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse.prototype, "statusCode", void 0);
    return OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse;
}(SpeakeasyBase));
export { OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse };
