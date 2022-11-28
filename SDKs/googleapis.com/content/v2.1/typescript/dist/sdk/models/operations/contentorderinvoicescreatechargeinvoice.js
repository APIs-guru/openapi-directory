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
var ContentOrderinvoicesCreatechargeinvoicePathParams = /** @class */ (function (_super) {
    __extends(ContentOrderinvoicesCreatechargeinvoicePathParams, _super);
    function ContentOrderinvoicesCreatechargeinvoicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentOrderinvoicesCreatechargeinvoicePathParams.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderId" }),
        __metadata("design:type", String)
    ], ContentOrderinvoicesCreatechargeinvoicePathParams.prototype, "orderId", void 0);
    return ContentOrderinvoicesCreatechargeinvoicePathParams;
}(SpeakeasyBase));
export { ContentOrderinvoicesCreatechargeinvoicePathParams };
var ContentOrderinvoicesCreatechargeinvoiceQueryParams = /** @class */ (function (_super) {
    __extends(ContentOrderinvoicesCreatechargeinvoiceQueryParams, _super);
    function ContentOrderinvoicesCreatechargeinvoiceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentOrderinvoicesCreatechargeinvoiceQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentOrderinvoicesCreatechargeinvoiceQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentOrderinvoicesCreatechargeinvoiceQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentOrderinvoicesCreatechargeinvoiceQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentOrderinvoicesCreatechargeinvoiceQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentOrderinvoicesCreatechargeinvoiceQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentOrderinvoicesCreatechargeinvoiceQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentOrderinvoicesCreatechargeinvoiceQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentOrderinvoicesCreatechargeinvoiceQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentOrderinvoicesCreatechargeinvoiceQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentOrderinvoicesCreatechargeinvoiceQueryParams.prototype, "uploadProtocol", void 0);
    return ContentOrderinvoicesCreatechargeinvoiceQueryParams;
}(SpeakeasyBase));
export { ContentOrderinvoicesCreatechargeinvoiceQueryParams };
var ContentOrderinvoicesCreatechargeinvoiceSecurity = /** @class */ (function (_super) {
    __extends(ContentOrderinvoicesCreatechargeinvoiceSecurity, _super);
    function ContentOrderinvoicesCreatechargeinvoiceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentOrderinvoicesCreatechargeinvoiceSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentOrderinvoicesCreatechargeinvoiceSecurity.prototype, "oauth2c", void 0);
    return ContentOrderinvoicesCreatechargeinvoiceSecurity;
}(SpeakeasyBase));
export { ContentOrderinvoicesCreatechargeinvoiceSecurity };
var ContentOrderinvoicesCreatechargeinvoiceRequest = /** @class */ (function (_super) {
    __extends(ContentOrderinvoicesCreatechargeinvoiceRequest, _super);
    function ContentOrderinvoicesCreatechargeinvoiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrderinvoicesCreatechargeinvoicePathParams)
    ], ContentOrderinvoicesCreatechargeinvoiceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrderinvoicesCreatechargeinvoiceQueryParams)
    ], ContentOrderinvoicesCreatechargeinvoiceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.OrderinvoicesCreateChargeInvoiceRequest)
    ], ContentOrderinvoicesCreatechargeinvoiceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrderinvoicesCreatechargeinvoiceSecurity)
    ], ContentOrderinvoicesCreatechargeinvoiceRequest.prototype, "security", void 0);
    return ContentOrderinvoicesCreatechargeinvoiceRequest;
}(SpeakeasyBase));
export { ContentOrderinvoicesCreatechargeinvoiceRequest };
var ContentOrderinvoicesCreatechargeinvoiceResponse = /** @class */ (function (_super) {
    __extends(ContentOrderinvoicesCreatechargeinvoiceResponse, _super);
    function ContentOrderinvoicesCreatechargeinvoiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentOrderinvoicesCreatechargeinvoiceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrderinvoicesCreateChargeInvoiceResponse)
    ], ContentOrderinvoicesCreatechargeinvoiceResponse.prototype, "orderinvoicesCreateChargeInvoiceResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentOrderinvoicesCreatechargeinvoiceResponse.prototype, "statusCode", void 0);
    return ContentOrderinvoicesCreatechargeinvoiceResponse;
}(SpeakeasyBase));
export { ContentOrderinvoicesCreatechargeinvoiceResponse };
