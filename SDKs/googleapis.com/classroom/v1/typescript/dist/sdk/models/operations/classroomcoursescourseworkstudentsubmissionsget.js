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
var ClassroomCoursesCourseWorkStudentSubmissionsGetPathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsGetPathParams, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetPathParams.prototype, "courseId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=courseWorkId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetPathParams.prototype, "courseWorkId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetPathParams.prototype, "id", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsGetPathParams;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsGetPathParams };
var ClassroomCoursesCourseWorkStudentSubmissionsGetQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsGetQueryParams, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsGetQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsGetQueryParams };
var ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption1, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption1;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption1 };
var ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption2, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption2;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption2 };
var ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption3, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption3.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption3;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption3 };
var ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption4, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption4.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption4;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption4 };
var ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption5, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption5.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption5;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption5 };
var ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption6 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption6, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption6.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption6;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption6 };
var ClassroomCoursesCourseWorkStudentSubmissionsGetSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsGetSecurity, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption1)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption2)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption3)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption4)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetSecurity.prototype, "option4", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption5)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetSecurity.prototype, "option5", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption6)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetSecurity.prototype, "option6", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsGetSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsGetSecurity };
var ClassroomCoursesCourseWorkStudentSubmissionsGetRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsGetRequest, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsGetPathParams)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsGetQueryParams)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsGetSecurity)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetRequest.prototype, "security", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsGetRequest;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsGetRequest };
var ClassroomCoursesCourseWorkStudentSubmissionsGetResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsGetResponse, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.StudentSubmission)
    ], ClassroomCoursesCourseWorkStudentSubmissionsGetResponse.prototype, "studentSubmission", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsGetResponse;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsGetResponse };
