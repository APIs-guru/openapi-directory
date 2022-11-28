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
var ContentOrderreportsListtransactionsPathParams = /** @class */ (function (_super) {
    __extends(ContentOrderreportsListtransactionsPathParams, _super);
    function ContentOrderreportsListtransactionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=disbursementId" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListtransactionsPathParams.prototype, "disbursementId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListtransactionsPathParams.prototype, "merchantId", void 0);
    return ContentOrderreportsListtransactionsPathParams;
}(SpeakeasyBase));
export { ContentOrderreportsListtransactionsPathParams };
var ContentOrderreportsListtransactionsQueryParams = /** @class */ (function (_super) {
    __extends(ContentOrderreportsListtransactionsQueryParams, _super);
    function ContentOrderreportsListtransactionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListtransactionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListtransactionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListtransactionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListtransactionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListtransactionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListtransactionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ContentOrderreportsListtransactionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListtransactionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListtransactionsQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentOrderreportsListtransactionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListtransactionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transactionEndDate" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListtransactionsQueryParams.prototype, "transactionEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transactionStartDate" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListtransactionsQueryParams.prototype, "transactionStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListtransactionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentOrderreportsListtransactionsQueryParams.prototype, "uploadProtocol", void 0);
    return ContentOrderreportsListtransactionsQueryParams;
}(SpeakeasyBase));
export { ContentOrderreportsListtransactionsQueryParams };
var ContentOrderreportsListtransactionsSecurity = /** @class */ (function (_super) {
    __extends(ContentOrderreportsListtransactionsSecurity, _super);
    function ContentOrderreportsListtransactionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentOrderreportsListtransactionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentOrderreportsListtransactionsSecurity.prototype, "oauth2c", void 0);
    return ContentOrderreportsListtransactionsSecurity;
}(SpeakeasyBase));
export { ContentOrderreportsListtransactionsSecurity };
var ContentOrderreportsListtransactionsRequest = /** @class */ (function (_super) {
    __extends(ContentOrderreportsListtransactionsRequest, _super);
    function ContentOrderreportsListtransactionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrderreportsListtransactionsPathParams)
    ], ContentOrderreportsListtransactionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrderreportsListtransactionsQueryParams)
    ], ContentOrderreportsListtransactionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrderreportsListtransactionsSecurity)
    ], ContentOrderreportsListtransactionsRequest.prototype, "security", void 0);
    return ContentOrderreportsListtransactionsRequest;
}(SpeakeasyBase));
export { ContentOrderreportsListtransactionsRequest };
var ContentOrderreportsListtransactionsResponse = /** @class */ (function (_super) {
    __extends(ContentOrderreportsListtransactionsResponse, _super);
    function ContentOrderreportsListtransactionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentOrderreportsListtransactionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrderreportsListTransactionsResponse)
    ], ContentOrderreportsListtransactionsResponse.prototype, "orderreportsListTransactionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentOrderreportsListtransactionsResponse.prototype, "statusCode", void 0);
    return ContentOrderreportsListtransactionsResponse;
}(SpeakeasyBase));
export { ContentOrderreportsListtransactionsResponse };
