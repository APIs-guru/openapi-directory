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
var ContentAccountsReturncarrierListPathParams = /** @class */ (function (_super) {
    __extends(ContentAccountsReturncarrierListPathParams, _super);
    function ContentAccountsReturncarrierListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierListPathParams.prototype, "accountId", void 0);
    return ContentAccountsReturncarrierListPathParams;
}(SpeakeasyBase));
export { ContentAccountsReturncarrierListPathParams };
var ContentAccountsReturncarrierListQueryParams = /** @class */ (function (_super) {
    __extends(ContentAccountsReturncarrierListQueryParams, _super);
    function ContentAccountsReturncarrierListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentAccountsReturncarrierListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierListQueryParams.prototype, "uploadProtocol", void 0);
    return ContentAccountsReturncarrierListQueryParams;
}(SpeakeasyBase));
export { ContentAccountsReturncarrierListQueryParams };
var ContentAccountsReturncarrierListSecurity = /** @class */ (function (_super) {
    __extends(ContentAccountsReturncarrierListSecurity, _super);
    function ContentAccountsReturncarrierListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentAccountsReturncarrierListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentAccountsReturncarrierListSecurity.prototype, "oauth2c", void 0);
    return ContentAccountsReturncarrierListSecurity;
}(SpeakeasyBase));
export { ContentAccountsReturncarrierListSecurity };
var ContentAccountsReturncarrierListRequest = /** @class */ (function (_super) {
    __extends(ContentAccountsReturncarrierListRequest, _super);
    function ContentAccountsReturncarrierListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentAccountsReturncarrierListPathParams)
    ], ContentAccountsReturncarrierListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentAccountsReturncarrierListQueryParams)
    ], ContentAccountsReturncarrierListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentAccountsReturncarrierListSecurity)
    ], ContentAccountsReturncarrierListRequest.prototype, "security", void 0);
    return ContentAccountsReturncarrierListRequest;
}(SpeakeasyBase));
export { ContentAccountsReturncarrierListRequest };
var ContentAccountsReturncarrierListResponse = /** @class */ (function (_super) {
    __extends(ContentAccountsReturncarrierListResponse, _super);
    function ContentAccountsReturncarrierListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAccountReturnCarrierResponse)
    ], ContentAccountsReturncarrierListResponse.prototype, "listAccountReturnCarrierResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentAccountsReturncarrierListResponse.prototype, "statusCode", void 0);
    return ContentAccountsReturncarrierListResponse;
}(SpeakeasyBase));
export { ContentAccountsReturncarrierListResponse };
