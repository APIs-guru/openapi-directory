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
var CloudresourcemanagerTagValuesListQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesListQueryParams, _super);
    function CloudresourcemanagerTagValuesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudresourcemanagerTagValuesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=parent" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesListQueryParams.prototype, "parent", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerTagValuesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerTagValuesListQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesListQueryParams };
var CloudresourcemanagerTagValuesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesListSecurityOption1, _super);
    function CloudresourcemanagerTagValuesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerTagValuesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerTagValuesListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerTagValuesListSecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesListSecurityOption1 };
var CloudresourcemanagerTagValuesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesListSecurityOption2, _super);
    function CloudresourcemanagerTagValuesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerTagValuesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerTagValuesListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerTagValuesListSecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesListSecurityOption2 };
var CloudresourcemanagerTagValuesListSecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesListSecurity, _super);
    function CloudresourcemanagerTagValuesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerTagValuesListSecurityOption1)
    ], CloudresourcemanagerTagValuesListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerTagValuesListSecurityOption2)
    ], CloudresourcemanagerTagValuesListSecurity.prototype, "option2", void 0);
    return CloudresourcemanagerTagValuesListSecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesListSecurity };
var CloudresourcemanagerTagValuesListRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesListRequest, _super);
    function CloudresourcemanagerTagValuesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerTagValuesListQueryParams)
    ], CloudresourcemanagerTagValuesListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerTagValuesListSecurity)
    ], CloudresourcemanagerTagValuesListRequest.prototype, "security", void 0);
    return CloudresourcemanagerTagValuesListRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesListRequest };
var CloudresourcemanagerTagValuesListResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesListResponse, _super);
    function CloudresourcemanagerTagValuesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListTagValuesResponse)
    ], CloudresourcemanagerTagValuesListResponse.prototype, "listTagValuesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerTagValuesListResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerTagValuesListResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesListResponse };
