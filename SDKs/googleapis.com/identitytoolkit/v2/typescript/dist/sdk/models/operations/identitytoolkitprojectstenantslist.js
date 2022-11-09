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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var IdentitytoolkitProjectsTenantsListPathParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsListPathParams, _super);
    function IdentitytoolkitProjectsTenantsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsListPathParams.prototype, "parent", void 0);
    return IdentitytoolkitProjectsTenantsListPathParams;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsListPathParams };
var IdentitytoolkitProjectsTenantsListQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsListQueryParams, _super);
    function IdentitytoolkitProjectsTenantsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], IdentitytoolkitProjectsTenantsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitProjectsTenantsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsListQueryParams.prototype, "uploadProtocol", void 0);
    return IdentitytoolkitProjectsTenantsListQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsListQueryParams };
var IdentitytoolkitProjectsTenantsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsListSecurityOption1, _super);
    function IdentitytoolkitProjectsTenantsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitProjectsTenantsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitProjectsTenantsListSecurityOption1.prototype, "oauth2c", void 0);
    return IdentitytoolkitProjectsTenantsListSecurityOption1;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsListSecurityOption1 };
var IdentitytoolkitProjectsTenantsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsListSecurityOption2, _super);
    function IdentitytoolkitProjectsTenantsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitProjectsTenantsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitProjectsTenantsListSecurityOption2.prototype, "oauth2c", void 0);
    return IdentitytoolkitProjectsTenantsListSecurityOption2;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsListSecurityOption2 };
var IdentitytoolkitProjectsTenantsListSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsListSecurity, _super);
    function IdentitytoolkitProjectsTenantsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitProjectsTenantsListSecurityOption1)
    ], IdentitytoolkitProjectsTenantsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitProjectsTenantsListSecurityOption2)
    ], IdentitytoolkitProjectsTenantsListSecurity.prototype, "option2", void 0);
    return IdentitytoolkitProjectsTenantsListSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsListSecurity };
var IdentitytoolkitProjectsTenantsListRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsListRequest, _super);
    function IdentitytoolkitProjectsTenantsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsListPathParams)
    ], IdentitytoolkitProjectsTenantsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsListQueryParams)
    ], IdentitytoolkitProjectsTenantsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsListSecurity)
    ], IdentitytoolkitProjectsTenantsListRequest.prototype, "security", void 0);
    return IdentitytoolkitProjectsTenantsListRequest;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsListRequest };
var IdentitytoolkitProjectsTenantsListResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsListResponse, _super);
    function IdentitytoolkitProjectsTenantsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse)
    ], IdentitytoolkitProjectsTenantsListResponse.prototype, "googleCloudIdentitytoolkitAdminV2ListTenantsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitProjectsTenantsListResponse.prototype, "statusCode", void 0);
    return IdentitytoolkitProjectsTenantsListResponse;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsListResponse };
