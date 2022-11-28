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
var ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsPathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsPathParams, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsPathParams.prototype, "courseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=courseWorkId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsPathParams.prototype, "courseWorkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsPathParams.prototype, "id", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsPathParams;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsPathParams };
var ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsQueryParams, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsQueryParams };
var ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption1, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption1;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption1 };
var ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption2, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption2;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption2 };
var ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurity, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption1)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption2)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurity.prototype, "option2", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurity };
var ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsRequest, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsPathParams)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsQueryParams)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ModifyAttachmentsRequest)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurity)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsRequest.prototype, "security", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsRequest;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsRequest };
var ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsResponse, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StudentSubmission)
    ], ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsResponse.prototype, "studentSubmission", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsResponse;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsResponse };
