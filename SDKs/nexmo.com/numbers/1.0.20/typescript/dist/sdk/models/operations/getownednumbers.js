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
var GetOwnedNumbersQueryParams = /** @class */ (function (_super) {
    __extends(GetOwnedNumbersQueryParams, _super);
    function GetOwnedNumbersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=application_id" }),
        __metadata("design:type", String)
    ], GetOwnedNumbersQueryParams.prototype, "applicationId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], GetOwnedNumbersQueryParams.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=has_application" }),
        __metadata("design:type", Boolean)
    ], GetOwnedNumbersQueryParams.prototype, "hasApplication", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=index" }),
        __metadata("design:type", Number)
    ], GetOwnedNumbersQueryParams.prototype, "index", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pattern" }),
        __metadata("design:type", String)
    ], GetOwnedNumbersQueryParams.prototype, "pattern", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search_pattern" }),
        __metadata("design:type", Number)
    ], GetOwnedNumbersQueryParams.prototype, "searchPattern", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", Number)
    ], GetOwnedNumbersQueryParams.prototype, "size", void 0);
    return GetOwnedNumbersQueryParams;
}(SpeakeasyBase));
export { GetOwnedNumbersQueryParams };
var GetOwnedNumbersRequest = /** @class */ (function (_super) {
    __extends(GetOwnedNumbersRequest, _super);
    function GetOwnedNumbersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetOwnedNumbersQueryParams)
    ], GetOwnedNumbersRequest.prototype, "queryParams", void 0);
    return GetOwnedNumbersRequest;
}(SpeakeasyBase));
export { GetOwnedNumbersRequest };
var GetOwnedNumbersResponse = /** @class */ (function (_super) {
    __extends(GetOwnedNumbersResponse, _super);
    function GetOwnedNumbersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetOwnedNumbersResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetOwnedNumbersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetOwnedNumbersResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AccountUnauthorized)
    ], GetOwnedNumbersResponse.prototype, "accountUnauthorized", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.InboundNumbers)
    ], GetOwnedNumbersResponse.prototype, "inboundNumbers", void 0);
    return GetOwnedNumbersResponse;
}(SpeakeasyBase));
export { GetOwnedNumbersResponse };
