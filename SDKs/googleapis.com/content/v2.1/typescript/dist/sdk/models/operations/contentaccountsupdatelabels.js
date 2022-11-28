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
var ContentAccountsUpdatelabelsPathParams = /** @class */ (function (_super) {
    __extends(ContentAccountsUpdatelabelsPathParams, _super);
    function ContentAccountsUpdatelabelsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], ContentAccountsUpdatelabelsPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentAccountsUpdatelabelsPathParams.prototype, "merchantId", void 0);
    return ContentAccountsUpdatelabelsPathParams;
}(SpeakeasyBase));
export { ContentAccountsUpdatelabelsPathParams };
var ContentAccountsUpdatelabelsQueryParams = /** @class */ (function (_super) {
    __extends(ContentAccountsUpdatelabelsQueryParams, _super);
    function ContentAccountsUpdatelabelsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentAccountsUpdatelabelsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentAccountsUpdatelabelsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentAccountsUpdatelabelsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentAccountsUpdatelabelsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentAccountsUpdatelabelsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentAccountsUpdatelabelsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentAccountsUpdatelabelsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentAccountsUpdatelabelsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentAccountsUpdatelabelsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentAccountsUpdatelabelsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentAccountsUpdatelabelsQueryParams.prototype, "uploadProtocol", void 0);
    return ContentAccountsUpdatelabelsQueryParams;
}(SpeakeasyBase));
export { ContentAccountsUpdatelabelsQueryParams };
var ContentAccountsUpdatelabelsSecurity = /** @class */ (function (_super) {
    __extends(ContentAccountsUpdatelabelsSecurity, _super);
    function ContentAccountsUpdatelabelsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentAccountsUpdatelabelsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentAccountsUpdatelabelsSecurity.prototype, "oauth2c", void 0);
    return ContentAccountsUpdatelabelsSecurity;
}(SpeakeasyBase));
export { ContentAccountsUpdatelabelsSecurity };
var ContentAccountsUpdatelabelsRequest = /** @class */ (function (_super) {
    __extends(ContentAccountsUpdatelabelsRequest, _super);
    function ContentAccountsUpdatelabelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentAccountsUpdatelabelsPathParams)
    ], ContentAccountsUpdatelabelsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentAccountsUpdatelabelsQueryParams)
    ], ContentAccountsUpdatelabelsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AccountsUpdateLabelsRequest)
    ], ContentAccountsUpdatelabelsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentAccountsUpdatelabelsSecurity)
    ], ContentAccountsUpdatelabelsRequest.prototype, "security", void 0);
    return ContentAccountsUpdatelabelsRequest;
}(SpeakeasyBase));
export { ContentAccountsUpdatelabelsRequest };
var ContentAccountsUpdatelabelsResponse = /** @class */ (function (_super) {
    __extends(ContentAccountsUpdatelabelsResponse, _super);
    function ContentAccountsUpdatelabelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccountsUpdateLabelsResponse)
    ], ContentAccountsUpdatelabelsResponse.prototype, "accountsUpdateLabelsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentAccountsUpdatelabelsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentAccountsUpdatelabelsResponse.prototype, "statusCode", void 0);
    return ContentAccountsUpdatelabelsResponse;
}(SpeakeasyBase));
export { ContentAccountsUpdatelabelsResponse };
