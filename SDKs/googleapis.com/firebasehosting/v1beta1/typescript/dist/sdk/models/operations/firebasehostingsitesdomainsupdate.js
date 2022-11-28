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
var FirebasehostingSitesDomainsUpdatePathParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsUpdatePathParams, _super);
    function FirebasehostingSitesDomainsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsUpdatePathParams.prototype, "name", void 0);
    return FirebasehostingSitesDomainsUpdatePathParams;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsUpdatePathParams };
var FirebasehostingSitesDomainsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsUpdateQueryParams, _super);
    function FirebasehostingSitesDomainsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasehostingSitesDomainsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasehostingSitesDomainsUpdateQueryParams;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsUpdateQueryParams };
var FirebasehostingSitesDomainsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsUpdateSecurityOption1, _super);
    function FirebasehostingSitesDomainsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesDomainsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesDomainsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasehostingSitesDomainsUpdateSecurityOption1;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsUpdateSecurityOption1 };
var FirebasehostingSitesDomainsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsUpdateSecurityOption2, _super);
    function FirebasehostingSitesDomainsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesDomainsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesDomainsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasehostingSitesDomainsUpdateSecurityOption2;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsUpdateSecurityOption2 };
var FirebasehostingSitesDomainsUpdateSecurity = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsUpdateSecurity, _super);
    function FirebasehostingSitesDomainsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesDomainsUpdateSecurityOption1)
    ], FirebasehostingSitesDomainsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesDomainsUpdateSecurityOption2)
    ], FirebasehostingSitesDomainsUpdateSecurity.prototype, "option2", void 0);
    return FirebasehostingSitesDomainsUpdateSecurity;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsUpdateSecurity };
var FirebasehostingSitesDomainsUpdateRequest = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsUpdateRequest, _super);
    function FirebasehostingSitesDomainsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesDomainsUpdatePathParams)
    ], FirebasehostingSitesDomainsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesDomainsUpdateQueryParams)
    ], FirebasehostingSitesDomainsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Domain)
    ], FirebasehostingSitesDomainsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesDomainsUpdateSecurity)
    ], FirebasehostingSitesDomainsUpdateRequest.prototype, "security", void 0);
    return FirebasehostingSitesDomainsUpdateRequest;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsUpdateRequest };
var FirebasehostingSitesDomainsUpdateResponse = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsUpdateResponse, _super);
    function FirebasehostingSitesDomainsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Domain)
    ], FirebasehostingSitesDomainsUpdateResponse.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebasehostingSitesDomainsUpdateResponse.prototype, "statusCode", void 0);
    return FirebasehostingSitesDomainsUpdateResponse;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsUpdateResponse };
