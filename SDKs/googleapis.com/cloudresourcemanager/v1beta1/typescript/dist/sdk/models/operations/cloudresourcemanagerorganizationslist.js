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
var CloudresourcemanagerOrganizationsListQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsListQueryParams, _super);
    function CloudresourcemanagerOrganizationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudresourcemanagerOrganizationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerOrganizationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerOrganizationsListQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsListQueryParams };
var CloudresourcemanagerOrganizationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsListSecurityOption1, _super);
    function CloudresourcemanagerOrganizationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerOrganizationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerOrganizationsListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerOrganizationsListSecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsListSecurityOption1 };
var CloudresourcemanagerOrganizationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsListSecurityOption2, _super);
    function CloudresourcemanagerOrganizationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerOrganizationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerOrganizationsListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerOrganizationsListSecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsListSecurityOption2 };
var CloudresourcemanagerOrganizationsListSecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsListSecurity, _super);
    function CloudresourcemanagerOrganizationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerOrganizationsListSecurityOption1)
    ], CloudresourcemanagerOrganizationsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerOrganizationsListSecurityOption2)
    ], CloudresourcemanagerOrganizationsListSecurity.prototype, "option2", void 0);
    return CloudresourcemanagerOrganizationsListSecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsListSecurity };
var CloudresourcemanagerOrganizationsListRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsListRequest, _super);
    function CloudresourcemanagerOrganizationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerOrganizationsListQueryParams)
    ], CloudresourcemanagerOrganizationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerOrganizationsListSecurity)
    ], CloudresourcemanagerOrganizationsListRequest.prototype, "security", void 0);
    return CloudresourcemanagerOrganizationsListRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsListRequest };
var CloudresourcemanagerOrganizationsListResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsListResponse, _super);
    function CloudresourcemanagerOrganizationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListOrganizationsResponse)
    ], CloudresourcemanagerOrganizationsListResponse.prototype, "listOrganizationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerOrganizationsListResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerOrganizationsListResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsListResponse };
