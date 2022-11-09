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
var LhDeepLinksItcoQueryParams = /** @class */ (function (_super) {
    __extends(LhDeepLinksItcoQueryParams, _super);
    function LhDeepLinksItcoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=cabin-class" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "cabinClass", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=catalogues" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "catalogues", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=destination" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "destination", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=encryption-key" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "encryptionKey", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fare" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "fare", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fare-currency" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "fareCurrency", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "lang", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=net-fare" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "netFare", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=origin" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "origin", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=outbound-segments" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "outboundSegments", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=partnerid" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "partnerid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=return-date" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "returnDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=return-segments" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "returnSegments", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=trackingid" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "trackingid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=travel-date" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "travelDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=travelers" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoQueryParams.prototype, "travelers", void 0);
    return LhDeepLinksItcoQueryParams;
}(SpeakeasyBase));
export { LhDeepLinksItcoQueryParams };
var LhDeepLinksItcoHeaders = /** @class */ (function (_super) {
    __extends(LhDeepLinksItcoHeaders, _super);
    function LhDeepLinksItcoHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], LhDeepLinksItcoHeaders.prototype, "accept", void 0);
    return LhDeepLinksItcoHeaders;
}(SpeakeasyBase));
export { LhDeepLinksItcoHeaders };
var LhDeepLinksItcoSecurity = /** @class */ (function (_super) {
    __extends(LhDeepLinksItcoSecurity, _super);
    function LhDeepLinksItcoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], LhDeepLinksItcoSecurity.prototype, "auth", void 0);
    return LhDeepLinksItcoSecurity;
}(SpeakeasyBase));
export { LhDeepLinksItcoSecurity };
var LhDeepLinksItcoRequest = /** @class */ (function (_super) {
    __extends(LhDeepLinksItcoRequest, _super);
    function LhDeepLinksItcoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LhDeepLinksItcoQueryParams)
    ], LhDeepLinksItcoRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LhDeepLinksItcoHeaders)
    ], LhDeepLinksItcoRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LhDeepLinksItcoSecurity)
    ], LhDeepLinksItcoRequest.prototype, "security", void 0);
    return LhDeepLinksItcoRequest;
}(SpeakeasyBase));
export { LhDeepLinksItcoRequest };
var LhDeepLinksItcoResponse = /** @class */ (function (_super) {
    __extends(LhDeepLinksItcoResponse, _super);
    function LhDeepLinksItcoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LhDeepLinksItcoResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LhDeepLinksItcoResponse.prototype, "lhDeepLinksItco200ApplicationJsonString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LhDeepLinksItcoResponse.prototype, "statusCode", void 0);
    return LhDeepLinksItcoResponse;
}(SpeakeasyBase));
export { LhDeepLinksItcoResponse };
