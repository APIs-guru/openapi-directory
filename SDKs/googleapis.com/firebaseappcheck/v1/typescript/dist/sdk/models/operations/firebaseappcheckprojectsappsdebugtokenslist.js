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
var FirebaseappcheckProjectsAppsDebugTokensListPathParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDebugTokensListPathParams, _super);
    function FirebaseappcheckProjectsAppsDebugTokensListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensListPathParams.prototype, "parent", void 0);
    return FirebaseappcheckProjectsAppsDebugTokensListPathParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDebugTokensListPathParams };
var FirebaseappcheckProjectsAppsDebugTokensListQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDebugTokensListQueryParams, _super);
    function FirebaseappcheckProjectsAppsDebugTokensListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsAppsDebugTokensListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseappcheckProjectsAppsDebugTokensListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensListQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseappcheckProjectsAppsDebugTokensListQueryParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDebugTokensListQueryParams };
var FirebaseappcheckProjectsAppsDebugTokensListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDebugTokensListSecurityOption1, _super);
    function FirebaseappcheckProjectsAppsDebugTokensListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsDebugTokensListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsDebugTokensListSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsDebugTokensListSecurityOption1;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDebugTokensListSecurityOption1 };
var FirebaseappcheckProjectsAppsDebugTokensListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDebugTokensListSecurityOption2, _super);
    function FirebaseappcheckProjectsAppsDebugTokensListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsAppsDebugTokensListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsAppsDebugTokensListSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsAppsDebugTokensListSecurityOption2;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDebugTokensListSecurityOption2 };
var FirebaseappcheckProjectsAppsDebugTokensListSecurity = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDebugTokensListSecurity, _super);
    function FirebaseappcheckProjectsAppsDebugTokensListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsDebugTokensListSecurityOption1)
    ], FirebaseappcheckProjectsAppsDebugTokensListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsAppsDebugTokensListSecurityOption2)
    ], FirebaseappcheckProjectsAppsDebugTokensListSecurity.prototype, "option2", void 0);
    return FirebaseappcheckProjectsAppsDebugTokensListSecurity;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDebugTokensListSecurity };
var FirebaseappcheckProjectsAppsDebugTokensListRequest = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDebugTokensListRequest, _super);
    function FirebaseappcheckProjectsAppsDebugTokensListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsDebugTokensListPathParams)
    ], FirebaseappcheckProjectsAppsDebugTokensListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsDebugTokensListQueryParams)
    ], FirebaseappcheckProjectsAppsDebugTokensListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseappcheckProjectsAppsDebugTokensListSecurity)
    ], FirebaseappcheckProjectsAppsDebugTokensListRequest.prototype, "security", void 0);
    return FirebaseappcheckProjectsAppsDebugTokensListRequest;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDebugTokensListRequest };
var FirebaseappcheckProjectsAppsDebugTokensListResponse = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsAppsDebugTokensListResponse, _super);
    function FirebaseappcheckProjectsAppsDebugTokensListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsAppsDebugTokensListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1ListDebugTokensResponse)
    ], FirebaseappcheckProjectsAppsDebugTokensListResponse.prototype, "googleFirebaseAppcheckV1ListDebugTokensResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsAppsDebugTokensListResponse.prototype, "statusCode", void 0);
    return FirebaseappcheckProjectsAppsDebugTokensListResponse;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsAppsDebugTokensListResponse };
