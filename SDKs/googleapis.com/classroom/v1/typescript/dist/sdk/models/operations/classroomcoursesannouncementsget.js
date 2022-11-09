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
var ClassroomCoursesAnnouncementsGetPathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsGetPathParams, _super);
    function ClassroomCoursesAnnouncementsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsGetPathParams.prototype, "courseId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsGetPathParams.prototype, "id", void 0);
    return ClassroomCoursesAnnouncementsGetPathParams;
}(SpeakeasyBase));
export { ClassroomCoursesAnnouncementsGetPathParams };
var ClassroomCoursesAnnouncementsGetQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsGetQueryParams, _super);
    function ClassroomCoursesAnnouncementsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesAnnouncementsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsGetQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesAnnouncementsGetQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesAnnouncementsGetQueryParams };
var ClassroomCoursesAnnouncementsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsGetSecurityOption1, _super);
    function ClassroomCoursesAnnouncementsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesAnnouncementsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesAnnouncementsGetSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomCoursesAnnouncementsGetSecurityOption1;
}(SpeakeasyBase));
export { ClassroomCoursesAnnouncementsGetSecurityOption1 };
var ClassroomCoursesAnnouncementsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsGetSecurityOption2, _super);
    function ClassroomCoursesAnnouncementsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesAnnouncementsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesAnnouncementsGetSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomCoursesAnnouncementsGetSecurityOption2;
}(SpeakeasyBase));
export { ClassroomCoursesAnnouncementsGetSecurityOption2 };
var ClassroomCoursesAnnouncementsGetSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsGetSecurity, _super);
    function ClassroomCoursesAnnouncementsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesAnnouncementsGetSecurityOption1)
    ], ClassroomCoursesAnnouncementsGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesAnnouncementsGetSecurityOption2)
    ], ClassroomCoursesAnnouncementsGetSecurity.prototype, "option2", void 0);
    return ClassroomCoursesAnnouncementsGetSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesAnnouncementsGetSecurity };
var ClassroomCoursesAnnouncementsGetRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsGetRequest, _super);
    function ClassroomCoursesAnnouncementsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesAnnouncementsGetPathParams)
    ], ClassroomCoursesAnnouncementsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesAnnouncementsGetQueryParams)
    ], ClassroomCoursesAnnouncementsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesAnnouncementsGetSecurity)
    ], ClassroomCoursesAnnouncementsGetRequest.prototype, "security", void 0);
    return ClassroomCoursesAnnouncementsGetRequest;
}(SpeakeasyBase));
export { ClassroomCoursesAnnouncementsGetRequest };
var ClassroomCoursesAnnouncementsGetResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsGetResponse, _super);
    function ClassroomCoursesAnnouncementsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Announcement)
    ], ClassroomCoursesAnnouncementsGetResponse.prototype, "announcement", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesAnnouncementsGetResponse.prototype, "statusCode", void 0);
    return ClassroomCoursesAnnouncementsGetResponse;
}(SpeakeasyBase));
export { ClassroomCoursesAnnouncementsGetResponse };
