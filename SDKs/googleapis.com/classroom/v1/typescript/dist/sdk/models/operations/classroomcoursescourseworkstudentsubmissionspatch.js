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
var ClassroomCoursesCourseWorkStudentSubmissionsPatchPathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsPatchPathParams, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchPathParams.prototype, "courseId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=courseWorkId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchPathParams.prototype, "courseWorkId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchPathParams.prototype, "id", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsPatchPathParams;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsPatchPathParams };
var ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams };
var ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption1, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption1;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption1 };
var ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption2, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption2;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption2 };
var ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption1)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption2)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity.prototype, "option2", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity };
var ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsPatchPathParams)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StudentSubmission)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest.prototype, "security", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest };
var ClassroomCoursesCourseWorkStudentSubmissionsPatchResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsPatchResponse, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.StudentSubmission)
    ], ClassroomCoursesCourseWorkStudentSubmissionsPatchResponse.prototype, "studentSubmission", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsPatchResponse;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsPatchResponse };
