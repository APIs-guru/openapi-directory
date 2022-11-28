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
var TagmanagerAccountsContainersTriggersListPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersTriggersListPathParams, _super);
    function TagmanagerAccountsContainersTriggersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersListPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=containerId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersListPathParams.prototype, "containerId", void 0);
    return TagmanagerAccountsContainersTriggersListPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersTriggersListPathParams };
var TagmanagerAccountsContainersTriggersListQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersTriggersListQueryParams, _super);
    function TagmanagerAccountsContainersTriggersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersTriggersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersListQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersTriggersListQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersTriggersListQueryParams };
var TagmanagerAccountsContainersTriggersListSecurityOption1 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersTriggersListSecurityOption1, _super);
    function TagmanagerAccountsContainersTriggersListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersTriggersListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersTriggersListSecurityOption1.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersTriggersListSecurityOption1;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersTriggersListSecurityOption1 };
var TagmanagerAccountsContainersTriggersListSecurityOption2 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersTriggersListSecurityOption2, _super);
    function TagmanagerAccountsContainersTriggersListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersTriggersListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersTriggersListSecurityOption2.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersTriggersListSecurityOption2;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersTriggersListSecurityOption2 };
var TagmanagerAccountsContainersTriggersListSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersTriggersListSecurity, _super);
    function TagmanagerAccountsContainersTriggersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersTriggersListSecurityOption1)
    ], TagmanagerAccountsContainersTriggersListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersTriggersListSecurityOption2)
    ], TagmanagerAccountsContainersTriggersListSecurity.prototype, "option2", void 0);
    return TagmanagerAccountsContainersTriggersListSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersTriggersListSecurity };
var TagmanagerAccountsContainersTriggersListRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersTriggersListRequest, _super);
    function TagmanagerAccountsContainersTriggersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersTriggersListPathParams)
    ], TagmanagerAccountsContainersTriggersListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersTriggersListQueryParams)
    ], TagmanagerAccountsContainersTriggersListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersTriggersListSecurity)
    ], TagmanagerAccountsContainersTriggersListRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersTriggersListRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersTriggersListRequest };
var TagmanagerAccountsContainersTriggersListResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersTriggersListResponse, _super);
    function TagmanagerAccountsContainersTriggersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTriggersResponse)
    ], TagmanagerAccountsContainersTriggersListResponse.prototype, "listTriggersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersTriggersListResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersTriggersListResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersTriggersListResponse };
