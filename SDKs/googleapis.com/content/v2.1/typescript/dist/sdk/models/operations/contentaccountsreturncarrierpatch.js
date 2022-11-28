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
var ContentAccountsReturncarrierPatchPathParams = /** @class */ (function (_super) {
    __extends(ContentAccountsReturncarrierPatchPathParams, _super);
    function ContentAccountsReturncarrierPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierPatchPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=carrierAccountId" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierPatchPathParams.prototype, "carrierAccountId", void 0);
    return ContentAccountsReturncarrierPatchPathParams;
}(SpeakeasyBase));
export { ContentAccountsReturncarrierPatchPathParams };
var ContentAccountsReturncarrierPatchQueryParams = /** @class */ (function (_super) {
    __extends(ContentAccountsReturncarrierPatchQueryParams, _super);
    function ContentAccountsReturncarrierPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentAccountsReturncarrierPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierPatchQueryParams.prototype, "uploadProtocol", void 0);
    return ContentAccountsReturncarrierPatchQueryParams;
}(SpeakeasyBase));
export { ContentAccountsReturncarrierPatchQueryParams };
var ContentAccountsReturncarrierPatchSecurity = /** @class */ (function (_super) {
    __extends(ContentAccountsReturncarrierPatchSecurity, _super);
    function ContentAccountsReturncarrierPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentAccountsReturncarrierPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentAccountsReturncarrierPatchSecurity.prototype, "oauth2c", void 0);
    return ContentAccountsReturncarrierPatchSecurity;
}(SpeakeasyBase));
export { ContentAccountsReturncarrierPatchSecurity };
var ContentAccountsReturncarrierPatchRequest = /** @class */ (function (_super) {
    __extends(ContentAccountsReturncarrierPatchRequest, _super);
    function ContentAccountsReturncarrierPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentAccountsReturncarrierPatchPathParams)
    ], ContentAccountsReturncarrierPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentAccountsReturncarrierPatchQueryParams)
    ], ContentAccountsReturncarrierPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AccountReturnCarrierInput)
    ], ContentAccountsReturncarrierPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentAccountsReturncarrierPatchSecurity)
    ], ContentAccountsReturncarrierPatchRequest.prototype, "security", void 0);
    return ContentAccountsReturncarrierPatchRequest;
}(SpeakeasyBase));
export { ContentAccountsReturncarrierPatchRequest };
var ContentAccountsReturncarrierPatchResponse = /** @class */ (function (_super) {
    __extends(ContentAccountsReturncarrierPatchResponse, _super);
    function ContentAccountsReturncarrierPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccountReturnCarrier)
    ], ContentAccountsReturncarrierPatchResponse.prototype, "accountReturnCarrier", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentAccountsReturncarrierPatchResponse.prototype, "statusCode", void 0);
    return ContentAccountsReturncarrierPatchResponse;
}(SpeakeasyBase));
export { ContentAccountsReturncarrierPatchResponse };
