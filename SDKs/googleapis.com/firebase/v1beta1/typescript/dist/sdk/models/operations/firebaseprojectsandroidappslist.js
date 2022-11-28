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
var FirebaseProjectsAndroidAppsListPathParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsListPathParams, _super);
    function FirebaseProjectsAndroidAppsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsListPathParams.prototype, "parent", void 0);
    return FirebaseProjectsAndroidAppsListPathParams;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsListPathParams };
var FirebaseProjectsAndroidAppsListQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsListQueryParams, _super);
    function FirebaseProjectsAndroidAppsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FirebaseProjectsAndroidAppsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseProjectsAndroidAppsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showDeleted" }),
        __metadata("design:type", Boolean)
    ], FirebaseProjectsAndroidAppsListQueryParams.prototype, "showDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsListQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseProjectsAndroidAppsListQueryParams;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsListQueryParams };
var FirebaseProjectsAndroidAppsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsListSecurityOption1, _super);
    function FirebaseProjectsAndroidAppsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsAndroidAppsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsAndroidAppsListSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseProjectsAndroidAppsListSecurityOption1;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsListSecurityOption1 };
var FirebaseProjectsAndroidAppsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsListSecurityOption2, _super);
    function FirebaseProjectsAndroidAppsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsAndroidAppsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsAndroidAppsListSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseProjectsAndroidAppsListSecurityOption2;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsListSecurityOption2 };
var FirebaseProjectsAndroidAppsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsListSecurityOption3, _super);
    function FirebaseProjectsAndroidAppsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsAndroidAppsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsAndroidAppsListSecurityOption3.prototype, "oauth2c", void 0);
    return FirebaseProjectsAndroidAppsListSecurityOption3;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsListSecurityOption3 };
var FirebaseProjectsAndroidAppsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsListSecurityOption4, _super);
    function FirebaseProjectsAndroidAppsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsAndroidAppsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsAndroidAppsListSecurityOption4.prototype, "oauth2c", void 0);
    return FirebaseProjectsAndroidAppsListSecurityOption4;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsListSecurityOption4 };
var FirebaseProjectsAndroidAppsListSecurity = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsListSecurity, _super);
    function FirebaseProjectsAndroidAppsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsAndroidAppsListSecurityOption1)
    ], FirebaseProjectsAndroidAppsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsAndroidAppsListSecurityOption2)
    ], FirebaseProjectsAndroidAppsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsAndroidAppsListSecurityOption3)
    ], FirebaseProjectsAndroidAppsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsAndroidAppsListSecurityOption4)
    ], FirebaseProjectsAndroidAppsListSecurity.prototype, "option4", void 0);
    return FirebaseProjectsAndroidAppsListSecurity;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsListSecurity };
var FirebaseProjectsAndroidAppsListRequest = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsListRequest, _super);
    function FirebaseProjectsAndroidAppsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseProjectsAndroidAppsListPathParams)
    ], FirebaseProjectsAndroidAppsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseProjectsAndroidAppsListQueryParams)
    ], FirebaseProjectsAndroidAppsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseProjectsAndroidAppsListSecurity)
    ], FirebaseProjectsAndroidAppsListRequest.prototype, "security", void 0);
    return FirebaseProjectsAndroidAppsListRequest;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsListRequest };
var FirebaseProjectsAndroidAppsListResponse = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsListResponse, _super);
    function FirebaseProjectsAndroidAppsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAndroidAppsResponse)
    ], FirebaseProjectsAndroidAppsListResponse.prototype, "listAndroidAppsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaseProjectsAndroidAppsListResponse.prototype, "statusCode", void 0);
    return FirebaseProjectsAndroidAppsListResponse;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsListResponse };
