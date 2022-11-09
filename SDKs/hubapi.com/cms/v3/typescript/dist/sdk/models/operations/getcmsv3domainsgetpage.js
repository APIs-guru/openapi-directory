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
var GetCmsV3DomainsGetPageQueryParams = /** @class */ (function (_super) {
    __extends(GetCmsV3DomainsGetPageQueryParams, _super);
    function GetCmsV3DomainsGetPageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=after" }),
        __metadata("design:type", String)
    ], GetCmsV3DomainsGetPageQueryParams.prototype, "after", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=archived" }),
        __metadata("design:type", Boolean)
    ], GetCmsV3DomainsGetPageQueryParams.prototype, "archived", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=before" }),
        __metadata("design:type", String)
    ], GetCmsV3DomainsGetPageQueryParams.prototype, "before", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdAfter" }),
        __metadata("design:type", Number)
    ], GetCmsV3DomainsGetPageQueryParams.prototype, "createdAfter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdAt" }),
        __metadata("design:type", Number)
    ], GetCmsV3DomainsGetPageQueryParams.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdBefore" }),
        __metadata("design:type", Number)
    ], GetCmsV3DomainsGetPageQueryParams.prototype, "createdBefore", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetCmsV3DomainsGetPageQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=properties" }),
        __metadata("design:type", Array)
    ], GetCmsV3DomainsGetPageQueryParams.prototype, "properties", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", Array)
    ], GetCmsV3DomainsGetPageQueryParams.prototype, "sort", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updatedAfter" }),
        __metadata("design:type", Number)
    ], GetCmsV3DomainsGetPageQueryParams.prototype, "updatedAfter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updatedAt" }),
        __metadata("design:type", Number)
    ], GetCmsV3DomainsGetPageQueryParams.prototype, "updatedAt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updatedBefore" }),
        __metadata("design:type", Number)
    ], GetCmsV3DomainsGetPageQueryParams.prototype, "updatedBefore", void 0);
    return GetCmsV3DomainsGetPageQueryParams;
}(SpeakeasyBase));
export { GetCmsV3DomainsGetPageQueryParams };
var GetCmsV3DomainsGetPageSecurity = /** @class */ (function (_super) {
    __extends(GetCmsV3DomainsGetPageSecurity, _super);
    function GetCmsV3DomainsGetPageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], GetCmsV3DomainsGetPageSecurity.prototype, "hapikey", void 0);
    return GetCmsV3DomainsGetPageSecurity;
}(SpeakeasyBase));
export { GetCmsV3DomainsGetPageSecurity };
var GetCmsV3DomainsGetPageRequest = /** @class */ (function (_super) {
    __extends(GetCmsV3DomainsGetPageRequest, _super);
    function GetCmsV3DomainsGetPageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCmsV3DomainsGetPageQueryParams)
    ], GetCmsV3DomainsGetPageRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCmsV3DomainsGetPageSecurity)
    ], GetCmsV3DomainsGetPageRequest.prototype, "security", void 0);
    return GetCmsV3DomainsGetPageRequest;
}(SpeakeasyBase));
export { GetCmsV3DomainsGetPageRequest };
var GetCmsV3DomainsGetPageResponse = /** @class */ (function (_super) {
    __extends(GetCmsV3DomainsGetPageResponse, _super);
    function GetCmsV3DomainsGetPageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetCmsV3DomainsGetPageResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CollectionResponseWithTotalDomain)
    ], GetCmsV3DomainsGetPageResponse.prototype, "collectionResponseWithTotalDomain", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCmsV3DomainsGetPageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCmsV3DomainsGetPageResponse.prototype, "statusCode", void 0);
    return GetCmsV3DomainsGetPageResponse;
}(SpeakeasyBase));
export { GetCmsV3DomainsGetPageResponse };
