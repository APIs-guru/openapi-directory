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
var FirebasehostingProjectsSitesCreatePathParams = /** @class */ (function (_super) {
    __extends(FirebasehostingProjectsSitesCreatePathParams, _super);
    function FirebasehostingProjectsSitesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesCreatePathParams.prototype, "parent", void 0);
    return FirebasehostingProjectsSitesCreatePathParams;
}(SpeakeasyBase));
export { FirebasehostingProjectsSitesCreatePathParams };
var FirebasehostingProjectsSitesCreateQueryParams = /** @class */ (function (_super) {
    __extends(FirebasehostingProjectsSitesCreateQueryParams, _super);
    function FirebasehostingProjectsSitesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasehostingProjectsSitesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=siteId" }),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesCreateQueryParams.prototype, "siteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasehostingProjectsSitesCreateQueryParams;
}(SpeakeasyBase));
export { FirebasehostingProjectsSitesCreateQueryParams };
var FirebasehostingProjectsSitesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasehostingProjectsSitesCreateSecurityOption1, _super);
    function FirebasehostingProjectsSitesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingProjectsSitesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingProjectsSitesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasehostingProjectsSitesCreateSecurityOption1;
}(SpeakeasyBase));
export { FirebasehostingProjectsSitesCreateSecurityOption1 };
var FirebasehostingProjectsSitesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasehostingProjectsSitesCreateSecurityOption2, _super);
    function FirebasehostingProjectsSitesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingProjectsSitesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingProjectsSitesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasehostingProjectsSitesCreateSecurityOption2;
}(SpeakeasyBase));
export { FirebasehostingProjectsSitesCreateSecurityOption2 };
var FirebasehostingProjectsSitesCreateSecurity = /** @class */ (function (_super) {
    __extends(FirebasehostingProjectsSitesCreateSecurity, _super);
    function FirebasehostingProjectsSitesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingProjectsSitesCreateSecurityOption1)
    ], FirebasehostingProjectsSitesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingProjectsSitesCreateSecurityOption2)
    ], FirebasehostingProjectsSitesCreateSecurity.prototype, "option2", void 0);
    return FirebasehostingProjectsSitesCreateSecurity;
}(SpeakeasyBase));
export { FirebasehostingProjectsSitesCreateSecurity };
var FirebasehostingProjectsSitesCreateRequest = /** @class */ (function (_super) {
    __extends(FirebasehostingProjectsSitesCreateRequest, _super);
    function FirebasehostingProjectsSitesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingProjectsSitesCreatePathParams)
    ], FirebasehostingProjectsSitesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingProjectsSitesCreateQueryParams)
    ], FirebasehostingProjectsSitesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SiteInput)
    ], FirebasehostingProjectsSitesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingProjectsSitesCreateSecurity)
    ], FirebasehostingProjectsSitesCreateRequest.prototype, "security", void 0);
    return FirebasehostingProjectsSitesCreateRequest;
}(SpeakeasyBase));
export { FirebasehostingProjectsSitesCreateRequest };
var FirebasehostingProjectsSitesCreateResponse = /** @class */ (function (_super) {
    __extends(FirebasehostingProjectsSitesCreateResponse, _super);
    function FirebasehostingProjectsSitesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Site)
    ], FirebasehostingProjectsSitesCreateResponse.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebasehostingProjectsSitesCreateResponse.prototype, "statusCode", void 0);
    return FirebasehostingProjectsSitesCreateResponse;
}(SpeakeasyBase));
export { FirebasehostingProjectsSitesCreateResponse };
