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
var ClassroomCoursesAnnouncementsListPathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsListPathParams, _super);
    function ClassroomCoursesAnnouncementsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsListPathParams.prototype, "courseId", void 0);
    return ClassroomCoursesAnnouncementsListPathParams;
}(SpeakeasyBase));
export { ClassroomCoursesAnnouncementsListPathParams };
export var ClassroomCoursesAnnouncementsListAnnouncementStatesEnum;
(function (ClassroomCoursesAnnouncementsListAnnouncementStatesEnum) {
    ClassroomCoursesAnnouncementsListAnnouncementStatesEnum["AnnouncementStateUnspecified"] = "ANNOUNCEMENT_STATE_UNSPECIFIED";
    ClassroomCoursesAnnouncementsListAnnouncementStatesEnum["Published"] = "PUBLISHED";
    ClassroomCoursesAnnouncementsListAnnouncementStatesEnum["Draft"] = "DRAFT";
    ClassroomCoursesAnnouncementsListAnnouncementStatesEnum["Deleted"] = "DELETED";
})(ClassroomCoursesAnnouncementsListAnnouncementStatesEnum || (ClassroomCoursesAnnouncementsListAnnouncementStatesEnum = {}));
var ClassroomCoursesAnnouncementsListQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsListQueryParams, _super);
    function ClassroomCoursesAnnouncementsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=announcementStates" }),
        __metadata("design:type", Array)
    ], ClassroomCoursesAnnouncementsListQueryParams.prototype, "announcementStates", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ClassroomCoursesAnnouncementsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesAnnouncementsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsListQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesAnnouncementsListQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesAnnouncementsListQueryParams };
var ClassroomCoursesAnnouncementsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsListSecurityOption1, _super);
    function ClassroomCoursesAnnouncementsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesAnnouncementsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesAnnouncementsListSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomCoursesAnnouncementsListSecurityOption1;
}(SpeakeasyBase));
export { ClassroomCoursesAnnouncementsListSecurityOption1 };
var ClassroomCoursesAnnouncementsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsListSecurityOption2, _super);
    function ClassroomCoursesAnnouncementsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesAnnouncementsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesAnnouncementsListSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomCoursesAnnouncementsListSecurityOption2;
}(SpeakeasyBase));
export { ClassroomCoursesAnnouncementsListSecurityOption2 };
var ClassroomCoursesAnnouncementsListSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsListSecurity, _super);
    function ClassroomCoursesAnnouncementsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesAnnouncementsListSecurityOption1)
    ], ClassroomCoursesAnnouncementsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesAnnouncementsListSecurityOption2)
    ], ClassroomCoursesAnnouncementsListSecurity.prototype, "option2", void 0);
    return ClassroomCoursesAnnouncementsListSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesAnnouncementsListSecurity };
var ClassroomCoursesAnnouncementsListRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsListRequest, _super);
    function ClassroomCoursesAnnouncementsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesAnnouncementsListPathParams)
    ], ClassroomCoursesAnnouncementsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesAnnouncementsListQueryParams)
    ], ClassroomCoursesAnnouncementsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesAnnouncementsListSecurity)
    ], ClassroomCoursesAnnouncementsListRequest.prototype, "security", void 0);
    return ClassroomCoursesAnnouncementsListRequest;
}(SpeakeasyBase));
export { ClassroomCoursesAnnouncementsListRequest };
var ClassroomCoursesAnnouncementsListResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsListResponse, _super);
    function ClassroomCoursesAnnouncementsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListAnnouncementsResponse)
    ], ClassroomCoursesAnnouncementsListResponse.prototype, "listAnnouncementsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesAnnouncementsListResponse.prototype, "statusCode", void 0);
    return ClassroomCoursesAnnouncementsListResponse;
}(SpeakeasyBase));
export { ClassroomCoursesAnnouncementsListResponse };
