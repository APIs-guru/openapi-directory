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
var TagmanagerAccountsContainersFoldersGetPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersFoldersGetPathParams, _super);
    function TagmanagerAccountsContainersFoldersGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersGetPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=containerId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersGetPathParams.prototype, "containerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=folderId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersGetPathParams.prototype, "folderId", void 0);
    return TagmanagerAccountsContainersFoldersGetPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersFoldersGetPathParams };
var TagmanagerAccountsContainersFoldersGetQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersFoldersGetQueryParams, _super);
    function TagmanagerAccountsContainersFoldersGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersFoldersGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersGetQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersFoldersGetQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersFoldersGetQueryParams };
var TagmanagerAccountsContainersFoldersGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersFoldersGetSecurityOption1, _super);
    function TagmanagerAccountsContainersFoldersGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersFoldersGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersFoldersGetSecurityOption1.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersFoldersGetSecurityOption1;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersFoldersGetSecurityOption1 };
var TagmanagerAccountsContainersFoldersGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersFoldersGetSecurityOption2, _super);
    function TagmanagerAccountsContainersFoldersGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersFoldersGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersFoldersGetSecurityOption2.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersFoldersGetSecurityOption2;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersFoldersGetSecurityOption2 };
var TagmanagerAccountsContainersFoldersGetSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersFoldersGetSecurity, _super);
    function TagmanagerAccountsContainersFoldersGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersFoldersGetSecurityOption1)
    ], TagmanagerAccountsContainersFoldersGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersFoldersGetSecurityOption2)
    ], TagmanagerAccountsContainersFoldersGetSecurity.prototype, "option2", void 0);
    return TagmanagerAccountsContainersFoldersGetSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersFoldersGetSecurity };
var TagmanagerAccountsContainersFoldersGetRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersFoldersGetRequest, _super);
    function TagmanagerAccountsContainersFoldersGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersFoldersGetPathParams)
    ], TagmanagerAccountsContainersFoldersGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersFoldersGetQueryParams)
    ], TagmanagerAccountsContainersFoldersGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersFoldersGetSecurity)
    ], TagmanagerAccountsContainersFoldersGetRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersFoldersGetRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersFoldersGetRequest };
var TagmanagerAccountsContainersFoldersGetResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersFoldersGetResponse, _super);
    function TagmanagerAccountsContainersFoldersGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Folder)
    ], TagmanagerAccountsContainersFoldersGetResponse.prototype, "folder", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersFoldersGetResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersFoldersGetResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersFoldersGetResponse };
