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
var CreateDomesticScheduledPaymentsHeaders = /** @class */ (function (_super) {
    __extends(CreateDomesticScheduledPaymentsHeaders, _super);
    function CreateDomesticScheduledPaymentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], CreateDomesticScheduledPaymentsHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], CreateDomesticScheduledPaymentsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], CreateDomesticScheduledPaymentsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], CreateDomesticScheduledPaymentsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], CreateDomesticScheduledPaymentsHeaders.prototype, "xFapiInteractionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-idempotency-key" }),
        __metadata("design:type", String)
    ], CreateDomesticScheduledPaymentsHeaders.prototype, "xIdempotencyKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-jws-signature" }),
        __metadata("design:type", String)
    ], CreateDomesticScheduledPaymentsHeaders.prototype, "xJwsSignature", void 0);
    return CreateDomesticScheduledPaymentsHeaders;
}(SpeakeasyBase));
export { CreateDomesticScheduledPaymentsHeaders };
var CreateDomesticScheduledPaymentsRequests = /** @class */ (function (_super) {
    __extends(CreateDomesticScheduledPaymentsRequests, _super);
    function CreateDomesticScheduledPaymentsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/jose+jwe" }),
        __metadata("design:type", Uint8Array)
    ], CreateDomesticScheduledPaymentsRequests.prototype, "applicationJosePlusJwe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObWriteDomesticScheduled2)
    ], CreateDomesticScheduledPaymentsRequests.prototype, "obWriteDomesticScheduled2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObWriteDomesticScheduled2)
    ], CreateDomesticScheduledPaymentsRequests.prototype, "obWriteDomesticScheduled3", void 0);
    return CreateDomesticScheduledPaymentsRequests;
}(SpeakeasyBase));
export { CreateDomesticScheduledPaymentsRequests };
var CreateDomesticScheduledPaymentsSecurity = /** @class */ (function (_super) {
    __extends(CreateDomesticScheduledPaymentsSecurity, _super);
    function CreateDomesticScheduledPaymentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePsuoAuth2Security)
    ], CreateDomesticScheduledPaymentsSecurity.prototype, "psuoAuth2Security", void 0);
    return CreateDomesticScheduledPaymentsSecurity;
}(SpeakeasyBase));
export { CreateDomesticScheduledPaymentsSecurity };
var CreateDomesticScheduledPaymentsRequest = /** @class */ (function (_super) {
    __extends(CreateDomesticScheduledPaymentsRequest, _super);
    function CreateDomesticScheduledPaymentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomesticScheduledPaymentsHeaders)
    ], CreateDomesticScheduledPaymentsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomesticScheduledPaymentsRequests)
    ], CreateDomesticScheduledPaymentsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomesticScheduledPaymentsSecurity)
    ], CreateDomesticScheduledPaymentsRequest.prototype, "security", void 0);
    return CreateDomesticScheduledPaymentsRequest;
}(SpeakeasyBase));
export { CreateDomesticScheduledPaymentsRequest };
var CreateDomesticScheduledPaymentsResponse = /** @class */ (function (_super) {
    __extends(CreateDomesticScheduledPaymentsResponse, _super);
    function CreateDomesticScheduledPaymentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CreateDomesticScheduledPaymentsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDomesticScheduledPaymentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateDomesticScheduledPaymentsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], CreateDomesticScheduledPaymentsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObWriteDomesticScheduledResponse5)
    ], CreateDomesticScheduledPaymentsResponse.prototype, "obWriteDomesticScheduledResponse5", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDomesticScheduledPaymentsResponse.prototype, "statusCode", void 0);
    return CreateDomesticScheduledPaymentsResponse;
}(SpeakeasyBase));
export { CreateDomesticScheduledPaymentsResponse };
