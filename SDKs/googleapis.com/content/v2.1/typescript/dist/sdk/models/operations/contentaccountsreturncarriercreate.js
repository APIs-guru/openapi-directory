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
var ContentAccountsReturncarrierCreatePathParams = /** @class */ (function (_super) {
    __extends(ContentAccountsReturncarrierCreatePathParams, _super);
    function ContentAccountsReturncarrierCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierCreatePathParams.prototype, "accountId", void 0);
    return ContentAccountsReturncarrierCreatePathParams;
}(SpeakeasyBase));
export { ContentAccountsReturncarrierCreatePathParams };
var ContentAccountsReturncarrierCreateQueryParams = /** @class */ (function (_super) {
    __extends(ContentAccountsReturncarrierCreateQueryParams, _super);
    function ContentAccountsReturncarrierCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentAccountsReturncarrierCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ContentAccountsReturncarrierCreateQueryParams;
}(SpeakeasyBase));
export { ContentAccountsReturncarrierCreateQueryParams };
var ContentAccountsReturncarrierCreateSecurity = /** @class */ (function (_super) {
    __extends(ContentAccountsReturncarrierCreateSecurity, _super);
    function ContentAccountsReturncarrierCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentAccountsReturncarrierCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentAccountsReturncarrierCreateSecurity.prototype, "oauth2c", void 0);
    return ContentAccountsReturncarrierCreateSecurity;
}(SpeakeasyBase));
export { ContentAccountsReturncarrierCreateSecurity };
var ContentAccountsReturncarrierCreateRequest = /** @class */ (function (_super) {
    __extends(ContentAccountsReturncarrierCreateRequest, _super);
    function ContentAccountsReturncarrierCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentAccountsReturncarrierCreatePathParams)
    ], ContentAccountsReturncarrierCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentAccountsReturncarrierCreateQueryParams)
    ], ContentAccountsReturncarrierCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AccountReturnCarrierInput)
    ], ContentAccountsReturncarrierCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentAccountsReturncarrierCreateSecurity)
    ], ContentAccountsReturncarrierCreateRequest.prototype, "security", void 0);
    return ContentAccountsReturncarrierCreateRequest;
}(SpeakeasyBase));
export { ContentAccountsReturncarrierCreateRequest };
var ContentAccountsReturncarrierCreateResponse = /** @class */ (function (_super) {
    __extends(ContentAccountsReturncarrierCreateResponse, _super);
    function ContentAccountsReturncarrierCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccountReturnCarrier)
    ], ContentAccountsReturncarrierCreateResponse.prototype, "accountReturnCarrier", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentAccountsReturncarrierCreateResponse.prototype, "statusCode", void 0);
    return ContentAccountsReturncarrierCreateResponse;
}(SpeakeasyBase));
export { ContentAccountsReturncarrierCreateResponse };
