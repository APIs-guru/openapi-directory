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
var DeepLinksQueryParams = /** @class */ (function (_super) {
    __extends(DeepLinksQueryParams, _super);
    function DeepLinksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cabin-class" }),
        __metadata("design:type", String)
    ], DeepLinksQueryParams.prototype, "cabinClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=catalogues" }),
        __metadata("design:type", String)
    ], DeepLinksQueryParams.prototype, "catalogues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], DeepLinksQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destination" }),
        __metadata("design:type", String)
    ], DeepLinksQueryParams.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destination-name" }),
        __metadata("design:type", String)
    ], DeepLinksQueryParams.prototype, "destinationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=encryption-key" }),
        __metadata("design:type", String)
    ], DeepLinksQueryParams.prototype, "encryptionKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fare" }),
        __metadata("design:type", String)
    ], DeepLinksQueryParams.prototype, "fare", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fare-currency" }),
        __metadata("design:type", String)
    ], DeepLinksQueryParams.prototype, "fareCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], DeepLinksQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=net-fare" }),
        __metadata("design:type", String)
    ], DeepLinksQueryParams.prototype, "netFare", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=origin" }),
        __metadata("design:type", String)
    ], DeepLinksQueryParams.prototype, "origin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=origin-name" }),
        __metadata("design:type", String)
    ], DeepLinksQueryParams.prototype, "originName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outbound-segments" }),
        __metadata("design:type", String)
    ], DeepLinksQueryParams.prototype, "outboundSegments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partnerid" }),
        __metadata("design:type", String)
    ], DeepLinksQueryParams.prototype, "partnerid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=return-date" }),
        __metadata("design:type", String)
    ], DeepLinksQueryParams.prototype, "returnDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=return-segments" }),
        __metadata("design:type", String)
    ], DeepLinksQueryParams.prototype, "returnSegments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trackingid" }),
        __metadata("design:type", String)
    ], DeepLinksQueryParams.prototype, "trackingid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=travel-date" }),
        __metadata("design:type", String)
    ], DeepLinksQueryParams.prototype, "travelDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=travelers" }),
        __metadata("design:type", String)
    ], DeepLinksQueryParams.prototype, "travelers", void 0);
    return DeepLinksQueryParams;
}(SpeakeasyBase));
export { DeepLinksQueryParams };
var DeepLinksHeaders = /** @class */ (function (_super) {
    __extends(DeepLinksHeaders, _super);
    function DeepLinksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], DeepLinksHeaders.prototype, "accept", void 0);
    return DeepLinksHeaders;
}(SpeakeasyBase));
export { DeepLinksHeaders };
var DeepLinksSecurity = /** @class */ (function (_super) {
    __extends(DeepLinksSecurity, _super);
    function DeepLinksSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], DeepLinksSecurity.prototype, "auth", void 0);
    return DeepLinksSecurity;
}(SpeakeasyBase));
export { DeepLinksSecurity };
var DeepLinksRequest = /** @class */ (function (_super) {
    __extends(DeepLinksRequest, _super);
    function DeepLinksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeepLinksQueryParams)
    ], DeepLinksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeepLinksHeaders)
    ], DeepLinksRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeepLinksSecurity)
    ], DeepLinksRequest.prototype, "security", void 0);
    return DeepLinksRequest;
}(SpeakeasyBase));
export { DeepLinksRequest };
var DeepLinksResponse = /** @class */ (function (_super) {
    __extends(DeepLinksResponse, _super);
    function DeepLinksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeepLinksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeepLinksResponse.prototype, "deepLinks200ApplicationJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeepLinksResponse.prototype, "statusCode", void 0);
    return DeepLinksResponse;
}(SpeakeasyBase));
export { DeepLinksResponse };
