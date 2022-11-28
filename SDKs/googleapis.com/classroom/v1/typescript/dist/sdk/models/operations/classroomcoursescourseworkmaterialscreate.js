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
var ClassroomCoursesCourseWorkMaterialsCreatePathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsCreatePathParams, _super);
    function ClassroomCoursesCourseWorkMaterialsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsCreatePathParams.prototype, "courseId", void 0);
    return ClassroomCoursesCourseWorkMaterialsCreatePathParams;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkMaterialsCreatePathParams };
var ClassroomCoursesCourseWorkMaterialsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsCreateQueryParams, _super);
    function ClassroomCoursesCourseWorkMaterialsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesCourseWorkMaterialsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesCourseWorkMaterialsCreateQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkMaterialsCreateQueryParams };
var ClassroomCoursesCourseWorkMaterialsCreateSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsCreateSecurity, _super);
    function ClassroomCoursesCourseWorkMaterialsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkMaterialsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkMaterialsCreateSecurity.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkMaterialsCreateSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkMaterialsCreateSecurity };
var ClassroomCoursesCourseWorkMaterialsCreateRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsCreateRequest, _super);
    function ClassroomCoursesCourseWorkMaterialsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkMaterialsCreatePathParams)
    ], ClassroomCoursesCourseWorkMaterialsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkMaterialsCreateQueryParams)
    ], ClassroomCoursesCourseWorkMaterialsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CourseWorkMaterial)
    ], ClassroomCoursesCourseWorkMaterialsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkMaterialsCreateSecurity)
    ], ClassroomCoursesCourseWorkMaterialsCreateRequest.prototype, "security", void 0);
    return ClassroomCoursesCourseWorkMaterialsCreateRequest;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkMaterialsCreateRequest };
var ClassroomCoursesCourseWorkMaterialsCreateResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsCreateResponse, _super);
    function ClassroomCoursesCourseWorkMaterialsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CourseWorkMaterial)
    ], ClassroomCoursesCourseWorkMaterialsCreateResponse.prototype, "courseWorkMaterial", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesCourseWorkMaterialsCreateResponse.prototype, "statusCode", void 0);
    return ClassroomCoursesCourseWorkMaterialsCreateResponse;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkMaterialsCreateResponse };
