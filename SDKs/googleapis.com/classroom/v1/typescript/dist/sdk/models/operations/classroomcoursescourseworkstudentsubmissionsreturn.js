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
var ClassroomCoursesCourseWorkStudentSubmissionsReturnPathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsReturnPathParams, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsReturnPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReturnPathParams.prototype, "courseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=courseWorkId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReturnPathParams.prototype, "courseWorkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReturnPathParams.prototype, "id", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsReturnPathParams;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsReturnPathParams };
var ClassroomCoursesCourseWorkStudentSubmissionsReturnQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsReturnQueryParams, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsReturnQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReturnQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReturnQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReturnQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReturnQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReturnQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReturnQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReturnQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReturnQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReturnQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReturnQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReturnQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsReturnQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsReturnQueryParams };
var ClassroomCoursesCourseWorkStudentSubmissionsReturnSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsReturnSecurity, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsReturnSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReturnSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReturnSecurity.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsReturnSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsReturnSecurity };
var ClassroomCoursesCourseWorkStudentSubmissionsReturnRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsReturnRequest, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsReturnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsReturnPathParams)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReturnRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsReturnQueryParams)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReturnRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReturnRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsReturnSecurity)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReturnRequest.prototype, "security", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsReturnRequest;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsReturnRequest };
var ClassroomCoursesCourseWorkStudentSubmissionsReturnResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsReturnResponse, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsReturnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReturnResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReturnResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesCourseWorkStudentSubmissionsReturnResponse.prototype, "statusCode", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsReturnResponse;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsReturnResponse };
