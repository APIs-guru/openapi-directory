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
var FirebasehostingSitesDomainsListPathParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsListPathParams, _super);
    function FirebasehostingSitesDomainsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsListPathParams.prototype, "parent", void 0);
    return FirebasehostingSitesDomainsListPathParams;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsListPathParams };
var FirebasehostingSitesDomainsListQueryParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsListQueryParams, _super);
    function FirebasehostingSitesDomainsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FirebasehostingSitesDomainsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasehostingSitesDomainsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsListQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasehostingSitesDomainsListQueryParams;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsListQueryParams };
var FirebasehostingSitesDomainsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsListSecurityOption1, _super);
    function FirebasehostingSitesDomainsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesDomainsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesDomainsListSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasehostingSitesDomainsListSecurityOption1;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsListSecurityOption1 };
var FirebasehostingSitesDomainsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsListSecurityOption2, _super);
    function FirebasehostingSitesDomainsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesDomainsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesDomainsListSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasehostingSitesDomainsListSecurityOption2;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsListSecurityOption2 };
var FirebasehostingSitesDomainsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsListSecurityOption3, _super);
    function FirebasehostingSitesDomainsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesDomainsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesDomainsListSecurityOption3.prototype, "oauth2c", void 0);
    return FirebasehostingSitesDomainsListSecurityOption3;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsListSecurityOption3 };
var FirebasehostingSitesDomainsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsListSecurityOption4, _super);
    function FirebasehostingSitesDomainsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesDomainsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesDomainsListSecurityOption4.prototype, "oauth2c", void 0);
    return FirebasehostingSitesDomainsListSecurityOption4;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsListSecurityOption4 };
var FirebasehostingSitesDomainsListSecurity = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsListSecurity, _super);
    function FirebasehostingSitesDomainsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesDomainsListSecurityOption1)
    ], FirebasehostingSitesDomainsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesDomainsListSecurityOption2)
    ], FirebasehostingSitesDomainsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesDomainsListSecurityOption3)
    ], FirebasehostingSitesDomainsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesDomainsListSecurityOption4)
    ], FirebasehostingSitesDomainsListSecurity.prototype, "option4", void 0);
    return FirebasehostingSitesDomainsListSecurity;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsListSecurity };
var FirebasehostingSitesDomainsListRequest = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsListRequest, _super);
    function FirebasehostingSitesDomainsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesDomainsListPathParams)
    ], FirebasehostingSitesDomainsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesDomainsListQueryParams)
    ], FirebasehostingSitesDomainsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesDomainsListSecurity)
    ], FirebasehostingSitesDomainsListRequest.prototype, "security", void 0);
    return FirebasehostingSitesDomainsListRequest;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsListRequest };
var FirebasehostingSitesDomainsListResponse = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsListResponse, _super);
    function FirebasehostingSitesDomainsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDomainsResponse)
    ], FirebasehostingSitesDomainsListResponse.prototype, "listDomainsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebasehostingSitesDomainsListResponse.prototype, "statusCode", void 0);
    return FirebasehostingSitesDomainsListResponse;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsListResponse };
