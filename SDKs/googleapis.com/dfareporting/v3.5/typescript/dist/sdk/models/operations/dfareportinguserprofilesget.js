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
var DfareportingUserProfilesGetPathParams = /** @class */ (function (_super) {
    __extends(DfareportingUserProfilesGetPathParams, _super);
    function DfareportingUserProfilesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingUserProfilesGetPathParams.prototype, "profileId", void 0);
    return DfareportingUserProfilesGetPathParams;
}(SpeakeasyBase));
export { DfareportingUserProfilesGetPathParams };
var DfareportingUserProfilesGetQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingUserProfilesGetQueryParams, _super);
    function DfareportingUserProfilesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingUserProfilesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingUserProfilesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingUserProfilesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingUserProfilesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingUserProfilesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingUserProfilesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingUserProfilesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingUserProfilesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingUserProfilesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingUserProfilesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingUserProfilesGetQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingUserProfilesGetQueryParams;
}(SpeakeasyBase));
export { DfareportingUserProfilesGetQueryParams };
var DfareportingUserProfilesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DfareportingUserProfilesGetSecurityOption1, _super);
    function DfareportingUserProfilesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingUserProfilesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingUserProfilesGetSecurityOption1.prototype, "oauth2c", void 0);
    return DfareportingUserProfilesGetSecurityOption1;
}(SpeakeasyBase));
export { DfareportingUserProfilesGetSecurityOption1 };
var DfareportingUserProfilesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DfareportingUserProfilesGetSecurityOption2, _super);
    function DfareportingUserProfilesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingUserProfilesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingUserProfilesGetSecurityOption2.prototype, "oauth2c", void 0);
    return DfareportingUserProfilesGetSecurityOption2;
}(SpeakeasyBase));
export { DfareportingUserProfilesGetSecurityOption2 };
var DfareportingUserProfilesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DfareportingUserProfilesGetSecurityOption3, _super);
    function DfareportingUserProfilesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingUserProfilesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingUserProfilesGetSecurityOption3.prototype, "oauth2c", void 0);
    return DfareportingUserProfilesGetSecurityOption3;
}(SpeakeasyBase));
export { DfareportingUserProfilesGetSecurityOption3 };
var DfareportingUserProfilesGetSecurity = /** @class */ (function (_super) {
    __extends(DfareportingUserProfilesGetSecurity, _super);
    function DfareportingUserProfilesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DfareportingUserProfilesGetSecurityOption1)
    ], DfareportingUserProfilesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DfareportingUserProfilesGetSecurityOption2)
    ], DfareportingUserProfilesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DfareportingUserProfilesGetSecurityOption3)
    ], DfareportingUserProfilesGetSecurity.prototype, "option3", void 0);
    return DfareportingUserProfilesGetSecurity;
}(SpeakeasyBase));
export { DfareportingUserProfilesGetSecurity };
var DfareportingUserProfilesGetRequest = /** @class */ (function (_super) {
    __extends(DfareportingUserProfilesGetRequest, _super);
    function DfareportingUserProfilesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingUserProfilesGetPathParams)
    ], DfareportingUserProfilesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingUserProfilesGetQueryParams)
    ], DfareportingUserProfilesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingUserProfilesGetSecurity)
    ], DfareportingUserProfilesGetRequest.prototype, "security", void 0);
    return DfareportingUserProfilesGetRequest;
}(SpeakeasyBase));
export { DfareportingUserProfilesGetRequest };
var DfareportingUserProfilesGetResponse = /** @class */ (function (_super) {
    __extends(DfareportingUserProfilesGetResponse, _super);
    function DfareportingUserProfilesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingUserProfilesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingUserProfilesGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserProfile)
    ], DfareportingUserProfilesGetResponse.prototype, "userProfile", void 0);
    return DfareportingUserProfilesGetResponse;
}(SpeakeasyBase));
export { DfareportingUserProfilesGetResponse };
