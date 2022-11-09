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
var ClassroomCoursesTeachersDeletePathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTeachersDeletePathParams, _super);
    function ClassroomCoursesTeachersDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersDeletePathParams.prototype, "courseId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersDeletePathParams.prototype, "userId", void 0);
    return ClassroomCoursesTeachersDeletePathParams;
}(SpeakeasyBase));
export { ClassroomCoursesTeachersDeletePathParams };
var ClassroomCoursesTeachersDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTeachersDeleteQueryParams, _super);
    function ClassroomCoursesTeachersDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesTeachersDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesTeachersDeleteQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesTeachersDeleteQueryParams };
var ClassroomCoursesTeachersDeleteSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTeachersDeleteSecurity, _super);
    function ClassroomCoursesTeachersDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesTeachersDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesTeachersDeleteSecurity.prototype, "oauth2c", void 0);
    return ClassroomCoursesTeachersDeleteSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesTeachersDeleteSecurity };
var ClassroomCoursesTeachersDeleteRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTeachersDeleteRequest, _super);
    function ClassroomCoursesTeachersDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesTeachersDeletePathParams)
    ], ClassroomCoursesTeachersDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesTeachersDeleteQueryParams)
    ], ClassroomCoursesTeachersDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesTeachersDeleteSecurity)
    ], ClassroomCoursesTeachersDeleteRequest.prototype, "security", void 0);
    return ClassroomCoursesTeachersDeleteRequest;
}(SpeakeasyBase));
export { ClassroomCoursesTeachersDeleteRequest };
var ClassroomCoursesTeachersDeleteResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTeachersDeleteResponse, _super);
    function ClassroomCoursesTeachersDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], ClassroomCoursesTeachersDeleteResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesTeachersDeleteResponse.prototype, "statusCode", void 0);
    return ClassroomCoursesTeachersDeleteResponse;
}(SpeakeasyBase));
export { ClassroomCoursesTeachersDeleteResponse };
