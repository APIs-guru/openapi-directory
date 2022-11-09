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
var GetProtectionQueryParams = /** @class */ (function (_super) {
    __extends(GetProtectionQueryParams, _super);
    function GetProtectionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", Number)
    ], GetProtectionQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Number)
    ], GetProtectionQueryParams.prototype, "from", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=lat" }),
        __metadata("design:type", Number)
    ], GetProtectionQueryParams.prototype, "lat", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=lng" }),
        __metadata("design:type", Number)
    ], GetProtectionQueryParams.prototype, "lng", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ozone" }),
        __metadata("design:type", Number)
    ], GetProtectionQueryParams.prototype, "ozone", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Number)
    ], GetProtectionQueryParams.prototype, "to", void 0);
    return GetProtectionQueryParams;
}(SpeakeasyBase));
export { GetProtectionQueryParams };
var GetProtectionHeaders = /** @class */ (function (_super) {
    __extends(GetProtectionHeaders, _super);
    function GetProtectionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-access-token" }),
        __metadata("design:type", String)
    ], GetProtectionHeaders.prototype, "xAccessToken", void 0);
    return GetProtectionHeaders;
}(SpeakeasyBase));
export { GetProtectionHeaders };
var GetProtectionRequest = /** @class */ (function (_super) {
    __extends(GetProtectionRequest, _super);
    function GetProtectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetProtectionQueryParams)
    ], GetProtectionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetProtectionHeaders)
    ], GetProtectionRequest.prototype, "headers", void 0);
    return GetProtectionRequest;
}(SpeakeasyBase));
export { GetProtectionRequest };
var GetProtectionResponse = /** @class */ (function (_super) {
    __extends(GetProtectionResponse, _super);
    function GetProtectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetProtectionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetProtectionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ProtectionResult)
    ], GetProtectionResponse.prototype, "protectionResult", void 0);
    return GetProtectionResponse;
}(SpeakeasyBase));
export { GetProtectionResponse };
