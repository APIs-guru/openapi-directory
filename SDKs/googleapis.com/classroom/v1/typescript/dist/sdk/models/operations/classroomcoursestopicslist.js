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
var ClassroomCoursesTopicsListPathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTopicsListPathParams, _super);
    function ClassroomCoursesTopicsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsListPathParams.prototype, "courseId", void 0);
    return ClassroomCoursesTopicsListPathParams;
}(SpeakeasyBase));
export { ClassroomCoursesTopicsListPathParams };
var ClassroomCoursesTopicsListQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTopicsListQueryParams, _super);
    function ClassroomCoursesTopicsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ClassroomCoursesTopicsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesTopicsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsListQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesTopicsListQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesTopicsListQueryParams };
var ClassroomCoursesTopicsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTopicsListSecurityOption1, _super);
    function ClassroomCoursesTopicsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesTopicsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesTopicsListSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomCoursesTopicsListSecurityOption1;
}(SpeakeasyBase));
export { ClassroomCoursesTopicsListSecurityOption1 };
var ClassroomCoursesTopicsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTopicsListSecurityOption2, _super);
    function ClassroomCoursesTopicsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesTopicsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesTopicsListSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomCoursesTopicsListSecurityOption2;
}(SpeakeasyBase));
export { ClassroomCoursesTopicsListSecurityOption2 };
var ClassroomCoursesTopicsListSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTopicsListSecurity, _super);
    function ClassroomCoursesTopicsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesTopicsListSecurityOption1)
    ], ClassroomCoursesTopicsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesTopicsListSecurityOption2)
    ], ClassroomCoursesTopicsListSecurity.prototype, "option2", void 0);
    return ClassroomCoursesTopicsListSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesTopicsListSecurity };
var ClassroomCoursesTopicsListRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTopicsListRequest, _super);
    function ClassroomCoursesTopicsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesTopicsListPathParams)
    ], ClassroomCoursesTopicsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesTopicsListQueryParams)
    ], ClassroomCoursesTopicsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesTopicsListSecurity)
    ], ClassroomCoursesTopicsListRequest.prototype, "security", void 0);
    return ClassroomCoursesTopicsListRequest;
}(SpeakeasyBase));
export { ClassroomCoursesTopicsListRequest };
var ClassroomCoursesTopicsListResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTopicsListResponse, _super);
    function ClassroomCoursesTopicsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListTopicResponse)
    ], ClassroomCoursesTopicsListResponse.prototype, "listTopicResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesTopicsListResponse.prototype, "statusCode", void 0);
    return ClassroomCoursesTopicsListResponse;
}(SpeakeasyBase));
export { ClassroomCoursesTopicsListResponse };
