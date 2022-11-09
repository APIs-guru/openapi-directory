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
export var ClassroomCoursesListCourseStatesEnum;
(function (ClassroomCoursesListCourseStatesEnum) {
    ClassroomCoursesListCourseStatesEnum["CourseStateUnspecified"] = "COURSE_STATE_UNSPECIFIED";
    ClassroomCoursesListCourseStatesEnum["Active"] = "ACTIVE";
    ClassroomCoursesListCourseStatesEnum["Archived"] = "ARCHIVED";
    ClassroomCoursesListCourseStatesEnum["Provisioned"] = "PROVISIONED";
    ClassroomCoursesListCourseStatesEnum["Declined"] = "DECLINED";
    ClassroomCoursesListCourseStatesEnum["Suspended"] = "SUSPENDED";
})(ClassroomCoursesListCourseStatesEnum || (ClassroomCoursesListCourseStatesEnum = {}));
var ClassroomCoursesListQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesListQueryParams, _super);
    function ClassroomCoursesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=courseStates" }),
        __metadata("design:type", Array)
    ], ClassroomCoursesListQueryParams.prototype, "courseStates", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ClassroomCoursesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ClassroomCoursesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=studentId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesListQueryParams.prototype, "studentId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=teacherId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesListQueryParams.prototype, "teacherId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesListQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesListQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesListQueryParams };
var ClassroomCoursesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesListSecurityOption1, _super);
    function ClassroomCoursesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesListSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomCoursesListSecurityOption1;
}(SpeakeasyBase));
export { ClassroomCoursesListSecurityOption1 };
var ClassroomCoursesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesListSecurityOption2, _super);
    function ClassroomCoursesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesListSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomCoursesListSecurityOption2;
}(SpeakeasyBase));
export { ClassroomCoursesListSecurityOption2 };
var ClassroomCoursesListSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesListSecurity, _super);
    function ClassroomCoursesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesListSecurityOption1)
    ], ClassroomCoursesListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesListSecurityOption2)
    ], ClassroomCoursesListSecurity.prototype, "option2", void 0);
    return ClassroomCoursesListSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesListSecurity };
var ClassroomCoursesListRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesListRequest, _super);
    function ClassroomCoursesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesListQueryParams)
    ], ClassroomCoursesListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesListSecurity)
    ], ClassroomCoursesListRequest.prototype, "security", void 0);
    return ClassroomCoursesListRequest;
}(SpeakeasyBase));
export { ClassroomCoursesListRequest };
var ClassroomCoursesListResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesListResponse, _super);
    function ClassroomCoursesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListCoursesResponse)
    ], ClassroomCoursesListResponse.prototype, "listCoursesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesListResponse.prototype, "statusCode", void 0);
    return ClassroomCoursesListResponse;
}(SpeakeasyBase));
export { ClassroomCoursesListResponse };
