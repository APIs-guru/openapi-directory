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
var ClassroomCoursesCourseWorkGetPathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkGetPathParams, _super);
    function ClassroomCoursesCourseWorkGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetPathParams.prototype, "courseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetPathParams.prototype, "id", void 0);
    return ClassroomCoursesCourseWorkGetPathParams;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkGetPathParams };
var ClassroomCoursesCourseWorkGetQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkGetQueryParams, _super);
    function ClassroomCoursesCourseWorkGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesCourseWorkGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesCourseWorkGetQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkGetQueryParams };
var ClassroomCoursesCourseWorkGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkGetSecurityOption1, _super);
    function ClassroomCoursesCourseWorkGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkGetSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkGetSecurityOption1;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkGetSecurityOption1 };
var ClassroomCoursesCourseWorkGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkGetSecurityOption2, _super);
    function ClassroomCoursesCourseWorkGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkGetSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkGetSecurityOption2;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkGetSecurityOption2 };
var ClassroomCoursesCourseWorkGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkGetSecurityOption3, _super);
    function ClassroomCoursesCourseWorkGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkGetSecurityOption3.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkGetSecurityOption3;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkGetSecurityOption3 };
var ClassroomCoursesCourseWorkGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkGetSecurityOption4, _super);
    function ClassroomCoursesCourseWorkGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkGetSecurityOption4.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkGetSecurityOption4;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkGetSecurityOption4 };
var ClassroomCoursesCourseWorkGetSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkGetSecurity, _super);
    function ClassroomCoursesCourseWorkGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkGetSecurityOption1)
    ], ClassroomCoursesCourseWorkGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkGetSecurityOption2)
    ], ClassroomCoursesCourseWorkGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkGetSecurityOption3)
    ], ClassroomCoursesCourseWorkGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkGetSecurityOption4)
    ], ClassroomCoursesCourseWorkGetSecurity.prototype, "option4", void 0);
    return ClassroomCoursesCourseWorkGetSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkGetSecurity };
var ClassroomCoursesCourseWorkGetRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkGetRequest, _super);
    function ClassroomCoursesCourseWorkGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkGetPathParams)
    ], ClassroomCoursesCourseWorkGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkGetQueryParams)
    ], ClassroomCoursesCourseWorkGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkGetSecurity)
    ], ClassroomCoursesCourseWorkGetRequest.prototype, "security", void 0);
    return ClassroomCoursesCourseWorkGetRequest;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkGetRequest };
var ClassroomCoursesCourseWorkGetResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkGetResponse, _super);
    function ClassroomCoursesCourseWorkGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CourseWork)
    ], ClassroomCoursesCourseWorkGetResponse.prototype, "courseWork", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesCourseWorkGetResponse.prototype, "statusCode", void 0);
    return ClassroomCoursesCourseWorkGetResponse;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkGetResponse };
