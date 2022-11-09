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
var ClassroomCoursesCourseWorkListPathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkListPathParams, _super);
    function ClassroomCoursesCourseWorkListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkListPathParams.prototype, "courseId", void 0);
    return ClassroomCoursesCourseWorkListPathParams;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkListPathParams };
export var ClassroomCoursesCourseWorkListCourseWorkStatesEnum;
(function (ClassroomCoursesCourseWorkListCourseWorkStatesEnum) {
    ClassroomCoursesCourseWorkListCourseWorkStatesEnum["CourseWorkStateUnspecified"] = "COURSE_WORK_STATE_UNSPECIFIED";
    ClassroomCoursesCourseWorkListCourseWorkStatesEnum["Published"] = "PUBLISHED";
    ClassroomCoursesCourseWorkListCourseWorkStatesEnum["Draft"] = "DRAFT";
    ClassroomCoursesCourseWorkListCourseWorkStatesEnum["Deleted"] = "DELETED";
})(ClassroomCoursesCourseWorkListCourseWorkStatesEnum || (ClassroomCoursesCourseWorkListCourseWorkStatesEnum = {}));
var ClassroomCoursesCourseWorkListQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkListQueryParams, _super);
    function ClassroomCoursesCourseWorkListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=courseWorkStates" }),
        __metadata("design:type", Array)
    ], ClassroomCoursesCourseWorkListQueryParams.prototype, "courseWorkStates", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ClassroomCoursesCourseWorkListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesCourseWorkListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkListQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesCourseWorkListQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkListQueryParams };
var ClassroomCoursesCourseWorkListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkListSecurityOption1, _super);
    function ClassroomCoursesCourseWorkListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkListSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkListSecurityOption1;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkListSecurityOption1 };
var ClassroomCoursesCourseWorkListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkListSecurityOption2, _super);
    function ClassroomCoursesCourseWorkListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkListSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkListSecurityOption2;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkListSecurityOption2 };
var ClassroomCoursesCourseWorkListSecurityOption3 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkListSecurityOption3, _super);
    function ClassroomCoursesCourseWorkListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkListSecurityOption3.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkListSecurityOption3;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkListSecurityOption3 };
var ClassroomCoursesCourseWorkListSecurityOption4 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkListSecurityOption4, _super);
    function ClassroomCoursesCourseWorkListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkListSecurityOption4.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkListSecurityOption4;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkListSecurityOption4 };
var ClassroomCoursesCourseWorkListSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkListSecurity, _super);
    function ClassroomCoursesCourseWorkListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkListSecurityOption1)
    ], ClassroomCoursesCourseWorkListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkListSecurityOption2)
    ], ClassroomCoursesCourseWorkListSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkListSecurityOption3)
    ], ClassroomCoursesCourseWorkListSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkListSecurityOption4)
    ], ClassroomCoursesCourseWorkListSecurity.prototype, "option4", void 0);
    return ClassroomCoursesCourseWorkListSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkListSecurity };
var ClassroomCoursesCourseWorkListRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkListRequest, _super);
    function ClassroomCoursesCourseWorkListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkListPathParams)
    ], ClassroomCoursesCourseWorkListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkListQueryParams)
    ], ClassroomCoursesCourseWorkListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkListSecurity)
    ], ClassroomCoursesCourseWorkListRequest.prototype, "security", void 0);
    return ClassroomCoursesCourseWorkListRequest;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkListRequest };
var ClassroomCoursesCourseWorkListResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkListResponse, _super);
    function ClassroomCoursesCourseWorkListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListCourseWorkResponse)
    ], ClassroomCoursesCourseWorkListResponse.prototype, "listCourseWorkResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesCourseWorkListResponse.prototype, "statusCode", void 0);
    return ClassroomCoursesCourseWorkListResponse;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkListResponse };
