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
var GetDomesticStandingOrdersDomesticStandingOrderIdPathParams = /** @class */ (function (_super) {
    __extends(GetDomesticStandingOrdersDomesticStandingOrderIdPathParams, _super);
    function GetDomesticStandingOrdersDomesticStandingOrderIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomesticStandingOrderId" }),
        __metadata("design:type", String)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdPathParams.prototype, "domesticStandingOrderId", void 0);
    return GetDomesticStandingOrdersDomesticStandingOrderIdPathParams;
}(SpeakeasyBase));
export { GetDomesticStandingOrdersDomesticStandingOrderIdPathParams };
var GetDomesticStandingOrdersDomesticStandingOrderIdHeaders = /** @class */ (function (_super) {
    __extends(GetDomesticStandingOrdersDomesticStandingOrderIdHeaders, _super);
    function GetDomesticStandingOrdersDomesticStandingOrderIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdHeaders.prototype, "xFapiInteractionId", void 0);
    return GetDomesticStandingOrdersDomesticStandingOrderIdHeaders;
}(SpeakeasyBase));
export { GetDomesticStandingOrdersDomesticStandingOrderIdHeaders };
var GetDomesticStandingOrdersDomesticStandingOrderIdSecurity = /** @class */ (function (_super) {
    __extends(GetDomesticStandingOrdersDomesticStandingOrderIdSecurity, _super);
    function GetDomesticStandingOrdersDomesticStandingOrderIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeTppoAuth2Security)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdSecurity.prototype, "tppoAuth2Security", void 0);
    return GetDomesticStandingOrdersDomesticStandingOrderIdSecurity;
}(SpeakeasyBase));
export { GetDomesticStandingOrdersDomesticStandingOrderIdSecurity };
var GetDomesticStandingOrdersDomesticStandingOrderIdRequest = /** @class */ (function (_super) {
    __extends(GetDomesticStandingOrdersDomesticStandingOrderIdRequest, _super);
    function GetDomesticStandingOrdersDomesticStandingOrderIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomesticStandingOrdersDomesticStandingOrderIdPathParams)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomesticStandingOrdersDomesticStandingOrderIdHeaders)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomesticStandingOrdersDomesticStandingOrderIdSecurity)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdRequest.prototype, "security", void 0);
    return GetDomesticStandingOrdersDomesticStandingOrderIdRequest;
}(SpeakeasyBase));
export { GetDomesticStandingOrdersDomesticStandingOrderIdRequest };
var GetDomesticStandingOrdersDomesticStandingOrderIdResponse = /** @class */ (function (_super) {
    __extends(GetDomesticStandingOrdersDomesticStandingOrderIdResponse, _super);
    function GetDomesticStandingOrdersDomesticStandingOrderIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWriteDomesticStandingOrderResponse6)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdResponse.prototype, "obWriteDomesticStandingOrderResponse6", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDomesticStandingOrdersDomesticStandingOrderIdResponse.prototype, "statusCode", void 0);
    return GetDomesticStandingOrdersDomesticStandingOrderIdResponse;
}(SpeakeasyBase));
export { GetDomesticStandingOrdersDomesticStandingOrderIdResponse };
