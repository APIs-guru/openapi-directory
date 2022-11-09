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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var ClassroomUserProfilesGuardianInvitationsListPathParams = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardianInvitationsListPathParams, _super);
    function ClassroomUserProfilesGuardianInvitationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=studentId" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsListPathParams.prototype, "studentId", void 0);
    return ClassroomUserProfilesGuardianInvitationsListPathParams;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardianInvitationsListPathParams };
export var ClassroomUserProfilesGuardianInvitationsListStatesEnum;
(function (ClassroomUserProfilesGuardianInvitationsListStatesEnum) {
    ClassroomUserProfilesGuardianInvitationsListStatesEnum["GuardianInvitationStateUnspecified"] = "GUARDIAN_INVITATION_STATE_UNSPECIFIED";
    ClassroomUserProfilesGuardianInvitationsListStatesEnum["Pending"] = "PENDING";
    ClassroomUserProfilesGuardianInvitationsListStatesEnum["Complete"] = "COMPLETE";
})(ClassroomUserProfilesGuardianInvitationsListStatesEnum || (ClassroomUserProfilesGuardianInvitationsListStatesEnum = {}));
var ClassroomUserProfilesGuardianInvitationsListQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardianInvitationsListQueryParams, _super);
    function ClassroomUserProfilesGuardianInvitationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=invitedEmailAddress" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsListQueryParams.prototype, "invitedEmailAddress", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ClassroomUserProfilesGuardianInvitationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomUserProfilesGuardianInvitationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=states" }),
        __metadata("design:type", Array)
    ], ClassroomUserProfilesGuardianInvitationsListQueryParams.prototype, "states", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsListQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomUserProfilesGuardianInvitationsListQueryParams;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardianInvitationsListQueryParams };
var ClassroomUserProfilesGuardianInvitationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardianInvitationsListSecurityOption1, _super);
    function ClassroomUserProfilesGuardianInvitationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomUserProfilesGuardianInvitationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomUserProfilesGuardianInvitationsListSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomUserProfilesGuardianInvitationsListSecurityOption1;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardianInvitationsListSecurityOption1 };
var ClassroomUserProfilesGuardianInvitationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardianInvitationsListSecurityOption2, _super);
    function ClassroomUserProfilesGuardianInvitationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomUserProfilesGuardianInvitationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomUserProfilesGuardianInvitationsListSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomUserProfilesGuardianInvitationsListSecurityOption2;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardianInvitationsListSecurityOption2 };
var ClassroomUserProfilesGuardianInvitationsListSecurity = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardianInvitationsListSecurity, _super);
    function ClassroomUserProfilesGuardianInvitationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomUserProfilesGuardianInvitationsListSecurityOption1)
    ], ClassroomUserProfilesGuardianInvitationsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomUserProfilesGuardianInvitationsListSecurityOption2)
    ], ClassroomUserProfilesGuardianInvitationsListSecurity.prototype, "option2", void 0);
    return ClassroomUserProfilesGuardianInvitationsListSecurity;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardianInvitationsListSecurity };
var ClassroomUserProfilesGuardianInvitationsListRequest = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardianInvitationsListRequest, _super);
    function ClassroomUserProfilesGuardianInvitationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomUserProfilesGuardianInvitationsListPathParams)
    ], ClassroomUserProfilesGuardianInvitationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomUserProfilesGuardianInvitationsListQueryParams)
    ], ClassroomUserProfilesGuardianInvitationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomUserProfilesGuardianInvitationsListSecurity)
    ], ClassroomUserProfilesGuardianInvitationsListRequest.prototype, "security", void 0);
    return ClassroomUserProfilesGuardianInvitationsListRequest;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardianInvitationsListRequest };
var ClassroomUserProfilesGuardianInvitationsListResponse = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardianInvitationsListResponse, _super);
    function ClassroomUserProfilesGuardianInvitationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardianInvitationsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListGuardianInvitationsResponse)
    ], ClassroomUserProfilesGuardianInvitationsListResponse.prototype, "listGuardianInvitationsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ClassroomUserProfilesGuardianInvitationsListResponse.prototype, "statusCode", void 0);
    return ClassroomUserProfilesGuardianInvitationsListResponse;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardianInvitationsListResponse };
