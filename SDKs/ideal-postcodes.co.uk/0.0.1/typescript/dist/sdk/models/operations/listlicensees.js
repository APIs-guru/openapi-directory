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
var ListLicenseesPathParams = /** @class */ (function (_super) {
    __extends(ListLicenseesPathParams, _super);
    function ListLicenseesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" }),
        __metadata("design:type", String)
    ], ListLicenseesPathParams.prototype, "key", void 0);
    return ListLicenseesPathParams;
}(SpeakeasyBase));
export { ListLicenseesPathParams };
var ListLicenseesQueryParams = /** @class */ (function (_super) {
    __extends(ListLicenseesQueryParams, _super);
    function ListLicenseesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ListLicenseesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], ListLicenseesQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=starting_after" }),
        __metadata("design:type", Number)
    ], ListLicenseesQueryParams.prototype, "startingAfter", void 0);
    return ListLicenseesQueryParams;
}(SpeakeasyBase));
export { ListLicenseesQueryParams };
var ListLicenseesSecurity = /** @class */ (function (_super) {
    __extends(ListLicenseesSecurity, _super);
    function ListLicenseesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ListLicenseesSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeUserToken)
    ], ListLicenseesSecurity.prototype, "userToken", void 0);
    return ListLicenseesSecurity;
}(SpeakeasyBase));
export { ListLicenseesSecurity };
var ListLicenseesRequest = /** @class */ (function (_super) {
    __extends(ListLicenseesRequest, _super);
    function ListLicenseesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListLicenseesPathParams)
    ], ListLicenseesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListLicenseesQueryParams)
    ], ListLicenseesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListLicenseesSecurity)
    ], ListLicenseesRequest.prototype, "security", void 0);
    return ListLicenseesRequest;
}(SpeakeasyBase));
export { ListLicenseesRequest };
var ListLicenseesResponse = /** @class */ (function (_super) {
    __extends(ListLicenseesResponse, _super);
    function ListLicenseesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AddressLookupResponseSchema)
    ], ListLicenseesResponse.prototype, "addressLookupResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListLicenseesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LicenseeListResponseSchema)
    ], ListLicenseesResponse.prototype, "licenseeListResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListLicenseesResponse.prototype, "statusCode", void 0);
    return ListLicenseesResponse;
}(SpeakeasyBase));
export { ListLicenseesResponse };
