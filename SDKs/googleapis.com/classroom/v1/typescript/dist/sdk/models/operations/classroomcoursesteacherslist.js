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
var ClassroomCoursesTeachersListPathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTeachersListPathParams, _super);
    function ClassroomCoursesTeachersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersListPathParams.prototype, "courseId", void 0);
    return ClassroomCoursesTeachersListPathParams;
}(SpeakeasyBase));
export { ClassroomCoursesTeachersListPathParams };
var ClassroomCoursesTeachersListQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTeachersListQueryParams, _super);
    function ClassroomCoursesTeachersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ClassroomCoursesTeachersListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesTeachersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersListQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesTeachersListQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesTeachersListQueryParams };
var ClassroomCoursesTeachersListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTeachersListSecurityOption1, _super);
    function ClassroomCoursesTeachersListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesTeachersListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesTeachersListSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomCoursesTeachersListSecurityOption1;
}(SpeakeasyBase));
export { ClassroomCoursesTeachersListSecurityOption1 };
var ClassroomCoursesTeachersListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTeachersListSecurityOption2, _super);
    function ClassroomCoursesTeachersListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesTeachersListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesTeachersListSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomCoursesTeachersListSecurityOption2;
}(SpeakeasyBase));
export { ClassroomCoursesTeachersListSecurityOption2 };
var ClassroomCoursesTeachersListSecurityOption3 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTeachersListSecurityOption3, _super);
    function ClassroomCoursesTeachersListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesTeachersListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesTeachersListSecurityOption3.prototype, "oauth2c", void 0);
    return ClassroomCoursesTeachersListSecurityOption3;
}(SpeakeasyBase));
export { ClassroomCoursesTeachersListSecurityOption3 };
var ClassroomCoursesTeachersListSecurityOption4 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTeachersListSecurityOption4, _super);
    function ClassroomCoursesTeachersListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesTeachersListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesTeachersListSecurityOption4.prototype, "oauth2c", void 0);
    return ClassroomCoursesTeachersListSecurityOption4;
}(SpeakeasyBase));
export { ClassroomCoursesTeachersListSecurityOption4 };
var ClassroomCoursesTeachersListSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTeachersListSecurity, _super);
    function ClassroomCoursesTeachersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesTeachersListSecurityOption1)
    ], ClassroomCoursesTeachersListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesTeachersListSecurityOption2)
    ], ClassroomCoursesTeachersListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesTeachersListSecurityOption3)
    ], ClassroomCoursesTeachersListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesTeachersListSecurityOption4)
    ], ClassroomCoursesTeachersListSecurity.prototype, "option4", void 0);
    return ClassroomCoursesTeachersListSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesTeachersListSecurity };
var ClassroomCoursesTeachersListRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTeachersListRequest, _super);
    function ClassroomCoursesTeachersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesTeachersListPathParams)
    ], ClassroomCoursesTeachersListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesTeachersListQueryParams)
    ], ClassroomCoursesTeachersListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesTeachersListSecurity)
    ], ClassroomCoursesTeachersListRequest.prototype, "security", void 0);
    return ClassroomCoursesTeachersListRequest;
}(SpeakeasyBase));
export { ClassroomCoursesTeachersListRequest };
var ClassroomCoursesTeachersListResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTeachersListResponse, _super);
    function ClassroomCoursesTeachersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesTeachersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTeachersResponse)
    ], ClassroomCoursesTeachersListResponse.prototype, "listTeachersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesTeachersListResponse.prototype, "statusCode", void 0);
    return ClassroomCoursesTeachersListResponse;
}(SpeakeasyBase));
export { ClassroomCoursesTeachersListResponse };
