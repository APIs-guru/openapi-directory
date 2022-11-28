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
var CheckAvailabilityOfFundsHeaders = /** @class */ (function (_super) {
    __extends(CheckAvailabilityOfFundsHeaders, _super);
    function CheckAvailabilityOfFundsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], CheckAvailabilityOfFundsHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Digest" }),
        __metadata("design:type", String)
    ], CheckAvailabilityOfFundsHeaders.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Signature" }),
        __metadata("design:type", String)
    ], CheckAvailabilityOfFundsHeaders.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" }),
        __metadata("design:type", String)
    ], CheckAvailabilityOfFundsHeaders.prototype, "tppSignatureCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" }),
        __metadata("design:type", String)
    ], CheckAvailabilityOfFundsHeaders.prototype, "xRequestId", void 0);
    return CheckAvailabilityOfFundsHeaders;
}(SpeakeasyBase));
export { CheckAvailabilityOfFundsHeaders };
var CheckAvailabilityOfFundsSecurity = /** @class */ (function (_super) {
    __extends(CheckAvailabilityOfFundsSecurity, _super);
    function CheckAvailabilityOfFundsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuthOAuth)
    ], CheckAvailabilityOfFundsSecurity.prototype, "bearerAuthOAuth", void 0);
    return CheckAvailabilityOfFundsSecurity;
}(SpeakeasyBase));
export { CheckAvailabilityOfFundsSecurity };
// CheckAvailabilityOfFunds200ApplicationJson
/**
 * Equals "true" if sufficient funds are available at the time of the request,
 * "false" otherwise.
 *
**/
var CheckAvailabilityOfFunds200ApplicationJson = /** @class */ (function (_super) {
    __extends(CheckAvailabilityOfFunds200ApplicationJson, _super);
    function CheckAvailabilityOfFunds200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fundsAvailable" }),
        __metadata("design:type", Boolean)
    ], CheckAvailabilityOfFunds200ApplicationJson.prototype, "fundsAvailable", void 0);
    return CheckAvailabilityOfFunds200ApplicationJson;
}(SpeakeasyBase));
export { CheckAvailabilityOfFunds200ApplicationJson };
var CheckAvailabilityOfFundsRequest = /** @class */ (function (_super) {
    __extends(CheckAvailabilityOfFundsRequest, _super);
    function CheckAvailabilityOfFundsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CheckAvailabilityOfFundsHeaders)
    ], CheckAvailabilityOfFundsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ConfirmationOfFunds)
    ], CheckAvailabilityOfFundsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CheckAvailabilityOfFundsSecurity)
    ], CheckAvailabilityOfFundsRequest.prototype, "security", void 0);
    return CheckAvailabilityOfFundsRequest;
}(SpeakeasyBase));
export { CheckAvailabilityOfFundsRequest };
var CheckAvailabilityOfFundsResponse = /** @class */ (function (_super) {
    __extends(CheckAvailabilityOfFundsResponse, _super);
    function CheckAvailabilityOfFundsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CheckAvailabilityOfFundsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400Ais)
    ], CheckAvailabilityOfFundsResponse.prototype, "error400Ais", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error400NgAis)
    ], CheckAvailabilityOfFundsResponse.prototype, "error400NgAis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401NgPiis)
    ], CheckAvailabilityOfFundsResponse.prototype, "error401NgPiis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error401Piis)
    ], CheckAvailabilityOfFundsResponse.prototype, "error401Piis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403NgPiis)
    ], CheckAvailabilityOfFundsResponse.prototype, "error403NgPiis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error403Piis)
    ], CheckAvailabilityOfFundsResponse.prototype, "error403Piis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404NgPiis)
    ], CheckAvailabilityOfFundsResponse.prototype, "error404NgPiis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error404Piis)
    ], CheckAvailabilityOfFundsResponse.prototype, "error404Piis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405NgPiis)
    ], CheckAvailabilityOfFundsResponse.prototype, "error405NgPiis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error405Piis)
    ], CheckAvailabilityOfFundsResponse.prototype, "error405Piis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409NgPiis)
    ], CheckAvailabilityOfFundsResponse.prototype, "error409NgPiis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error409Piis)
    ], CheckAvailabilityOfFundsResponse.prototype, "error409Piis", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CheckAvailabilityOfFundsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CheckAvailabilityOfFundsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CheckAvailabilityOfFunds200ApplicationJson)
    ], CheckAvailabilityOfFundsResponse.prototype, "checkAvailabilityOfFunds200ApplicationJsonObject", void 0);
    return CheckAvailabilityOfFundsResponse;
}(SpeakeasyBase));
export { CheckAvailabilityOfFundsResponse };
