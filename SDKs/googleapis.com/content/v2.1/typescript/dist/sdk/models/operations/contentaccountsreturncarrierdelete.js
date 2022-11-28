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
var ContentAccountsReturncarrierDeletePathParams = /** @class */ (function (_super) {
    __extends(ContentAccountsReturncarrierDeletePathParams, _super);
    function ContentAccountsReturncarrierDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierDeletePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=carrierAccountId" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierDeletePathParams.prototype, "carrierAccountId", void 0);
    return ContentAccountsReturncarrierDeletePathParams;
}(SpeakeasyBase));
export { ContentAccountsReturncarrierDeletePathParams };
var ContentAccountsReturncarrierDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ContentAccountsReturncarrierDeleteQueryParams, _super);
    function ContentAccountsReturncarrierDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentAccountsReturncarrierDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ContentAccountsReturncarrierDeleteQueryParams;
}(SpeakeasyBase));
export { ContentAccountsReturncarrierDeleteQueryParams };
var ContentAccountsReturncarrierDeleteSecurity = /** @class */ (function (_super) {
    __extends(ContentAccountsReturncarrierDeleteSecurity, _super);
    function ContentAccountsReturncarrierDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentAccountsReturncarrierDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentAccountsReturncarrierDeleteSecurity.prototype, "oauth2c", void 0);
    return ContentAccountsReturncarrierDeleteSecurity;
}(SpeakeasyBase));
export { ContentAccountsReturncarrierDeleteSecurity };
var ContentAccountsReturncarrierDeleteRequest = /** @class */ (function (_super) {
    __extends(ContentAccountsReturncarrierDeleteRequest, _super);
    function ContentAccountsReturncarrierDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentAccountsReturncarrierDeletePathParams)
    ], ContentAccountsReturncarrierDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentAccountsReturncarrierDeleteQueryParams)
    ], ContentAccountsReturncarrierDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentAccountsReturncarrierDeleteSecurity)
    ], ContentAccountsReturncarrierDeleteRequest.prototype, "security", void 0);
    return ContentAccountsReturncarrierDeleteRequest;
}(SpeakeasyBase));
export { ContentAccountsReturncarrierDeleteRequest };
var ContentAccountsReturncarrierDeleteResponse = /** @class */ (function (_super) {
    __extends(ContentAccountsReturncarrierDeleteResponse, _super);
    function ContentAccountsReturncarrierDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentAccountsReturncarrierDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentAccountsReturncarrierDeleteResponse.prototype, "statusCode", void 0);
    return ContentAccountsReturncarrierDeleteResponse;
}(SpeakeasyBase));
export { ContentAccountsReturncarrierDeleteResponse };
