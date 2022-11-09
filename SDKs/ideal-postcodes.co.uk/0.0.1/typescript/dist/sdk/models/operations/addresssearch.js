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
var AddressSearchQueryParams = /** @class */ (function (_super) {
    __extends(AddressSearchQueryParams, _super);
    function AddressSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], AddressSearchQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=licensee" }),
        __metadata("design:type", String)
    ], AddressSearchQueryParams.prototype, "licensee", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], AddressSearchQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], AddressSearchQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=postcode_outward" }),
        __metadata("design:type", String)
    ], AddressSearchQueryParams.prototype, "postcodeOutward", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], AddressSearchQueryParams.prototype, "query", void 0);
    return AddressSearchQueryParams;
}(SpeakeasyBase));
export { AddressSearchQueryParams };
var AddressSearchSecurity = /** @class */ (function (_super) {
    __extends(AddressSearchSecurity, _super);
    function AddressSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], AddressSearchSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeUserToken)
    ], AddressSearchSecurity.prototype, "userToken", void 0);
    return AddressSearchSecurity;
}(SpeakeasyBase));
export { AddressSearchSecurity };
var AddressSearchRequest = /** @class */ (function (_super) {
    __extends(AddressSearchRequest, _super);
    function AddressSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AddressSearchQueryParams)
    ], AddressSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AddressSearchSecurity)
    ], AddressSearchRequest.prototype, "security", void 0);
    return AddressSearchRequest;
}(SpeakeasyBase));
export { AddressSearchRequest };
var AddressSearchResponse = /** @class */ (function (_super) {
    __extends(AddressSearchResponse, _super);
    function AddressSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AddressSearchResponseSchema)
    ], AddressSearchResponse.prototype, "addressSearchResponseSchema", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AddressSearchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorResponseSchema)
    ], AddressSearchResponse.prototype, "errorResponseSchema", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AddressSearchResponse.prototype, "statusCode", void 0);
    return AddressSearchResponse;
}(SpeakeasyBase));
export { AddressSearchResponse };
