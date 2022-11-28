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
var GmailUsersSettingsForwardingAddressesDeletePathParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsForwardingAddressesDeletePathParams, _super);
    function GmailUsersSettingsForwardingAddressesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=forwardingEmail" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesDeletePathParams.prototype, "forwardingEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesDeletePathParams.prototype, "userId", void 0);
    return GmailUsersSettingsForwardingAddressesDeletePathParams;
}(SpeakeasyBase));
export { GmailUsersSettingsForwardingAddressesDeletePathParams };
var GmailUsersSettingsForwardingAddressesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsForwardingAddressesDeleteQueryParams, _super);
    function GmailUsersSettingsForwardingAddressesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersSettingsForwardingAddressesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersSettingsForwardingAddressesDeleteQueryParams;
}(SpeakeasyBase));
export { GmailUsersSettingsForwardingAddressesDeleteQueryParams };
var GmailUsersSettingsForwardingAddressesDeleteSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsForwardingAddressesDeleteSecurity, _super);
    function GmailUsersSettingsForwardingAddressesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsForwardingAddressesDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsForwardingAddressesDeleteSecurity.prototype, "oauth2c", void 0);
    return GmailUsersSettingsForwardingAddressesDeleteSecurity;
}(SpeakeasyBase));
export { GmailUsersSettingsForwardingAddressesDeleteSecurity };
var GmailUsersSettingsForwardingAddressesDeleteRequest = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsForwardingAddressesDeleteRequest, _super);
    function GmailUsersSettingsForwardingAddressesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsForwardingAddressesDeletePathParams)
    ], GmailUsersSettingsForwardingAddressesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsForwardingAddressesDeleteQueryParams)
    ], GmailUsersSettingsForwardingAddressesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsForwardingAddressesDeleteSecurity)
    ], GmailUsersSettingsForwardingAddressesDeleteRequest.prototype, "security", void 0);
    return GmailUsersSettingsForwardingAddressesDeleteRequest;
}(SpeakeasyBase));
export { GmailUsersSettingsForwardingAddressesDeleteRequest };
var GmailUsersSettingsForwardingAddressesDeleteResponse = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsForwardingAddressesDeleteResponse, _super);
    function GmailUsersSettingsForwardingAddressesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersSettingsForwardingAddressesDeleteResponse.prototype, "statusCode", void 0);
    return GmailUsersSettingsForwardingAddressesDeleteResponse;
}(SpeakeasyBase));
export { GmailUsersSettingsForwardingAddressesDeleteResponse };
