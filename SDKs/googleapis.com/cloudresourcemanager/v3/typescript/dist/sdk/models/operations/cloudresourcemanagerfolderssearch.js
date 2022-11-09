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
var CloudresourcemanagerFoldersSearchQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersSearchQueryParams, _super);
    function CloudresourcemanagerFoldersSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersSearchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersSearchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersSearchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersSearchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersSearchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersSearchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersSearchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudresourcemanagerFoldersSearchQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersSearchQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerFoldersSearchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersSearchQueryParams.prototype, "query", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersSearchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersSearchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersSearchQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerFoldersSearchQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersSearchQueryParams };
var CloudresourcemanagerFoldersSearchSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersSearchSecurityOption1, _super);
    function CloudresourcemanagerFoldersSearchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerFoldersSearchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerFoldersSearchSecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerFoldersSearchSecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersSearchSecurityOption1 };
var CloudresourcemanagerFoldersSearchSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersSearchSecurityOption2, _super);
    function CloudresourcemanagerFoldersSearchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerFoldersSearchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerFoldersSearchSecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerFoldersSearchSecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersSearchSecurityOption2 };
var CloudresourcemanagerFoldersSearchSecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersSearchSecurity, _super);
    function CloudresourcemanagerFoldersSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerFoldersSearchSecurityOption1)
    ], CloudresourcemanagerFoldersSearchSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerFoldersSearchSecurityOption2)
    ], CloudresourcemanagerFoldersSearchSecurity.prototype, "option2", void 0);
    return CloudresourcemanagerFoldersSearchSecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersSearchSecurity };
var CloudresourcemanagerFoldersSearchRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersSearchRequest, _super);
    function CloudresourcemanagerFoldersSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerFoldersSearchQueryParams)
    ], CloudresourcemanagerFoldersSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerFoldersSearchSecurity)
    ], CloudresourcemanagerFoldersSearchRequest.prototype, "security", void 0);
    return CloudresourcemanagerFoldersSearchRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersSearchRequest };
var CloudresourcemanagerFoldersSearchResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersSearchResponse, _super);
    function CloudresourcemanagerFoldersSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersSearchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SearchFoldersResponse)
    ], CloudresourcemanagerFoldersSearchResponse.prototype, "searchFoldersResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerFoldersSearchResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerFoldersSearchResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersSearchResponse };
