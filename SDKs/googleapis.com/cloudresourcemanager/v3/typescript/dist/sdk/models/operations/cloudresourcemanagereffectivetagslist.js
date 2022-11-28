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
var CloudresourcemanagerEffectiveTagsListQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerEffectiveTagsListQueryParams, _super);
    function CloudresourcemanagerEffectiveTagsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerEffectiveTagsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerEffectiveTagsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerEffectiveTagsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerEffectiveTagsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerEffectiveTagsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerEffectiveTagsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerEffectiveTagsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudresourcemanagerEffectiveTagsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerEffectiveTagsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerEffectiveTagsListQueryParams.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerEffectiveTagsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerEffectiveTagsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerEffectiveTagsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerEffectiveTagsListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerEffectiveTagsListQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerEffectiveTagsListQueryParams };
var CloudresourcemanagerEffectiveTagsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerEffectiveTagsListSecurityOption1, _super);
    function CloudresourcemanagerEffectiveTagsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerEffectiveTagsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerEffectiveTagsListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerEffectiveTagsListSecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerEffectiveTagsListSecurityOption1 };
var CloudresourcemanagerEffectiveTagsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerEffectiveTagsListSecurityOption2, _super);
    function CloudresourcemanagerEffectiveTagsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerEffectiveTagsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerEffectiveTagsListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerEffectiveTagsListSecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerEffectiveTagsListSecurityOption2 };
var CloudresourcemanagerEffectiveTagsListSecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerEffectiveTagsListSecurity, _super);
    function CloudresourcemanagerEffectiveTagsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerEffectiveTagsListSecurityOption1)
    ], CloudresourcemanagerEffectiveTagsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerEffectiveTagsListSecurityOption2)
    ], CloudresourcemanagerEffectiveTagsListSecurity.prototype, "option2", void 0);
    return CloudresourcemanagerEffectiveTagsListSecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerEffectiveTagsListSecurity };
var CloudresourcemanagerEffectiveTagsListRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerEffectiveTagsListRequest, _super);
    function CloudresourcemanagerEffectiveTagsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerEffectiveTagsListQueryParams)
    ], CloudresourcemanagerEffectiveTagsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerEffectiveTagsListSecurity)
    ], CloudresourcemanagerEffectiveTagsListRequest.prototype, "security", void 0);
    return CloudresourcemanagerEffectiveTagsListRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerEffectiveTagsListRequest };
var CloudresourcemanagerEffectiveTagsListResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerEffectiveTagsListResponse, _super);
    function CloudresourcemanagerEffectiveTagsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerEffectiveTagsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListEffectiveTagsResponse)
    ], CloudresourcemanagerEffectiveTagsListResponse.prototype, "listEffectiveTagsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerEffectiveTagsListResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerEffectiveTagsListResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerEffectiveTagsListResponse };
