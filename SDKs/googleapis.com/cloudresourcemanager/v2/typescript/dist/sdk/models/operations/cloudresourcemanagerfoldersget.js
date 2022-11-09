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
var CloudresourcemanagerFoldersGetPathParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersGetPathParams, _super);
    function CloudresourcemanagerFoldersGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersGetPathParams.prototype, "name", void 0);
    return CloudresourcemanagerFoldersGetPathParams;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersGetPathParams };
var CloudresourcemanagerFoldersGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersGetQueryParams, _super);
    function CloudresourcemanagerFoldersGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerFoldersGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerFoldersGetQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersGetQueryParams };
var CloudresourcemanagerFoldersGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersGetSecurityOption1, _super);
    function CloudresourcemanagerFoldersGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerFoldersGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerFoldersGetSecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerFoldersGetSecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersGetSecurityOption1 };
var CloudresourcemanagerFoldersGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersGetSecurityOption2, _super);
    function CloudresourcemanagerFoldersGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerFoldersGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerFoldersGetSecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerFoldersGetSecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersGetSecurityOption2 };
var CloudresourcemanagerFoldersGetSecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersGetSecurity, _super);
    function CloudresourcemanagerFoldersGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerFoldersGetSecurityOption1)
    ], CloudresourcemanagerFoldersGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerFoldersGetSecurityOption2)
    ], CloudresourcemanagerFoldersGetSecurity.prototype, "option2", void 0);
    return CloudresourcemanagerFoldersGetSecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersGetSecurity };
var CloudresourcemanagerFoldersGetRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersGetRequest, _super);
    function CloudresourcemanagerFoldersGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerFoldersGetPathParams)
    ], CloudresourcemanagerFoldersGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerFoldersGetQueryParams)
    ], CloudresourcemanagerFoldersGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerFoldersGetSecurity)
    ], CloudresourcemanagerFoldersGetRequest.prototype, "security", void 0);
    return CloudresourcemanagerFoldersGetRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersGetRequest };
var CloudresourcemanagerFoldersGetResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersGetResponse, _super);
    function CloudresourcemanagerFoldersGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Folder)
    ], CloudresourcemanagerFoldersGetResponse.prototype, "folder", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerFoldersGetResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerFoldersGetResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersGetResponse };
