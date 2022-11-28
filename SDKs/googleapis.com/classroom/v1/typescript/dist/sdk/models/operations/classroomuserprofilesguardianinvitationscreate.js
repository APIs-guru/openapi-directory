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
var ClassroomUserProfilesGuardianInvitationsCreatePathParams = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardianInvitationsCreatePathParams, _super);
    function ClassroomUserProfilesGuardianInvitationsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=studentId" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsCreatePathParams.prototype, "studentId", void 0);
    return ClassroomUserProfilesGuardianInvitationsCreatePathParams;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardianInvitationsCreatePathParams };
var ClassroomUserProfilesGuardianInvitationsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardianInvitationsCreateQueryParams, _super);
    function ClassroomUserProfilesGuardianInvitationsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomUserProfilesGuardianInvitationsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomUserProfilesGuardianInvitationsCreateQueryParams;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardianInvitationsCreateQueryParams };
var ClassroomUserProfilesGuardianInvitationsCreateSecurity = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardianInvitationsCreateSecurity, _super);
    function ClassroomUserProfilesGuardianInvitationsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomUserProfilesGuardianInvitationsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomUserProfilesGuardianInvitationsCreateSecurity.prototype, "oauth2c", void 0);
    return ClassroomUserProfilesGuardianInvitationsCreateSecurity;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardianInvitationsCreateSecurity };
var ClassroomUserProfilesGuardianInvitationsCreateRequest = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardianInvitationsCreateRequest, _super);
    function ClassroomUserProfilesGuardianInvitationsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomUserProfilesGuardianInvitationsCreatePathParams)
    ], ClassroomUserProfilesGuardianInvitationsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomUserProfilesGuardianInvitationsCreateQueryParams)
    ], ClassroomUserProfilesGuardianInvitationsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GuardianInvitation)
    ], ClassroomUserProfilesGuardianInvitationsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomUserProfilesGuardianInvitationsCreateSecurity)
    ], ClassroomUserProfilesGuardianInvitationsCreateRequest.prototype, "security", void 0);
    return ClassroomUserProfilesGuardianInvitationsCreateRequest;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardianInvitationsCreateRequest };
var ClassroomUserProfilesGuardianInvitationsCreateResponse = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardianInvitationsCreateResponse, _super);
    function ClassroomUserProfilesGuardianInvitationsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GuardianInvitation)
    ], ClassroomUserProfilesGuardianInvitationsCreateResponse.prototype, "guardianInvitation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClassroomUserProfilesGuardianInvitationsCreateResponse.prototype, "statusCode", void 0);
    return ClassroomUserProfilesGuardianInvitationsCreateResponse;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardianInvitationsCreateResponse };
