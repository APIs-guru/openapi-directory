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
var GetCmsV3DomainsDomainIdGetByIdPathParams = /** @class */ (function (_super) {
    __extends(GetCmsV3DomainsDomainIdGetByIdPathParams, _super);
    function GetCmsV3DomainsDomainIdGetByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=domainId" }),
        __metadata("design:type", String)
    ], GetCmsV3DomainsDomainIdGetByIdPathParams.prototype, "domainId", void 0);
    return GetCmsV3DomainsDomainIdGetByIdPathParams;
}(SpeakeasyBase));
export { GetCmsV3DomainsDomainIdGetByIdPathParams };
var GetCmsV3DomainsDomainIdGetByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetCmsV3DomainsDomainIdGetByIdQueryParams, _super);
    function GetCmsV3DomainsDomainIdGetByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=archived" }),
        __metadata("design:type", Boolean)
    ], GetCmsV3DomainsDomainIdGetByIdQueryParams.prototype, "archived", void 0);
    return GetCmsV3DomainsDomainIdGetByIdQueryParams;
}(SpeakeasyBase));
export { GetCmsV3DomainsDomainIdGetByIdQueryParams };
var GetCmsV3DomainsDomainIdGetByIdSecurity = /** @class */ (function (_super) {
    __extends(GetCmsV3DomainsDomainIdGetByIdSecurity, _super);
    function GetCmsV3DomainsDomainIdGetByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], GetCmsV3DomainsDomainIdGetByIdSecurity.prototype, "hapikey", void 0);
    return GetCmsV3DomainsDomainIdGetByIdSecurity;
}(SpeakeasyBase));
export { GetCmsV3DomainsDomainIdGetByIdSecurity };
var GetCmsV3DomainsDomainIdGetByIdRequest = /** @class */ (function (_super) {
    __extends(GetCmsV3DomainsDomainIdGetByIdRequest, _super);
    function GetCmsV3DomainsDomainIdGetByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCmsV3DomainsDomainIdGetByIdPathParams)
    ], GetCmsV3DomainsDomainIdGetByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCmsV3DomainsDomainIdGetByIdQueryParams)
    ], GetCmsV3DomainsDomainIdGetByIdRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCmsV3DomainsDomainIdGetByIdSecurity)
    ], GetCmsV3DomainsDomainIdGetByIdRequest.prototype, "security", void 0);
    return GetCmsV3DomainsDomainIdGetByIdRequest;
}(SpeakeasyBase));
export { GetCmsV3DomainsDomainIdGetByIdRequest };
var GetCmsV3DomainsDomainIdGetByIdResponse = /** @class */ (function (_super) {
    __extends(GetCmsV3DomainsDomainIdGetByIdResponse, _super);
    function GetCmsV3DomainsDomainIdGetByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetCmsV3DomainsDomainIdGetByIdResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCmsV3DomainsDomainIdGetByIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Domain)
    ], GetCmsV3DomainsDomainIdGetByIdResponse.prototype, "domain", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCmsV3DomainsDomainIdGetByIdResponse.prototype, "statusCode", void 0);
    return GetCmsV3DomainsDomainIdGetByIdResponse;
}(SpeakeasyBase));
export { GetCmsV3DomainsDomainIdGetByIdResponse };
