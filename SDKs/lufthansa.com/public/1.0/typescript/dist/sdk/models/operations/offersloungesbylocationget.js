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
var OffersLoungesByLocationGetPathParams = /** @class */ (function (_super) {
    __extends(OffersLoungesByLocationGetPathParams, _super);
    function OffersLoungesByLocationGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], OffersLoungesByLocationGetPathParams.prototype, "location", void 0);
    return OffersLoungesByLocationGetPathParams;
}(SpeakeasyBase));
export { OffersLoungesByLocationGetPathParams };
var OffersLoungesByLocationGetQueryParams = /** @class */ (function (_super) {
    __extends(OffersLoungesByLocationGetQueryParams, _super);
    function OffersLoungesByLocationGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=cabinClass" }),
        __metadata("design:type", String)
    ], OffersLoungesByLocationGetQueryParams.prototype, "cabinClass", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], OffersLoungesByLocationGetQueryParams.prototype, "lang", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=tierCode" }),
        __metadata("design:type", String)
    ], OffersLoungesByLocationGetQueryParams.prototype, "tierCode", void 0);
    return OffersLoungesByLocationGetQueryParams;
}(SpeakeasyBase));
export { OffersLoungesByLocationGetQueryParams };
var OffersLoungesByLocationGetHeaders = /** @class */ (function (_super) {
    __extends(OffersLoungesByLocationGetHeaders, _super);
    function OffersLoungesByLocationGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], OffersLoungesByLocationGetHeaders.prototype, "accept", void 0);
    return OffersLoungesByLocationGetHeaders;
}(SpeakeasyBase));
export { OffersLoungesByLocationGetHeaders };
var OffersLoungesByLocationGetSecurity = /** @class */ (function (_super) {
    __extends(OffersLoungesByLocationGetSecurity, _super);
    function OffersLoungesByLocationGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], OffersLoungesByLocationGetSecurity.prototype, "auth", void 0);
    return OffersLoungesByLocationGetSecurity;
}(SpeakeasyBase));
export { OffersLoungesByLocationGetSecurity };
var OffersLoungesByLocationGetRequest = /** @class */ (function (_super) {
    __extends(OffersLoungesByLocationGetRequest, _super);
    function OffersLoungesByLocationGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", OffersLoungesByLocationGetPathParams)
    ], OffersLoungesByLocationGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OffersLoungesByLocationGetQueryParams)
    ], OffersLoungesByLocationGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OffersLoungesByLocationGetHeaders)
    ], OffersLoungesByLocationGetRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OffersLoungesByLocationGetSecurity)
    ], OffersLoungesByLocationGetRequest.prototype, "security", void 0);
    return OffersLoungesByLocationGetRequest;
}(SpeakeasyBase));
export { OffersLoungesByLocationGetRequest };
var OffersLoungesByLocationGetResponse = /** @class */ (function (_super) {
    __extends(OffersLoungesByLocationGetResponse, _super);
    function OffersLoungesByLocationGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OffersLoungesByLocationGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], OffersLoungesByLocationGetResponse.prototype, "offersLoungesByLocationGet200ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], OffersLoungesByLocationGetResponse.prototype, "statusCode", void 0);
    return OffersLoungesByLocationGetResponse;
}(SpeakeasyBase));
export { OffersLoungesByLocationGetResponse };
