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
var CreateInternationalScheduledPaymentsHeaders = /** @class */ (function (_super) {
    __extends(CreateInternationalScheduledPaymentsHeaders, _super);
    function CreateInternationalScheduledPaymentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], CreateInternationalScheduledPaymentsHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], CreateInternationalScheduledPaymentsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], CreateInternationalScheduledPaymentsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], CreateInternationalScheduledPaymentsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], CreateInternationalScheduledPaymentsHeaders.prototype, "xFapiInteractionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-idempotency-key" }),
        __metadata("design:type", String)
    ], CreateInternationalScheduledPaymentsHeaders.prototype, "xIdempotencyKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-jws-signature" }),
        __metadata("design:type", String)
    ], CreateInternationalScheduledPaymentsHeaders.prototype, "xJwsSignature", void 0);
    return CreateInternationalScheduledPaymentsHeaders;
}(SpeakeasyBase));
export { CreateInternationalScheduledPaymentsHeaders };
var CreateInternationalScheduledPaymentsRequests = /** @class */ (function (_super) {
    __extends(CreateInternationalScheduledPaymentsRequests, _super);
    function CreateInternationalScheduledPaymentsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/jose+jwe" }),
        __metadata("design:type", Uint8Array)
    ], CreateInternationalScheduledPaymentsRequests.prototype, "applicationJosePlusJwe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObWriteInternationalScheduled3)
    ], CreateInternationalScheduledPaymentsRequests.prototype, "obWriteInternationalScheduled3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObWriteInternationalScheduled3)
    ], CreateInternationalScheduledPaymentsRequests.prototype, "obWriteInternationalScheduled4", void 0);
    return CreateInternationalScheduledPaymentsRequests;
}(SpeakeasyBase));
export { CreateInternationalScheduledPaymentsRequests };
var CreateInternationalScheduledPaymentsSecurity = /** @class */ (function (_super) {
    __extends(CreateInternationalScheduledPaymentsSecurity, _super);
    function CreateInternationalScheduledPaymentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePsuoAuth2Security)
    ], CreateInternationalScheduledPaymentsSecurity.prototype, "psuoAuth2Security", void 0);
    return CreateInternationalScheduledPaymentsSecurity;
}(SpeakeasyBase));
export { CreateInternationalScheduledPaymentsSecurity };
var CreateInternationalScheduledPaymentsRequest = /** @class */ (function (_super) {
    __extends(CreateInternationalScheduledPaymentsRequest, _super);
    function CreateInternationalScheduledPaymentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateInternationalScheduledPaymentsHeaders)
    ], CreateInternationalScheduledPaymentsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateInternationalScheduledPaymentsRequests)
    ], CreateInternationalScheduledPaymentsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateInternationalScheduledPaymentsSecurity)
    ], CreateInternationalScheduledPaymentsRequest.prototype, "security", void 0);
    return CreateInternationalScheduledPaymentsRequest;
}(SpeakeasyBase));
export { CreateInternationalScheduledPaymentsRequest };
var CreateInternationalScheduledPaymentsResponse = /** @class */ (function (_super) {
    __extends(CreateInternationalScheduledPaymentsResponse, _super);
    function CreateInternationalScheduledPaymentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CreateInternationalScheduledPaymentsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateInternationalScheduledPaymentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateInternationalScheduledPaymentsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], CreateInternationalScheduledPaymentsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWriteInternationalScheduledResponse6)
    ], CreateInternationalScheduledPaymentsResponse.prototype, "obWriteInternationalScheduledResponse6", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateInternationalScheduledPaymentsResponse.prototype, "statusCode", void 0);
    return CreateInternationalScheduledPaymentsResponse;
}(SpeakeasyBase));
export { CreateInternationalScheduledPaymentsResponse };
