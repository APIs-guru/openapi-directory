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
var ClassroomCoursesTeachersGetPathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTeachersGetPathParams, _super);
    function ClassroomCoursesTeachersGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersGetPathParams.prototype, "courseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersGetPathParams.prototype, "userId", void 0);
    return ClassroomCoursesTeachersGetPathParams;
}(SpeakeasyBase));
export { ClassroomCoursesTeachersGetPathParams };
var ClassroomCoursesTeachersGetQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTeachersGetQueryParams, _super);
    function ClassroomCoursesTeachersGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesTeachersGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersGetQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesTeachersGetQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesTeachersGetQueryParams };
var ClassroomCoursesTeachersGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTeachersGetSecurityOption1, _super);
    function ClassroomCoursesTeachersGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesTeachersGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesTeachersGetSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomCoursesTeachersGetSecurityOption1;
}(SpeakeasyBase));
export { ClassroomCoursesTeachersGetSecurityOption1 };
var ClassroomCoursesTeachersGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTeachersGetSecurityOption2, _super);
    function ClassroomCoursesTeachersGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesTeachersGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesTeachersGetSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomCoursesTeachersGetSecurityOption2;
}(SpeakeasyBase));
export { ClassroomCoursesTeachersGetSecurityOption2 };
var ClassroomCoursesTeachersGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTeachersGetSecurityOption3, _super);
    function ClassroomCoursesTeachersGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesTeachersGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesTeachersGetSecurityOption3.prototype, "oauth2c", void 0);
    return ClassroomCoursesTeachersGetSecurityOption3;
}(SpeakeasyBase));
export { ClassroomCoursesTeachersGetSecurityOption3 };
var ClassroomCoursesTeachersGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTeachersGetSecurityOption4, _super);
    function ClassroomCoursesTeachersGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesTeachersGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesTeachersGetSecurityOption4.prototype, "oauth2c", void 0);
    return ClassroomCoursesTeachersGetSecurityOption4;
}(SpeakeasyBase));
export { ClassroomCoursesTeachersGetSecurityOption4 };
var ClassroomCoursesTeachersGetSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTeachersGetSecurity, _super);
    function ClassroomCoursesTeachersGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesTeachersGetSecurityOption1)
    ], ClassroomCoursesTeachersGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesTeachersGetSecurityOption2)
    ], ClassroomCoursesTeachersGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesTeachersGetSecurityOption3)
    ], ClassroomCoursesTeachersGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesTeachersGetSecurityOption4)
    ], ClassroomCoursesTeachersGetSecurity.prototype, "option4", void 0);
    return ClassroomCoursesTeachersGetSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesTeachersGetSecurity };
var ClassroomCoursesTeachersGetRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTeachersGetRequest, _super);
    function ClassroomCoursesTeachersGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesTeachersGetPathParams)
    ], ClassroomCoursesTeachersGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesTeachersGetQueryParams)
    ], ClassroomCoursesTeachersGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesTeachersGetSecurity)
    ], ClassroomCoursesTeachersGetRequest.prototype, "security", void 0);
    return ClassroomCoursesTeachersGetRequest;
}(SpeakeasyBase));
export { ClassroomCoursesTeachersGetRequest };
var ClassroomCoursesTeachersGetResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTeachersGetResponse, _super);
    function ClassroomCoursesTeachersGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesTeachersGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Teacher)
    ], ClassroomCoursesTeachersGetResponse.prototype, "teacher", void 0);
    return ClassroomCoursesTeachersGetResponse;
}(SpeakeasyBase));
export { ClassroomCoursesTeachersGetResponse };
