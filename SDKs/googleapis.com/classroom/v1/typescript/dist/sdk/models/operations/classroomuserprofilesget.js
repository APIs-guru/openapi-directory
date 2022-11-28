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
var ClassroomUserProfilesGetPathParams = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGetPathParams, _super);
    function ClassroomUserProfilesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGetPathParams.prototype, "userId", void 0);
    return ClassroomUserProfilesGetPathParams;
}(SpeakeasyBase));
export { ClassroomUserProfilesGetPathParams };
var ClassroomUserProfilesGetQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGetQueryParams, _super);
    function ClassroomUserProfilesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomUserProfilesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGetQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomUserProfilesGetQueryParams;
}(SpeakeasyBase));
export { ClassroomUserProfilesGetQueryParams };
var ClassroomUserProfilesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGetSecurityOption1, _super);
    function ClassroomUserProfilesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomUserProfilesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomUserProfilesGetSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomUserProfilesGetSecurityOption1;
}(SpeakeasyBase));
export { ClassroomUserProfilesGetSecurityOption1 };
var ClassroomUserProfilesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGetSecurityOption2, _super);
    function ClassroomUserProfilesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomUserProfilesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomUserProfilesGetSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomUserProfilesGetSecurityOption2;
}(SpeakeasyBase));
export { ClassroomUserProfilesGetSecurityOption2 };
var ClassroomUserProfilesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGetSecurityOption3, _super);
    function ClassroomUserProfilesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomUserProfilesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomUserProfilesGetSecurityOption3.prototype, "oauth2c", void 0);
    return ClassroomUserProfilesGetSecurityOption3;
}(SpeakeasyBase));
export { ClassroomUserProfilesGetSecurityOption3 };
var ClassroomUserProfilesGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGetSecurityOption4, _super);
    function ClassroomUserProfilesGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomUserProfilesGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomUserProfilesGetSecurityOption4.prototype, "oauth2c", void 0);
    return ClassroomUserProfilesGetSecurityOption4;
}(SpeakeasyBase));
export { ClassroomUserProfilesGetSecurityOption4 };
var ClassroomUserProfilesGetSecurity = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGetSecurity, _super);
    function ClassroomUserProfilesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomUserProfilesGetSecurityOption1)
    ], ClassroomUserProfilesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomUserProfilesGetSecurityOption2)
    ], ClassroomUserProfilesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomUserProfilesGetSecurityOption3)
    ], ClassroomUserProfilesGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomUserProfilesGetSecurityOption4)
    ], ClassroomUserProfilesGetSecurity.prototype, "option4", void 0);
    return ClassroomUserProfilesGetSecurity;
}(SpeakeasyBase));
export { ClassroomUserProfilesGetSecurity };
var ClassroomUserProfilesGetRequest = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGetRequest, _super);
    function ClassroomUserProfilesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomUserProfilesGetPathParams)
    ], ClassroomUserProfilesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomUserProfilesGetQueryParams)
    ], ClassroomUserProfilesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomUserProfilesGetSecurity)
    ], ClassroomUserProfilesGetRequest.prototype, "security", void 0);
    return ClassroomUserProfilesGetRequest;
}(SpeakeasyBase));
export { ClassroomUserProfilesGetRequest };
var ClassroomUserProfilesGetResponse = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGetResponse, _super);
    function ClassroomUserProfilesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClassroomUserProfilesGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserProfile)
    ], ClassroomUserProfilesGetResponse.prototype, "userProfile", void 0);
    return ClassroomUserProfilesGetResponse;
}(SpeakeasyBase));
export { ClassroomUserProfilesGetResponse };
