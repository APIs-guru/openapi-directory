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
var ClassroomCoursesStudentsGetPathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsGetPathParams, _super);
    function ClassroomCoursesStudentsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsGetPathParams.prototype, "courseId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsGetPathParams.prototype, "userId", void 0);
    return ClassroomCoursesStudentsGetPathParams;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsGetPathParams };
var ClassroomCoursesStudentsGetQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsGetQueryParams, _super);
    function ClassroomCoursesStudentsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesStudentsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsGetQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesStudentsGetQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsGetQueryParams };
var ClassroomCoursesStudentsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsGetSecurityOption1, _super);
    function ClassroomCoursesStudentsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesStudentsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesStudentsGetSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomCoursesStudentsGetSecurityOption1;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsGetSecurityOption1 };
var ClassroomCoursesStudentsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsGetSecurityOption2, _super);
    function ClassroomCoursesStudentsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesStudentsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesStudentsGetSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomCoursesStudentsGetSecurityOption2;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsGetSecurityOption2 };
var ClassroomCoursesStudentsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsGetSecurityOption3, _super);
    function ClassroomCoursesStudentsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesStudentsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesStudentsGetSecurityOption3.prototype, "oauth2c", void 0);
    return ClassroomCoursesStudentsGetSecurityOption3;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsGetSecurityOption3 };
var ClassroomCoursesStudentsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsGetSecurityOption4, _super);
    function ClassroomCoursesStudentsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesStudentsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesStudentsGetSecurityOption4.prototype, "oauth2c", void 0);
    return ClassroomCoursesStudentsGetSecurityOption4;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsGetSecurityOption4 };
var ClassroomCoursesStudentsGetSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsGetSecurity, _super);
    function ClassroomCoursesStudentsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesStudentsGetSecurityOption1)
    ], ClassroomCoursesStudentsGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesStudentsGetSecurityOption2)
    ], ClassroomCoursesStudentsGetSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesStudentsGetSecurityOption3)
    ], ClassroomCoursesStudentsGetSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesStudentsGetSecurityOption4)
    ], ClassroomCoursesStudentsGetSecurity.prototype, "option4", void 0);
    return ClassroomCoursesStudentsGetSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsGetSecurity };
var ClassroomCoursesStudentsGetRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsGetRequest, _super);
    function ClassroomCoursesStudentsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesStudentsGetPathParams)
    ], ClassroomCoursesStudentsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesStudentsGetQueryParams)
    ], ClassroomCoursesStudentsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesStudentsGetSecurity)
    ], ClassroomCoursesStudentsGetRequest.prototype, "security", void 0);
    return ClassroomCoursesStudentsGetRequest;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsGetRequest };
var ClassroomCoursesStudentsGetResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsGetResponse, _super);
    function ClassroomCoursesStudentsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesStudentsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Student)
    ], ClassroomCoursesStudentsGetResponse.prototype, "student", void 0);
    return ClassroomCoursesStudentsGetResponse;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsGetResponse };
