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
var FirebasehostingSitesVersionsListPathParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsListPathParams, _super);
    function FirebasehostingSitesVersionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsListPathParams.prototype, "parent", void 0);
    return FirebasehostingSitesVersionsListPathParams;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsListPathParams };
var FirebasehostingSitesVersionsListQueryParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsListQueryParams, _super);
    function FirebasehostingSitesVersionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FirebasehostingSitesVersionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasehostingSitesVersionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsListQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasehostingSitesVersionsListQueryParams;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsListQueryParams };
var FirebasehostingSitesVersionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsListSecurityOption1, _super);
    function FirebasehostingSitesVersionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesVersionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesVersionsListSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasehostingSitesVersionsListSecurityOption1;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsListSecurityOption1 };
var FirebasehostingSitesVersionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsListSecurityOption2, _super);
    function FirebasehostingSitesVersionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesVersionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesVersionsListSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasehostingSitesVersionsListSecurityOption2;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsListSecurityOption2 };
var FirebasehostingSitesVersionsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsListSecurityOption3, _super);
    function FirebasehostingSitesVersionsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesVersionsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesVersionsListSecurityOption3.prototype, "oauth2c", void 0);
    return FirebasehostingSitesVersionsListSecurityOption3;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsListSecurityOption3 };
var FirebasehostingSitesVersionsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsListSecurityOption4, _super);
    function FirebasehostingSitesVersionsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesVersionsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesVersionsListSecurityOption4.prototype, "oauth2c", void 0);
    return FirebasehostingSitesVersionsListSecurityOption4;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsListSecurityOption4 };
var FirebasehostingSitesVersionsListSecurity = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsListSecurity, _super);
    function FirebasehostingSitesVersionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesVersionsListSecurityOption1)
    ], FirebasehostingSitesVersionsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesVersionsListSecurityOption2)
    ], FirebasehostingSitesVersionsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesVersionsListSecurityOption3)
    ], FirebasehostingSitesVersionsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesVersionsListSecurityOption4)
    ], FirebasehostingSitesVersionsListSecurity.prototype, "option4", void 0);
    return FirebasehostingSitesVersionsListSecurity;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsListSecurity };
var FirebasehostingSitesVersionsListRequest = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsListRequest, _super);
    function FirebasehostingSitesVersionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesVersionsListPathParams)
    ], FirebasehostingSitesVersionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesVersionsListQueryParams)
    ], FirebasehostingSitesVersionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesVersionsListSecurity)
    ], FirebasehostingSitesVersionsListRequest.prototype, "security", void 0);
    return FirebasehostingSitesVersionsListRequest;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsListRequest };
var FirebasehostingSitesVersionsListResponse = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsListResponse, _super);
    function FirebasehostingSitesVersionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListVersionsResponse)
    ], FirebasehostingSitesVersionsListResponse.prototype, "listVersionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebasehostingSitesVersionsListResponse.prototype, "statusCode", void 0);
    return FirebasehostingSitesVersionsListResponse;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsListResponse };
