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
var FirebasehostingSitesDomainsCreatePathParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsCreatePathParams, _super);
    function FirebasehostingSitesDomainsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsCreatePathParams.prototype, "parent", void 0);
    return FirebasehostingSitesDomainsCreatePathParams;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsCreatePathParams };
var FirebasehostingSitesDomainsCreateQueryParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsCreateQueryParams, _super);
    function FirebasehostingSitesDomainsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasehostingSitesDomainsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasehostingSitesDomainsCreateQueryParams;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsCreateQueryParams };
var FirebasehostingSitesDomainsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsCreateSecurityOption1, _super);
    function FirebasehostingSitesDomainsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesDomainsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesDomainsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasehostingSitesDomainsCreateSecurityOption1;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsCreateSecurityOption1 };
var FirebasehostingSitesDomainsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsCreateSecurityOption2, _super);
    function FirebasehostingSitesDomainsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesDomainsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesDomainsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasehostingSitesDomainsCreateSecurityOption2;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsCreateSecurityOption2 };
var FirebasehostingSitesDomainsCreateSecurity = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsCreateSecurity, _super);
    function FirebasehostingSitesDomainsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesDomainsCreateSecurityOption1)
    ], FirebasehostingSitesDomainsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesDomainsCreateSecurityOption2)
    ], FirebasehostingSitesDomainsCreateSecurity.prototype, "option2", void 0);
    return FirebasehostingSitesDomainsCreateSecurity;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsCreateSecurity };
var FirebasehostingSitesDomainsCreateRequest = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsCreateRequest, _super);
    function FirebasehostingSitesDomainsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesDomainsCreatePathParams)
    ], FirebasehostingSitesDomainsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesDomainsCreateQueryParams)
    ], FirebasehostingSitesDomainsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Domain)
    ], FirebasehostingSitesDomainsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesDomainsCreateSecurity)
    ], FirebasehostingSitesDomainsCreateRequest.prototype, "security", void 0);
    return FirebasehostingSitesDomainsCreateRequest;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsCreateRequest };
var FirebasehostingSitesDomainsCreateResponse = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsCreateResponse, _super);
    function FirebasehostingSitesDomainsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Domain)
    ], FirebasehostingSitesDomainsCreateResponse.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebasehostingSitesDomainsCreateResponse.prototype, "statusCode", void 0);
    return FirebasehostingSitesDomainsCreateResponse;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsCreateResponse };
