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
var ClassroomUserProfilesGuardianInvitationsGetPathParams = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardianInvitationsGetPathParams, _super);
    function ClassroomUserProfilesGuardianInvitationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invitationId" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsGetPathParams.prototype, "invitationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=studentId" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsGetPathParams.prototype, "studentId", void 0);
    return ClassroomUserProfilesGuardianInvitationsGetPathParams;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardianInvitationsGetPathParams };
var ClassroomUserProfilesGuardianInvitationsGetQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardianInvitationsGetQueryParams, _super);
    function ClassroomUserProfilesGuardianInvitationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomUserProfilesGuardianInvitationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomUserProfilesGuardianInvitationsGetQueryParams;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardianInvitationsGetQueryParams };
var ClassroomUserProfilesGuardianInvitationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardianInvitationsGetSecurityOption1, _super);
    function ClassroomUserProfilesGuardianInvitationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomUserProfilesGuardianInvitationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomUserProfilesGuardianInvitationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomUserProfilesGuardianInvitationsGetSecurityOption1;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardianInvitationsGetSecurityOption1 };
var ClassroomUserProfilesGuardianInvitationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardianInvitationsGetSecurityOption2, _super);
    function ClassroomUserProfilesGuardianInvitationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomUserProfilesGuardianInvitationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomUserProfilesGuardianInvitationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomUserProfilesGuardianInvitationsGetSecurityOption2;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardianInvitationsGetSecurityOption2 };
var ClassroomUserProfilesGuardianInvitationsGetSecurity = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardianInvitationsGetSecurity, _super);
    function ClassroomUserProfilesGuardianInvitationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomUserProfilesGuardianInvitationsGetSecurityOption1)
    ], ClassroomUserProfilesGuardianInvitationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomUserProfilesGuardianInvitationsGetSecurityOption2)
    ], ClassroomUserProfilesGuardianInvitationsGetSecurity.prototype, "option2", void 0);
    return ClassroomUserProfilesGuardianInvitationsGetSecurity;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardianInvitationsGetSecurity };
var ClassroomUserProfilesGuardianInvitationsGetRequest = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardianInvitationsGetRequest, _super);
    function ClassroomUserProfilesGuardianInvitationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomUserProfilesGuardianInvitationsGetPathParams)
    ], ClassroomUserProfilesGuardianInvitationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomUserProfilesGuardianInvitationsGetQueryParams)
    ], ClassroomUserProfilesGuardianInvitationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomUserProfilesGuardianInvitationsGetSecurity)
    ], ClassroomUserProfilesGuardianInvitationsGetRequest.prototype, "security", void 0);
    return ClassroomUserProfilesGuardianInvitationsGetRequest;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardianInvitationsGetRequest };
var ClassroomUserProfilesGuardianInvitationsGetResponse = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardianInvitationsGetResponse, _super);
    function ClassroomUserProfilesGuardianInvitationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GuardianInvitation)
    ], ClassroomUserProfilesGuardianInvitationsGetResponse.prototype, "guardianInvitation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClassroomUserProfilesGuardianInvitationsGetResponse.prototype, "statusCode", void 0);
    return ClassroomUserProfilesGuardianInvitationsGetResponse;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardianInvitationsGetResponse };
