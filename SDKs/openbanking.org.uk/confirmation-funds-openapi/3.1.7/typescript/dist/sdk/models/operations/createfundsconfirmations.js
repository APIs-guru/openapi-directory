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
var CreateFundsConfirmationsHeaders = /** @class */ (function (_super) {
    __extends(CreateFundsConfirmationsHeaders, _super);
    function CreateFundsConfirmationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], CreateFundsConfirmationsHeaders.prototype, "authorization", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" }),
        __metadata("design:type", String)
    ], CreateFundsConfirmationsHeaders.prototype, "xCustomerUserAgent", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" }),
        __metadata("design:type", String)
    ], CreateFundsConfirmationsHeaders.prototype, "xFapiAuthDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" }),
        __metadata("design:type", String)
    ], CreateFundsConfirmationsHeaders.prototype, "xFapiCustomerIpAddress", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" }),
        __metadata("design:type", String)
    ], CreateFundsConfirmationsHeaders.prototype, "xFapiInteractionId", void 0);
    return CreateFundsConfirmationsHeaders;
}(SpeakeasyBase));
export { CreateFundsConfirmationsHeaders };
var CreateFundsConfirmationsSecurity = /** @class */ (function (_super) {
    __extends(CreateFundsConfirmationsSecurity, _super);
    function CreateFundsConfirmationsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePsuoAuth2Security)
    ], CreateFundsConfirmationsSecurity.prototype, "psuoAuth2Security", void 0);
    return CreateFundsConfirmationsSecurity;
}(SpeakeasyBase));
export { CreateFundsConfirmationsSecurity };
var CreateFundsConfirmationsRequest = /** @class */ (function (_super) {
    __extends(CreateFundsConfirmationsRequest, _super);
    function CreateFundsConfirmationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateFundsConfirmationsHeaders)
    ], CreateFundsConfirmationsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObFundsConfirmation1)
    ], CreateFundsConfirmationsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateFundsConfirmationsSecurity)
    ], CreateFundsConfirmationsRequest.prototype, "security", void 0);
    return CreateFundsConfirmationsRequest;
}(SpeakeasyBase));
export { CreateFundsConfirmationsRequest };
var CreateFundsConfirmationsResponse = /** @class */ (function (_super) {
    __extends(CreateFundsConfirmationsResponse, _super);
    function CreateFundsConfirmationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateFundsConfirmationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], CreateFundsConfirmationsResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ObErrorResponse1)
    ], CreateFundsConfirmationsResponse.prototype, "obErrorResponse1", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ObFundsConfirmationResponse1)
    ], CreateFundsConfirmationsResponse.prototype, "obFundsConfirmationResponse1", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateFundsConfirmationsResponse.prototype, "statusCode", void 0);
    return CreateFundsConfirmationsResponse;
}(SpeakeasyBase));
export { CreateFundsConfirmationsResponse };
