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
var ClassroomCoursesStudentsListPathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsListPathParams, _super);
    function ClassroomCoursesStudentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsListPathParams.prototype, "courseId", void 0);
    return ClassroomCoursesStudentsListPathParams;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsListPathParams };
var ClassroomCoursesStudentsListQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsListQueryParams, _super);
    function ClassroomCoursesStudentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ClassroomCoursesStudentsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesStudentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsListQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesStudentsListQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsListQueryParams };
var ClassroomCoursesStudentsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsListSecurityOption1, _super);
    function ClassroomCoursesStudentsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesStudentsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesStudentsListSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomCoursesStudentsListSecurityOption1;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsListSecurityOption1 };
var ClassroomCoursesStudentsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsListSecurityOption2, _super);
    function ClassroomCoursesStudentsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesStudentsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesStudentsListSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomCoursesStudentsListSecurityOption2;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsListSecurityOption2 };
var ClassroomCoursesStudentsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsListSecurityOption3, _super);
    function ClassroomCoursesStudentsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesStudentsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesStudentsListSecurityOption3.prototype, "oauth2c", void 0);
    return ClassroomCoursesStudentsListSecurityOption3;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsListSecurityOption3 };
var ClassroomCoursesStudentsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsListSecurityOption4, _super);
    function ClassroomCoursesStudentsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesStudentsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesStudentsListSecurityOption4.prototype, "oauth2c", void 0);
    return ClassroomCoursesStudentsListSecurityOption4;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsListSecurityOption4 };
var ClassroomCoursesStudentsListSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsListSecurity, _super);
    function ClassroomCoursesStudentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesStudentsListSecurityOption1)
    ], ClassroomCoursesStudentsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesStudentsListSecurityOption2)
    ], ClassroomCoursesStudentsListSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesStudentsListSecurityOption3)
    ], ClassroomCoursesStudentsListSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesStudentsListSecurityOption4)
    ], ClassroomCoursesStudentsListSecurity.prototype, "option4", void 0);
    return ClassroomCoursesStudentsListSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsListSecurity };
var ClassroomCoursesStudentsListRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsListRequest, _super);
    function ClassroomCoursesStudentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesStudentsListPathParams)
    ], ClassroomCoursesStudentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesStudentsListQueryParams)
    ], ClassroomCoursesStudentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesStudentsListSecurity)
    ], ClassroomCoursesStudentsListRequest.prototype, "security", void 0);
    return ClassroomCoursesStudentsListRequest;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsListRequest };
var ClassroomCoursesStudentsListResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesStudentsListResponse, _super);
    function ClassroomCoursesStudentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesStudentsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListStudentsResponse)
    ], ClassroomCoursesStudentsListResponse.prototype, "listStudentsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesStudentsListResponse.prototype, "statusCode", void 0);
    return ClassroomCoursesStudentsListResponse;
}(SpeakeasyBase));
export { ClassroomCoursesStudentsListResponse };
