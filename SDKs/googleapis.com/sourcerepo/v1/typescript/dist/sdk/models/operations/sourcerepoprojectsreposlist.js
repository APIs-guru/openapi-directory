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
var SourcerepoProjectsReposListPathParams = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposListPathParams, _super);
    function SourcerepoProjectsReposListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposListPathParams.prototype, "name", void 0);
    return SourcerepoProjectsReposListPathParams;
}(SpeakeasyBase));
export { SourcerepoProjectsReposListPathParams };
var SourcerepoProjectsReposListQueryParams = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposListQueryParams, _super);
    function SourcerepoProjectsReposListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], SourcerepoProjectsReposListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SourcerepoProjectsReposListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposListQueryParams.prototype, "uploadProtocol", void 0);
    return SourcerepoProjectsReposListQueryParams;
}(SpeakeasyBase));
export { SourcerepoProjectsReposListQueryParams };
var SourcerepoProjectsReposListSecurityOption1 = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposListSecurityOption1, _super);
    function SourcerepoProjectsReposListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SourcerepoProjectsReposListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SourcerepoProjectsReposListSecurityOption1.prototype, "oauth2c", void 0);
    return SourcerepoProjectsReposListSecurityOption1;
}(SpeakeasyBase));
export { SourcerepoProjectsReposListSecurityOption1 };
var SourcerepoProjectsReposListSecurityOption2 = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposListSecurityOption2, _super);
    function SourcerepoProjectsReposListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SourcerepoProjectsReposListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SourcerepoProjectsReposListSecurityOption2.prototype, "oauth2c", void 0);
    return SourcerepoProjectsReposListSecurityOption2;
}(SpeakeasyBase));
export { SourcerepoProjectsReposListSecurityOption2 };
var SourcerepoProjectsReposListSecurityOption3 = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposListSecurityOption3, _super);
    function SourcerepoProjectsReposListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SourcerepoProjectsReposListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SourcerepoProjectsReposListSecurityOption3.prototype, "oauth2c", void 0);
    return SourcerepoProjectsReposListSecurityOption3;
}(SpeakeasyBase));
export { SourcerepoProjectsReposListSecurityOption3 };
var SourcerepoProjectsReposListSecurityOption4 = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposListSecurityOption4, _super);
    function SourcerepoProjectsReposListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SourcerepoProjectsReposListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SourcerepoProjectsReposListSecurityOption4.prototype, "oauth2c", void 0);
    return SourcerepoProjectsReposListSecurityOption4;
}(SpeakeasyBase));
export { SourcerepoProjectsReposListSecurityOption4 };
var SourcerepoProjectsReposListSecurity = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposListSecurity, _super);
    function SourcerepoProjectsReposListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SourcerepoProjectsReposListSecurityOption1)
    ], SourcerepoProjectsReposListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SourcerepoProjectsReposListSecurityOption2)
    ], SourcerepoProjectsReposListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SourcerepoProjectsReposListSecurityOption3)
    ], SourcerepoProjectsReposListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SourcerepoProjectsReposListSecurityOption4)
    ], SourcerepoProjectsReposListSecurity.prototype, "option4", void 0);
    return SourcerepoProjectsReposListSecurity;
}(SpeakeasyBase));
export { SourcerepoProjectsReposListSecurity };
var SourcerepoProjectsReposListRequest = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposListRequest, _super);
    function SourcerepoProjectsReposListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SourcerepoProjectsReposListPathParams)
    ], SourcerepoProjectsReposListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SourcerepoProjectsReposListQueryParams)
    ], SourcerepoProjectsReposListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SourcerepoProjectsReposListSecurity)
    ], SourcerepoProjectsReposListRequest.prototype, "security", void 0);
    return SourcerepoProjectsReposListRequest;
}(SpeakeasyBase));
export { SourcerepoProjectsReposListRequest };
var SourcerepoProjectsReposListResponse = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposListResponse, _super);
    function SourcerepoProjectsReposListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListReposResponse)
    ], SourcerepoProjectsReposListResponse.prototype, "listReposResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SourcerepoProjectsReposListResponse.prototype, "statusCode", void 0);
    return SourcerepoProjectsReposListResponse;
}(SpeakeasyBase));
export { SourcerepoProjectsReposListResponse };
