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
var CreateInternationalStandingOrdersHeaders = /** @class */ (function (_super) {
    __extends(CreateInternationalStandingOrdersHeaders, _super);
    function CreateInternationalStandingOrdersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], CreateInternationalStandingOrdersHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], CreateInternationalStandingOrdersHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], CreateInternationalStandingOrdersHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], CreateInternationalStandingOrdersHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], CreateInternationalStandingOrdersHeaders.prototype, "xFapiInteractionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-idempotency-key" }),
        __metadata("design:type", String)
    ], CreateInternationalStandingOrdersHeaders.prototype, "xIdempotencyKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-jws-signature" }),
        __metadata("design:type", String)
    ], CreateInternationalStandingOrdersHeaders.prototype, "xJwsSignature", void 0);
    return CreateInternationalStandingOrdersHeaders;
}(SpeakeasyBase));
export { CreateInternationalStandingOrdersHeaders };
var CreateInternationalStandingOrdersRequests = /** @class */ (function (_super) {
    __extends(CreateInternationalStandingOrdersRequests, _super);
    function CreateInternationalStandingOrdersRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/jose+jwe" }),
        __metadata("design:type", Uint8Array)
    ], CreateInternationalStandingOrdersRequests.prototype, "applicationJosePlusJwe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObWriteInternationalStandingOrder4)
    ], CreateInternationalStandingOrdersRequests.prototype, "obWriteInternationalStandingOrder4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObWriteInternationalStandingOrder4)
    ], CreateInternationalStandingOrdersRequests.prototype, "obWriteInternationalStandingOrder5", void 0);
    return CreateInternationalStandingOrdersRequests;
}(SpeakeasyBase));
export { CreateInternationalStandingOrdersRequests };
var CreateInternationalStandingOrdersSecurity = /** @class */ (function (_super) {
    __extends(CreateInternationalStandingOrdersSecurity, _super);
    function CreateInternationalStandingOrdersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePsuoAuth2Security)
    ], CreateInternationalStandingOrdersSecurity.prototype, "psuoAuth2Security", void 0);
    return CreateInternationalStandingOrdersSecurity;
}(SpeakeasyBase));
export { CreateInternationalStandingOrdersSecurity };
var CreateInternationalStandingOrdersRequest = /** @class */ (function (_super) {
    __extends(CreateInternationalStandingOrdersRequest, _super);
    function CreateInternationalStandingOrdersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateInternationalStandingOrdersHeaders)
    ], CreateInternationalStandingOrdersRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateInternationalStandingOrdersRequests)
    ], CreateInternationalStandingOrdersRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateInternationalStandingOrdersSecurity)
    ], CreateInternationalStandingOrdersRequest.prototype, "security", void 0);
    return CreateInternationalStandingOrdersRequest;
}(SpeakeasyBase));
export { CreateInternationalStandingOrdersRequest };
var CreateInternationalStandingOrdersResponse = /** @class */ (function (_super) {
    __extends(CreateInternationalStandingOrdersResponse, _super);
    function CreateInternationalStandingOrdersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CreateInternationalStandingOrdersResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateInternationalStandingOrdersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateInternationalStandingOrdersResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], CreateInternationalStandingOrdersResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWriteInternationalStandingOrderResponse7)
    ], CreateInternationalStandingOrdersResponse.prototype, "obWriteInternationalStandingOrderResponse7", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateInternationalStandingOrdersResponse.prototype, "statusCode", void 0);
    return CreateInternationalStandingOrdersResponse;
}(SpeakeasyBase));
export { CreateInternationalStandingOrdersResponse };
