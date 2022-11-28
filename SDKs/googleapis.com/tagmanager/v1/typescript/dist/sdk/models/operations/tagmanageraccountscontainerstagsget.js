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
var TagmanagerAccountsContainersTagsGetPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersTagsGetPathParams, _super);
    function TagmanagerAccountsContainersTagsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTagsGetPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=containerId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTagsGetPathParams.prototype, "containerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTagsGetPathParams.prototype, "tagId", void 0);
    return TagmanagerAccountsContainersTagsGetPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersTagsGetPathParams };
var TagmanagerAccountsContainersTagsGetQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersTagsGetQueryParams, _super);
    function TagmanagerAccountsContainersTagsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTagsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTagsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTagsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTagsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTagsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTagsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTagsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersTagsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTagsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTagsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTagsGetQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersTagsGetQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersTagsGetQueryParams };
var TagmanagerAccountsContainersTagsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersTagsGetSecurityOption1, _super);
    function TagmanagerAccountsContainersTagsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersTagsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersTagsGetSecurityOption1.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersTagsGetSecurityOption1;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersTagsGetSecurityOption1 };
var TagmanagerAccountsContainersTagsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersTagsGetSecurityOption2, _super);
    function TagmanagerAccountsContainersTagsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersTagsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersTagsGetSecurityOption2.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersTagsGetSecurityOption2;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersTagsGetSecurityOption2 };
var TagmanagerAccountsContainersTagsGetSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersTagsGetSecurity, _super);
    function TagmanagerAccountsContainersTagsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersTagsGetSecurityOption1)
    ], TagmanagerAccountsContainersTagsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersTagsGetSecurityOption2)
    ], TagmanagerAccountsContainersTagsGetSecurity.prototype, "option2", void 0);
    return TagmanagerAccountsContainersTagsGetSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersTagsGetSecurity };
var TagmanagerAccountsContainersTagsGetRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersTagsGetRequest, _super);
    function TagmanagerAccountsContainersTagsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersTagsGetPathParams)
    ], TagmanagerAccountsContainersTagsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersTagsGetQueryParams)
    ], TagmanagerAccountsContainersTagsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersTagsGetSecurity)
    ], TagmanagerAccountsContainersTagsGetRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersTagsGetRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersTagsGetRequest };
var TagmanagerAccountsContainersTagsGetResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersTagsGetResponse, _super);
    function TagmanagerAccountsContainersTagsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTagsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersTagsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Tag)
    ], TagmanagerAccountsContainersTagsGetResponse.prototype, "tag", void 0);
    return TagmanagerAccountsContainersTagsGetResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersTagsGetResponse };
