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
var ContentAccountsClaimwebsitePathParams = /** @class */ (function (_super) {
    __extends(ContentAccountsClaimwebsitePathParams, _super);
    function ContentAccountsClaimwebsitePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], ContentAccountsClaimwebsitePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentAccountsClaimwebsitePathParams.prototype, "merchantId", void 0);
    return ContentAccountsClaimwebsitePathParams;
}(SpeakeasyBase));
export { ContentAccountsClaimwebsitePathParams };
var ContentAccountsClaimwebsiteQueryParams = /** @class */ (function (_super) {
    __extends(ContentAccountsClaimwebsiteQueryParams, _super);
    function ContentAccountsClaimwebsiteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentAccountsClaimwebsiteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentAccountsClaimwebsiteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentAccountsClaimwebsiteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentAccountsClaimwebsiteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentAccountsClaimwebsiteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentAccountsClaimwebsiteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentAccountsClaimwebsiteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=overwrite" }),
        __metadata("design:type", Boolean)
    ], ContentAccountsClaimwebsiteQueryParams.prototype, "overwrite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentAccountsClaimwebsiteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentAccountsClaimwebsiteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentAccountsClaimwebsiteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentAccountsClaimwebsiteQueryParams.prototype, "uploadProtocol", void 0);
    return ContentAccountsClaimwebsiteQueryParams;
}(SpeakeasyBase));
export { ContentAccountsClaimwebsiteQueryParams };
var ContentAccountsClaimwebsiteSecurity = /** @class */ (function (_super) {
    __extends(ContentAccountsClaimwebsiteSecurity, _super);
    function ContentAccountsClaimwebsiteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentAccountsClaimwebsiteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentAccountsClaimwebsiteSecurity.prototype, "oauth2c", void 0);
    return ContentAccountsClaimwebsiteSecurity;
}(SpeakeasyBase));
export { ContentAccountsClaimwebsiteSecurity };
var ContentAccountsClaimwebsiteRequest = /** @class */ (function (_super) {
    __extends(ContentAccountsClaimwebsiteRequest, _super);
    function ContentAccountsClaimwebsiteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentAccountsClaimwebsitePathParams)
    ], ContentAccountsClaimwebsiteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentAccountsClaimwebsiteQueryParams)
    ], ContentAccountsClaimwebsiteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentAccountsClaimwebsiteSecurity)
    ], ContentAccountsClaimwebsiteRequest.prototype, "security", void 0);
    return ContentAccountsClaimwebsiteRequest;
}(SpeakeasyBase));
export { ContentAccountsClaimwebsiteRequest };
var ContentAccountsClaimwebsiteResponse = /** @class */ (function (_super) {
    __extends(ContentAccountsClaimwebsiteResponse, _super);
    function ContentAccountsClaimwebsiteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccountsClaimWebsiteResponse)
    ], ContentAccountsClaimwebsiteResponse.prototype, "accountsClaimWebsiteResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentAccountsClaimwebsiteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentAccountsClaimwebsiteResponse.prototype, "statusCode", void 0);
    return ContentAccountsClaimwebsiteResponse;
}(SpeakeasyBase));
export { ContentAccountsClaimwebsiteResponse };
