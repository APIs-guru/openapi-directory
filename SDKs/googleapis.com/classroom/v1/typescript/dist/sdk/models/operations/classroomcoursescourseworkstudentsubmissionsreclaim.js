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
var ClassroomCoursesCourseWorkStudentSubmissionsReclaimPathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsReclaimPathParams, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsReclaimPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReclaimPathParams.prototype, "courseId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=courseWorkId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReclaimPathParams.prototype, "courseWorkId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReclaimPathParams.prototype, "id", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsReclaimPathParams;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsReclaimPathParams };
var ClassroomCoursesCourseWorkStudentSubmissionsReclaimQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsReclaimQueryParams, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsReclaimQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReclaimQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReclaimQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReclaimQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReclaimQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReclaimQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReclaimQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReclaimQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReclaimQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReclaimQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReclaimQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReclaimQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsReclaimQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsReclaimQueryParams };
var ClassroomCoursesCourseWorkStudentSubmissionsReclaimSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsReclaimSecurity, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsReclaimSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReclaimSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReclaimSecurity.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsReclaimSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsReclaimSecurity };
var ClassroomCoursesCourseWorkStudentSubmissionsReclaimRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsReclaimRequest, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsReclaimRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsReclaimPathParams)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReclaimRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsReclaimQueryParams)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReclaimRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReclaimRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsReclaimSecurity)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReclaimRequest.prototype, "security", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsReclaimRequest;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsReclaimRequest };
var ClassroomCoursesCourseWorkStudentSubmissionsReclaimResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsReclaimResponse, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsReclaimResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReclaimResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReclaimResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReclaimResponse.prototype, "statusCode", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsReclaimResponse;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsReclaimResponse };
