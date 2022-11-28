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
var FirebasehostingSitesReleasesListPathParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesReleasesListPathParams, _super);
    function FirebasehostingSitesReleasesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesListPathParams.prototype, "parent", void 0);
    return FirebasehostingSitesReleasesListPathParams;
}(SpeakeasyBase));
export { FirebasehostingSitesReleasesListPathParams };
var FirebasehostingSitesReleasesListQueryParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesReleasesListQueryParams, _super);
    function FirebasehostingSitesReleasesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FirebasehostingSitesReleasesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasehostingSitesReleasesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesListQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasehostingSitesReleasesListQueryParams;
}(SpeakeasyBase));
export { FirebasehostingSitesReleasesListQueryParams };
var FirebasehostingSitesReleasesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesReleasesListSecurityOption1, _super);
    function FirebasehostingSitesReleasesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesReleasesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesReleasesListSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasehostingSitesReleasesListSecurityOption1;
}(SpeakeasyBase));
export { FirebasehostingSitesReleasesListSecurityOption1 };
var FirebasehostingSitesReleasesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesReleasesListSecurityOption2, _super);
    function FirebasehostingSitesReleasesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesReleasesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesReleasesListSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasehostingSitesReleasesListSecurityOption2;
}(SpeakeasyBase));
export { FirebasehostingSitesReleasesListSecurityOption2 };
var FirebasehostingSitesReleasesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesReleasesListSecurityOption3, _super);
    function FirebasehostingSitesReleasesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesReleasesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesReleasesListSecurityOption3.prototype, "oauth2c", void 0);
    return FirebasehostingSitesReleasesListSecurityOption3;
}(SpeakeasyBase));
export { FirebasehostingSitesReleasesListSecurityOption3 };
var FirebasehostingSitesReleasesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesReleasesListSecurityOption4, _super);
    function FirebasehostingSitesReleasesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesReleasesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesReleasesListSecurityOption4.prototype, "oauth2c", void 0);
    return FirebasehostingSitesReleasesListSecurityOption4;
}(SpeakeasyBase));
export { FirebasehostingSitesReleasesListSecurityOption4 };
var FirebasehostingSitesReleasesListSecurity = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesReleasesListSecurity, _super);
    function FirebasehostingSitesReleasesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesReleasesListSecurityOption1)
    ], FirebasehostingSitesReleasesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesReleasesListSecurityOption2)
    ], FirebasehostingSitesReleasesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesReleasesListSecurityOption3)
    ], FirebasehostingSitesReleasesListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesReleasesListSecurityOption4)
    ], FirebasehostingSitesReleasesListSecurity.prototype, "option4", void 0);
    return FirebasehostingSitesReleasesListSecurity;
}(SpeakeasyBase));
export { FirebasehostingSitesReleasesListSecurity };
var FirebasehostingSitesReleasesListRequest = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesReleasesListRequest, _super);
    function FirebasehostingSitesReleasesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesReleasesListPathParams)
    ], FirebasehostingSitesReleasesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesReleasesListQueryParams)
    ], FirebasehostingSitesReleasesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesReleasesListSecurity)
    ], FirebasehostingSitesReleasesListRequest.prototype, "security", void 0);
    return FirebasehostingSitesReleasesListRequest;
}(SpeakeasyBase));
export { FirebasehostingSitesReleasesListRequest };
var FirebasehostingSitesReleasesListResponse = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesReleasesListResponse, _super);
    function FirebasehostingSitesReleasesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebasehostingSitesReleasesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListReleasesResponse)
    ], FirebasehostingSitesReleasesListResponse.prototype, "listReleasesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebasehostingSitesReleasesListResponse.prototype, "statusCode", void 0);
    return FirebasehostingSitesReleasesListResponse;
}(SpeakeasyBase));
export { FirebasehostingSitesReleasesListResponse };
