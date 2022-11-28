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
var TagmanagerAccountsContainersEnvironmentsListPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersEnvironmentsListPathParams, _super);
    function TagmanagerAccountsContainersEnvironmentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsListPathParams.prototype, "parent", void 0);
    return TagmanagerAccountsContainersEnvironmentsListPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersEnvironmentsListPathParams };
var TagmanagerAccountsContainersEnvironmentsListQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersEnvironmentsListQueryParams, _super);
    function TagmanagerAccountsContainersEnvironmentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersEnvironmentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsListQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersEnvironmentsListQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersEnvironmentsListQueryParams };
var TagmanagerAccountsContainersEnvironmentsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersEnvironmentsListSecurityOption1, _super);
    function TagmanagerAccountsContainersEnvironmentsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersEnvironmentsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersEnvironmentsListSecurityOption1.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersEnvironmentsListSecurityOption1;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersEnvironmentsListSecurityOption1 };
var TagmanagerAccountsContainersEnvironmentsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersEnvironmentsListSecurityOption2, _super);
    function TagmanagerAccountsContainersEnvironmentsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersEnvironmentsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersEnvironmentsListSecurityOption2.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersEnvironmentsListSecurityOption2;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersEnvironmentsListSecurityOption2 };
var TagmanagerAccountsContainersEnvironmentsListSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersEnvironmentsListSecurity, _super);
    function TagmanagerAccountsContainersEnvironmentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersEnvironmentsListSecurityOption1)
    ], TagmanagerAccountsContainersEnvironmentsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersEnvironmentsListSecurityOption2)
    ], TagmanagerAccountsContainersEnvironmentsListSecurity.prototype, "option2", void 0);
    return TagmanagerAccountsContainersEnvironmentsListSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersEnvironmentsListSecurity };
var TagmanagerAccountsContainersEnvironmentsListRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersEnvironmentsListRequest, _super);
    function TagmanagerAccountsContainersEnvironmentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersEnvironmentsListPathParams)
    ], TagmanagerAccountsContainersEnvironmentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersEnvironmentsListQueryParams)
    ], TagmanagerAccountsContainersEnvironmentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersEnvironmentsListSecurity)
    ], TagmanagerAccountsContainersEnvironmentsListRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersEnvironmentsListRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersEnvironmentsListRequest };
var TagmanagerAccountsContainersEnvironmentsListResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersEnvironmentsListResponse, _super);
    function TagmanagerAccountsContainersEnvironmentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListEnvironmentsResponse)
    ], TagmanagerAccountsContainersEnvironmentsListResponse.prototype, "listEnvironmentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersEnvironmentsListResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersEnvironmentsListResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersEnvironmentsListResponse };
