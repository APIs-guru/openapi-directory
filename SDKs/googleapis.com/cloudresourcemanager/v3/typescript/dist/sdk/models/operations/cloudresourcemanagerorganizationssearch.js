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
var CloudresourcemanagerOrganizationsSearchQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsSearchQueryParams, _super);
    function CloudresourcemanagerOrganizationsSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsSearchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsSearchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsSearchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsSearchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsSearchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsSearchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsSearchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudresourcemanagerOrganizationsSearchQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsSearchQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerOrganizationsSearchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsSearchQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsSearchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsSearchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsSearchQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerOrganizationsSearchQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsSearchQueryParams };
var CloudresourcemanagerOrganizationsSearchSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsSearchSecurityOption1, _super);
    function CloudresourcemanagerOrganizationsSearchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerOrganizationsSearchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerOrganizationsSearchSecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerOrganizationsSearchSecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsSearchSecurityOption1 };
var CloudresourcemanagerOrganizationsSearchSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsSearchSecurityOption2, _super);
    function CloudresourcemanagerOrganizationsSearchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerOrganizationsSearchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerOrganizationsSearchSecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerOrganizationsSearchSecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsSearchSecurityOption2 };
var CloudresourcemanagerOrganizationsSearchSecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsSearchSecurity, _super);
    function CloudresourcemanagerOrganizationsSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerOrganizationsSearchSecurityOption1)
    ], CloudresourcemanagerOrganizationsSearchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerOrganizationsSearchSecurityOption2)
    ], CloudresourcemanagerOrganizationsSearchSecurity.prototype, "option2", void 0);
    return CloudresourcemanagerOrganizationsSearchSecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsSearchSecurity };
var CloudresourcemanagerOrganizationsSearchRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsSearchRequest, _super);
    function CloudresourcemanagerOrganizationsSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerOrganizationsSearchQueryParams)
    ], CloudresourcemanagerOrganizationsSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerOrganizationsSearchSecurity)
    ], CloudresourcemanagerOrganizationsSearchRequest.prototype, "security", void 0);
    return CloudresourcemanagerOrganizationsSearchRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsSearchRequest };
var CloudresourcemanagerOrganizationsSearchResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsSearchResponse, _super);
    function CloudresourcemanagerOrganizationsSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchOrganizationsResponse)
    ], CloudresourcemanagerOrganizationsSearchResponse.prototype, "searchOrganizationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerOrganizationsSearchResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerOrganizationsSearchResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsSearchResponse };
