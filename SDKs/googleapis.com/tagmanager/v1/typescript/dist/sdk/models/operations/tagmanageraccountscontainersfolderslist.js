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
var TagmanagerAccountsContainersFoldersListPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersFoldersListPathParams, _super);
    function TagmanagerAccountsContainersFoldersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersListPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=containerId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersListPathParams.prototype, "containerId", void 0);
    return TagmanagerAccountsContainersFoldersListPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersFoldersListPathParams };
var TagmanagerAccountsContainersFoldersListQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersFoldersListQueryParams, _super);
    function TagmanagerAccountsContainersFoldersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersFoldersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersListQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersFoldersListQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersFoldersListQueryParams };
var TagmanagerAccountsContainersFoldersListSecurityOption1 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersFoldersListSecurityOption1, _super);
    function TagmanagerAccountsContainersFoldersListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersFoldersListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersFoldersListSecurityOption1.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersFoldersListSecurityOption1;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersFoldersListSecurityOption1 };
var TagmanagerAccountsContainersFoldersListSecurityOption2 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersFoldersListSecurityOption2, _super);
    function TagmanagerAccountsContainersFoldersListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersFoldersListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersFoldersListSecurityOption2.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersFoldersListSecurityOption2;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersFoldersListSecurityOption2 };
var TagmanagerAccountsContainersFoldersListSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersFoldersListSecurity, _super);
    function TagmanagerAccountsContainersFoldersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersFoldersListSecurityOption1)
    ], TagmanagerAccountsContainersFoldersListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersFoldersListSecurityOption2)
    ], TagmanagerAccountsContainersFoldersListSecurity.prototype, "option2", void 0);
    return TagmanagerAccountsContainersFoldersListSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersFoldersListSecurity };
var TagmanagerAccountsContainersFoldersListRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersFoldersListRequest, _super);
    function TagmanagerAccountsContainersFoldersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersFoldersListPathParams)
    ], TagmanagerAccountsContainersFoldersListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersFoldersListQueryParams)
    ], TagmanagerAccountsContainersFoldersListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersFoldersListSecurity)
    ], TagmanagerAccountsContainersFoldersListRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersFoldersListRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersFoldersListRequest };
var TagmanagerAccountsContainersFoldersListResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersFoldersListResponse, _super);
    function TagmanagerAccountsContainersFoldersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListFoldersResponse)
    ], TagmanagerAccountsContainersFoldersListResponse.prototype, "listFoldersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersFoldersListResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersFoldersListResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersFoldersListResponse };
