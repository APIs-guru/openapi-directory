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
var CreateDomesticStandingOrdersHeaders = /** @class */ (function (_super) {
    __extends(CreateDomesticStandingOrdersHeaders, _super);
    function CreateDomesticStandingOrdersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], CreateDomesticStandingOrdersHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], CreateDomesticStandingOrdersHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], CreateDomesticStandingOrdersHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], CreateDomesticStandingOrdersHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], CreateDomesticStandingOrdersHeaders.prototype, "xFapiInteractionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-idempotency-key" }),
        __metadata("design:type", String)
    ], CreateDomesticStandingOrdersHeaders.prototype, "xIdempotencyKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-jws-signature" }),
        __metadata("design:type", String)
    ], CreateDomesticStandingOrdersHeaders.prototype, "xJwsSignature", void 0);
    return CreateDomesticStandingOrdersHeaders;
}(SpeakeasyBase));
export { CreateDomesticStandingOrdersHeaders };
var CreateDomesticStandingOrdersRequests = /** @class */ (function (_super) {
    __extends(CreateDomesticStandingOrdersRequests, _super);
    function CreateDomesticStandingOrdersRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/jose+jwe" }),
        __metadata("design:type", Uint8Array)
    ], CreateDomesticStandingOrdersRequests.prototype, "applicationJosePlusJwe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObWriteDomesticStandingOrder3)
    ], CreateDomesticStandingOrdersRequests.prototype, "obWriteDomesticStandingOrder3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObWriteDomesticStandingOrder3)
    ], CreateDomesticStandingOrdersRequests.prototype, "obWriteDomesticStandingOrder4", void 0);
    return CreateDomesticStandingOrdersRequests;
}(SpeakeasyBase));
export { CreateDomesticStandingOrdersRequests };
var CreateDomesticStandingOrdersSecurity = /** @class */ (function (_super) {
    __extends(CreateDomesticStandingOrdersSecurity, _super);
    function CreateDomesticStandingOrdersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePsuoAuth2Security)
    ], CreateDomesticStandingOrdersSecurity.prototype, "psuoAuth2Security", void 0);
    return CreateDomesticStandingOrdersSecurity;
}(SpeakeasyBase));
export { CreateDomesticStandingOrdersSecurity };
var CreateDomesticStandingOrdersRequest = /** @class */ (function (_super) {
    __extends(CreateDomesticStandingOrdersRequest, _super);
    function CreateDomesticStandingOrdersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomesticStandingOrdersHeaders)
    ], CreateDomesticStandingOrdersRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomesticStandingOrdersRequests)
    ], CreateDomesticStandingOrdersRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomesticStandingOrdersSecurity)
    ], CreateDomesticStandingOrdersRequest.prototype, "security", void 0);
    return CreateDomesticStandingOrdersRequest;
}(SpeakeasyBase));
export { CreateDomesticStandingOrdersRequest };
var CreateDomesticStandingOrdersResponse = /** @class */ (function (_super) {
    __extends(CreateDomesticStandingOrdersResponse, _super);
    function CreateDomesticStandingOrdersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CreateDomesticStandingOrdersResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDomesticStandingOrdersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateDomesticStandingOrdersResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], CreateDomesticStandingOrdersResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWriteDomesticStandingOrderResponse6)
    ], CreateDomesticStandingOrdersResponse.prototype, "obWriteDomesticStandingOrderResponse6", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDomesticStandingOrdersResponse.prototype, "statusCode", void 0);
    return CreateDomesticStandingOrdersResponse;
}(SpeakeasyBase));
export { CreateDomesticStandingOrdersResponse };
