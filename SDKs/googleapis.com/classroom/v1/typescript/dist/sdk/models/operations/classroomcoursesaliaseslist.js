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
var ClassroomCoursesAliasesListPathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAliasesListPathParams, _super);
    function ClassroomCoursesAliasesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesListPathParams.prototype, "courseId", void 0);
    return ClassroomCoursesAliasesListPathParams;
}(SpeakeasyBase));
export { ClassroomCoursesAliasesListPathParams };
var ClassroomCoursesAliasesListQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAliasesListQueryParams, _super);
    function ClassroomCoursesAliasesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ClassroomCoursesAliasesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesAliasesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesListQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesAliasesListQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesAliasesListQueryParams };
var ClassroomCoursesAliasesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAliasesListSecurityOption1, _super);
    function ClassroomCoursesAliasesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesAliasesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesAliasesListSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomCoursesAliasesListSecurityOption1;
}(SpeakeasyBase));
export { ClassroomCoursesAliasesListSecurityOption1 };
var ClassroomCoursesAliasesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAliasesListSecurityOption2, _super);
    function ClassroomCoursesAliasesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesAliasesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesAliasesListSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomCoursesAliasesListSecurityOption2;
}(SpeakeasyBase));
export { ClassroomCoursesAliasesListSecurityOption2 };
var ClassroomCoursesAliasesListSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAliasesListSecurity, _super);
    function ClassroomCoursesAliasesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesAliasesListSecurityOption1)
    ], ClassroomCoursesAliasesListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesAliasesListSecurityOption2)
    ], ClassroomCoursesAliasesListSecurity.prototype, "option2", void 0);
    return ClassroomCoursesAliasesListSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesAliasesListSecurity };
var ClassroomCoursesAliasesListRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAliasesListRequest, _super);
    function ClassroomCoursesAliasesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesAliasesListPathParams)
    ], ClassroomCoursesAliasesListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesAliasesListQueryParams)
    ], ClassroomCoursesAliasesListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesAliasesListSecurity)
    ], ClassroomCoursesAliasesListRequest.prototype, "security", void 0);
    return ClassroomCoursesAliasesListRequest;
}(SpeakeasyBase));
export { ClassroomCoursesAliasesListRequest };
var ClassroomCoursesAliasesListResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAliasesListResponse, _super);
    function ClassroomCoursesAliasesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListCourseAliasesResponse)
    ], ClassroomCoursesAliasesListResponse.prototype, "listCourseAliasesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesAliasesListResponse.prototype, "statusCode", void 0);
    return ClassroomCoursesAliasesListResponse;
}(SpeakeasyBase));
export { ClassroomCoursesAliasesListResponse };
