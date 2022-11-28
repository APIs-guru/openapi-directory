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
var GmailUsersSettingsForwardingAddressesListPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsForwardingAddressesListPathParams, _super);
    function GmailUsersSettingsForwardingAddressesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesListPathParams.prototype, "userId", void 0);
    return GmailUsersSettingsForwardingAddressesListPathParams;
}(SpeakeasyBase));
export { GmailUsersSettingsForwardingAddressesListPathParams };
var GmailUsersSettingsForwardingAddressesListQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsForwardingAddressesListQueryParams, _super);
    function GmailUsersSettingsForwardingAddressesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersSettingsForwardingAddressesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesListQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersSettingsForwardingAddressesListQueryParams;
}(SpeakeasyBase));
export { GmailUsersSettingsForwardingAddressesListQueryParams };
var GmailUsersSettingsForwardingAddressesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsForwardingAddressesListSecurityOption1, _super);
    function GmailUsersSettingsForwardingAddressesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsForwardingAddressesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsForwardingAddressesListSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersSettingsForwardingAddressesListSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersSettingsForwardingAddressesListSecurityOption1 };
var GmailUsersSettingsForwardingAddressesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsForwardingAddressesListSecurityOption2, _super);
    function GmailUsersSettingsForwardingAddressesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsForwardingAddressesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsForwardingAddressesListSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersSettingsForwardingAddressesListSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersSettingsForwardingAddressesListSecurityOption2 };
var GmailUsersSettingsForwardingAddressesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsForwardingAddressesListSecurityOption3, _super);
    function GmailUsersSettingsForwardingAddressesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsForwardingAddressesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsForwardingAddressesListSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersSettingsForwardingAddressesListSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersSettingsForwardingAddressesListSecurityOption3 };
var GmailUsersSettingsForwardingAddressesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsForwardingAddressesListSecurityOption4, _super);
    function GmailUsersSettingsForwardingAddressesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsForwardingAddressesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsForwardingAddressesListSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersSettingsForwardingAddressesListSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersSettingsForwardingAddressesListSecurityOption4 };
var GmailUsersSettingsForwardingAddressesListSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsForwardingAddressesListSecurity, _super);
    function GmailUsersSettingsForwardingAddressesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsForwardingAddressesListSecurityOption1)
    ], GmailUsersSettingsForwardingAddressesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsForwardingAddressesListSecurityOption2)
    ], GmailUsersSettingsForwardingAddressesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsForwardingAddressesListSecurityOption3)
    ], GmailUsersSettingsForwardingAddressesListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsForwardingAddressesListSecurityOption4)
    ], GmailUsersSettingsForwardingAddressesListSecurity.prototype, "option4", void 0);
    return GmailUsersSettingsForwardingAddressesListSecurity;
}(SpeakeasyBase));
export { GmailUsersSettingsForwardingAddressesListSecurity };
var GmailUsersSettingsForwardingAddressesListRequest = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsForwardingAddressesListRequest, _super);
    function GmailUsersSettingsForwardingAddressesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsForwardingAddressesListPathParams)
    ], GmailUsersSettingsForwardingAddressesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsForwardingAddressesListQueryParams)
    ], GmailUsersSettingsForwardingAddressesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsForwardingAddressesListSecurity)
    ], GmailUsersSettingsForwardingAddressesListRequest.prototype, "security", void 0);
    return GmailUsersSettingsForwardingAddressesListRequest;
}(SpeakeasyBase));
export { GmailUsersSettingsForwardingAddressesListRequest };
var GmailUsersSettingsForwardingAddressesListResponse = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsForwardingAddressesListResponse, _super);
    function GmailUsersSettingsForwardingAddressesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListForwardingAddressesResponse)
    ], GmailUsersSettingsForwardingAddressesListResponse.prototype, "listForwardingAddressesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersSettingsForwardingAddressesListResponse.prototype, "statusCode", void 0);
    return GmailUsersSettingsForwardingAddressesListResponse;
}(SpeakeasyBase));
export { GmailUsersSettingsForwardingAddressesListResponse };
