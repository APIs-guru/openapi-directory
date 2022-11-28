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
var ClassroomCoursesStudentsCreatePathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsCreatePathParams, _super);
    function ClassroomCoursesStudentsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsCreatePathParams.prototype, "courseId", void 0);
    return ClassroomCoursesStudentsCreatePathParams;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsCreatePathParams };
var ClassroomCoursesStudentsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsCreateQueryParams, _super);
    function ClassroomCoursesStudentsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enrollmentCode" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsCreateQueryParams.prototype, "enrollmentCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesStudentsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesStudentsCreateQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsCreateQueryParams };
var ClassroomCoursesStudentsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsCreateSecurityOption1, _super);
    function ClassroomCoursesStudentsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesStudentsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesStudentsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomCoursesStudentsCreateSecurityOption1;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsCreateSecurityOption1 };
var ClassroomCoursesStudentsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsCreateSecurityOption2, _super);
    function ClassroomCoursesStudentsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesStudentsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesStudentsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomCoursesStudentsCreateSecurityOption2;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsCreateSecurityOption2 };
var ClassroomCoursesStudentsCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsCreateSecurityOption3, _super);
    function ClassroomCoursesStudentsCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesStudentsCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesStudentsCreateSecurityOption3.prototype, "oauth2c", void 0);
    return ClassroomCoursesStudentsCreateSecurityOption3;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsCreateSecurityOption3 };
var ClassroomCoursesStudentsCreateSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsCreateSecurity, _super);
    function ClassroomCoursesStudentsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesStudentsCreateSecurityOption1)
    ], ClassroomCoursesStudentsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesStudentsCreateSecurityOption2)
    ], ClassroomCoursesStudentsCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesStudentsCreateSecurityOption3)
    ], ClassroomCoursesStudentsCreateSecurity.prototype, "option3", void 0);
    return ClassroomCoursesStudentsCreateSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsCreateSecurity };
var ClassroomCoursesStudentsCreateRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsCreateRequest, _super);
    function ClassroomCoursesStudentsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesStudentsCreatePathParams)
    ], ClassroomCoursesStudentsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesStudentsCreateQueryParams)
    ], ClassroomCoursesStudentsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Student)
    ], ClassroomCoursesStudentsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesStudentsCreateSecurity)
    ], ClassroomCoursesStudentsCreateRequest.prototype, "security", void 0);
    return ClassroomCoursesStudentsCreateRequest;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsCreateRequest };
var ClassroomCoursesStudentsCreateResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsCreateResponse, _super);
    function ClassroomCoursesStudentsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesStudentsCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Student)
    ], ClassroomCoursesStudentsCreateResponse.prototype, "student", void 0);
    return ClassroomCoursesStudentsCreateResponse;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsCreateResponse };
