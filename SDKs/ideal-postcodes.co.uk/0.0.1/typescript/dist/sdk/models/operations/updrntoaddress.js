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
var UpdrnToAddressPathParams = /** @class */ (function (_super) {
    __extends(UpdrnToAddressPathParams, _super);
    function UpdrnToAddressPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=udprn" }),
        __metadata("design:type", String)
    ], UpdrnToAddressPathParams.prototype, "udprn", void 0);
    return UpdrnToAddressPathParams;
}(SpeakeasyBase));
export { UpdrnToAddressPathParams };
var UpdrnToAddressQueryParams = /** @class */ (function (_super) {
    __extends(UpdrnToAddressQueryParams, _super);
    function UpdrnToAddressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], UpdrnToAddressQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=licensee" }),
        __metadata("design:type", String)
    ], UpdrnToAddressQueryParams.prototype, "licensee", void 0);
    return UpdrnToAddressQueryParams;
}(SpeakeasyBase));
export { UpdrnToAddressQueryParams };
var UpdrnToAddressSecurity = /** @class */ (function (_super) {
    __extends(UpdrnToAddressSecurity, _super);
    function UpdrnToAddressSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], UpdrnToAddressSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeUserToken)
    ], UpdrnToAddressSecurity.prototype, "userToken", void 0);
    return UpdrnToAddressSecurity;
}(SpeakeasyBase));
export { UpdrnToAddressSecurity };
var UpdrnToAddressRequest = /** @class */ (function (_super) {
    __extends(UpdrnToAddressRequest, _super);
    function UpdrnToAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdrnToAddressPathParams)
    ], UpdrnToAddressRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdrnToAddressQueryParams)
    ], UpdrnToAddressRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdrnToAddressSecurity)
    ], UpdrnToAddressRequest.prototype, "security", void 0);
    return UpdrnToAddressRequest;
}(SpeakeasyBase));
export { UpdrnToAddressRequest };
var UpdrnToAddressResponse = /** @class */ (function (_super) {
    __extends(UpdrnToAddressResponse, _super);
    function UpdrnToAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdrnToAddressResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorResponseSchema)
    ], UpdrnToAddressResponse.prototype, "errorResponseSchema", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdrnToAddressResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UdprnToAddressResponseSchema)
    ], UpdrnToAddressResponse.prototype, "udprnToAddressResponseSchema", void 0);
    return UpdrnToAddressResponse;
}(SpeakeasyBase));
export { UpdrnToAddressResponse };
