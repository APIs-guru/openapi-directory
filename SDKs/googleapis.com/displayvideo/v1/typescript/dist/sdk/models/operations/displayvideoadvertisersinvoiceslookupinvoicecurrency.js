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
var DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyPathParams, _super);
    function DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyPathParams.prototype, "advertiserId", void 0);
    return DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyPathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyPathParams };
var DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyQueryParams, _super);
    function DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=invoiceMonth" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyQueryParams.prototype, "invoiceMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyQueryParams };
var DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption1 = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption1, _super);
    function DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption1.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption1;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption1 };
var DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption2 = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption2, _super);
    function DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption2.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption2;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption2 };
var DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurity, _super);
    function DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption1)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption2)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurity.prototype, "option2", void 0);
    return DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurity };
var DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest, _super);
    function DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyPathParams)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyQueryParams)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurity)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest };
var DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse, _super);
    function DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LookupInvoiceCurrencyResponse)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse.prototype, "lookupInvoiceCurrencyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse };
