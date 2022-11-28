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
var CreateDomesticPaymentsHeaders = /** @class */ (function (_super) {
    __extends(CreateDomesticPaymentsHeaders, _super);
    function CreateDomesticPaymentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], CreateDomesticPaymentsHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], CreateDomesticPaymentsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], CreateDomesticPaymentsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], CreateDomesticPaymentsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], CreateDomesticPaymentsHeaders.prototype, "xFapiInteractionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-idempotency-key" }),
        __metadata("design:type", String)
    ], CreateDomesticPaymentsHeaders.prototype, "xIdempotencyKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-jws-signature" }),
        __metadata("design:type", String)
    ], CreateDomesticPaymentsHeaders.prototype, "xJwsSignature", void 0);
    return CreateDomesticPaymentsHeaders;
}(SpeakeasyBase));
export { CreateDomesticPaymentsHeaders };
var CreateDomesticPaymentsRequests = /** @class */ (function (_super) {
    __extends(CreateDomesticPaymentsRequests, _super);
    function CreateDomesticPaymentsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/jose+jwe" }),
        __metadata("design:type", Uint8Array)
    ], CreateDomesticPaymentsRequests.prototype, "applicationJosePlusJwe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObWriteDomestic2)
    ], CreateDomesticPaymentsRequests.prototype, "obWriteDomestic2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObWriteDomestic2)
    ], CreateDomesticPaymentsRequests.prototype, "obWriteDomestic3", void 0);
    return CreateDomesticPaymentsRequests;
}(SpeakeasyBase));
export { CreateDomesticPaymentsRequests };
var CreateDomesticPaymentsSecurity = /** @class */ (function (_super) {
    __extends(CreateDomesticPaymentsSecurity, _super);
    function CreateDomesticPaymentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePsuoAuth2Security)
    ], CreateDomesticPaymentsSecurity.prototype, "psuoAuth2Security", void 0);
    return CreateDomesticPaymentsSecurity;
}(SpeakeasyBase));
export { CreateDomesticPaymentsSecurity };
var CreateDomesticPaymentsRequest = /** @class */ (function (_super) {
    __extends(CreateDomesticPaymentsRequest, _super);
    function CreateDomesticPaymentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomesticPaymentsHeaders)
    ], CreateDomesticPaymentsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomesticPaymentsRequests)
    ], CreateDomesticPaymentsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomesticPaymentsSecurity)
    ], CreateDomesticPaymentsRequest.prototype, "security", void 0);
    return CreateDomesticPaymentsRequest;
}(SpeakeasyBase));
export { CreateDomesticPaymentsRequest };
var CreateDomesticPaymentsResponse = /** @class */ (function (_super) {
    __extends(CreateDomesticPaymentsResponse, _super);
    function CreateDomesticPaymentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CreateDomesticPaymentsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDomesticPaymentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateDomesticPaymentsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], CreateDomesticPaymentsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWriteDomesticResponse5)
    ], CreateDomesticPaymentsResponse.prototype, "obWriteDomesticResponse5", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDomesticPaymentsResponse.prototype, "statusCode", void 0);
    return CreateDomesticPaymentsResponse;
}(SpeakeasyBase));
export { CreateDomesticPaymentsResponse };
