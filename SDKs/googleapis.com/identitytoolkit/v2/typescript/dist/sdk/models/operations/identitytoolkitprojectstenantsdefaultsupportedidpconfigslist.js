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
var IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListPathParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListPathParams, _super);
    function IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListPathParams.prototype, "parent", void 0);
    return IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListPathParams;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListPathParams };
var IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListQueryParams, _super);
    function IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListQueryParams.prototype, "uploadProtocol", void 0);
    return IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListQueryParams };
var IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption1, _super);
    function IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption1.prototype, "oauth2c", void 0);
    return IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption1;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption1 };
var IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption2, _super);
    function IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption2.prototype, "oauth2c", void 0);
    return IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption2;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption2 };
var IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurity, _super);
    function IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption1)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption2)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurity.prototype, "option2", void 0);
    return IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurity };
var IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListRequest, _super);
    function IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListPathParams)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListQueryParams)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurity)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListRequest.prototype, "security", void 0);
    return IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListRequest;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListRequest };
var IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse, _super);
    function IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse.prototype, "googleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse.prototype, "statusCode", void 0);
    return IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse };
