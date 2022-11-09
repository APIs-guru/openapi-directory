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
var ClassroomCoursesCourseWorkMaterialsGetPathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsGetPathParams, _super);
    function ClassroomCoursesCourseWorkMaterialsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetPathParams.prototype, "courseId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetPathParams.prototype, "id", void 0);
    return ClassroomCoursesCourseWorkMaterialsGetPathParams;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkMaterialsGetPathParams };
var ClassroomCoursesCourseWorkMaterialsGetQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsGetQueryParams, _super);
    function ClassroomCoursesCourseWorkMaterialsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesCourseWorkMaterialsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesCourseWorkMaterialsGetQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkMaterialsGetQueryParams };
var ClassroomCoursesCourseWorkMaterialsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsGetSecurityOption1, _super);
    function ClassroomCoursesCourseWorkMaterialsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkMaterialsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkMaterialsGetSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkMaterialsGetSecurityOption1;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkMaterialsGetSecurityOption1 };
var ClassroomCoursesCourseWorkMaterialsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsGetSecurityOption2, _super);
    function ClassroomCoursesCourseWorkMaterialsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkMaterialsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkMaterialsGetSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkMaterialsGetSecurityOption2;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkMaterialsGetSecurityOption2 };
var ClassroomCoursesCourseWorkMaterialsGetSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsGetSecurity, _super);
    function ClassroomCoursesCourseWorkMaterialsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkMaterialsGetSecurityOption1)
    ], ClassroomCoursesCourseWorkMaterialsGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkMaterialsGetSecurityOption2)
    ], ClassroomCoursesCourseWorkMaterialsGetSecurity.prototype, "option2", void 0);
    return ClassroomCoursesCourseWorkMaterialsGetSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkMaterialsGetSecurity };
var ClassroomCoursesCourseWorkMaterialsGetRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsGetRequest, _super);
    function ClassroomCoursesCourseWorkMaterialsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkMaterialsGetPathParams)
    ], ClassroomCoursesCourseWorkMaterialsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkMaterialsGetQueryParams)
    ], ClassroomCoursesCourseWorkMaterialsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkMaterialsGetSecurity)
    ], ClassroomCoursesCourseWorkMaterialsGetRequest.prototype, "security", void 0);
    return ClassroomCoursesCourseWorkMaterialsGetRequest;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkMaterialsGetRequest };
var ClassroomCoursesCourseWorkMaterialsGetResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsGetResponse, _super);
    function ClassroomCoursesCourseWorkMaterialsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CourseWorkMaterial)
    ], ClassroomCoursesCourseWorkMaterialsGetResponse.prototype, "courseWorkMaterial", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesCourseWorkMaterialsGetResponse.prototype, "statusCode", void 0);
    return ClassroomCoursesCourseWorkMaterialsGetResponse;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkMaterialsGetResponse };
