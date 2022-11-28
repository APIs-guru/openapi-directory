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
var CloudresourcemanagerOrganizationsGetPathParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsGetPathParams, _super);
    function CloudresourcemanagerOrganizationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetPathParams.prototype, "name", void 0);
    return CloudresourcemanagerOrganizationsGetPathParams;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsGetPathParams };
var CloudresourcemanagerOrganizationsGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsGetQueryParams, _super);
    function CloudresourcemanagerOrganizationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=organizationId" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetQueryParams.prototype, "organizationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerOrganizationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerOrganizationsGetQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsGetQueryParams };
var CloudresourcemanagerOrganizationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsGetSecurityOption1, _super);
    function CloudresourcemanagerOrganizationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerOrganizationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerOrganizationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerOrganizationsGetSecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsGetSecurityOption1 };
var CloudresourcemanagerOrganizationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsGetSecurityOption2, _super);
    function CloudresourcemanagerOrganizationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerOrganizationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerOrganizationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerOrganizationsGetSecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsGetSecurityOption2 };
var CloudresourcemanagerOrganizationsGetSecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsGetSecurity, _super);
    function CloudresourcemanagerOrganizationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerOrganizationsGetSecurityOption1)
    ], CloudresourcemanagerOrganizationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerOrganizationsGetSecurityOption2)
    ], CloudresourcemanagerOrganizationsGetSecurity.prototype, "option2", void 0);
    return CloudresourcemanagerOrganizationsGetSecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsGetSecurity };
var CloudresourcemanagerOrganizationsGetRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsGetRequest, _super);
    function CloudresourcemanagerOrganizationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerOrganizationsGetPathParams)
    ], CloudresourcemanagerOrganizationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerOrganizationsGetQueryParams)
    ], CloudresourcemanagerOrganizationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerOrganizationsGetSecurity)
    ], CloudresourcemanagerOrganizationsGetRequest.prototype, "security", void 0);
    return CloudresourcemanagerOrganizationsGetRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsGetRequest };
var CloudresourcemanagerOrganizationsGetResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsGetResponse, _super);
    function CloudresourcemanagerOrganizationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Organization)
    ], CloudresourcemanagerOrganizationsGetResponse.prototype, "organization", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerOrganizationsGetResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerOrganizationsGetResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsGetResponse };
