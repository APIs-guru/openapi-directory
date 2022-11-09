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
var ClassroomCoursesAnnouncementsCreatePathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsCreatePathParams, _super);
    function ClassroomCoursesAnnouncementsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsCreatePathParams.prototype, "courseId", void 0);
    return ClassroomCoursesAnnouncementsCreatePathParams;
}(SpeakeasyBase));
export { ClassroomCoursesAnnouncementsCreatePathParams };
var ClassroomCoursesAnnouncementsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsCreateQueryParams, _super);
    function ClassroomCoursesAnnouncementsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesAnnouncementsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesAnnouncementsCreateQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesAnnouncementsCreateQueryParams };
var ClassroomCoursesAnnouncementsCreateSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsCreateSecurity, _super);
    function ClassroomCoursesAnnouncementsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesAnnouncementsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesAnnouncementsCreateSecurity.prototype, "oauth2c", void 0);
    return ClassroomCoursesAnnouncementsCreateSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesAnnouncementsCreateSecurity };
var ClassroomCoursesAnnouncementsCreateRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsCreateRequest, _super);
    function ClassroomCoursesAnnouncementsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesAnnouncementsCreatePathParams)
    ], ClassroomCoursesAnnouncementsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesAnnouncementsCreateQueryParams)
    ], ClassroomCoursesAnnouncementsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Announcement)
    ], ClassroomCoursesAnnouncementsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesAnnouncementsCreateSecurity)
    ], ClassroomCoursesAnnouncementsCreateRequest.prototype, "security", void 0);
    return ClassroomCoursesAnnouncementsCreateRequest;
}(SpeakeasyBase));
export { ClassroomCoursesAnnouncementsCreateRequest };
var ClassroomCoursesAnnouncementsCreateResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsCreateResponse, _super);
    function ClassroomCoursesAnnouncementsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Announcement)
    ], ClassroomCoursesAnnouncementsCreateResponse.prototype, "announcement", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesAnnouncementsCreateResponse.prototype, "statusCode", void 0);
    return ClassroomCoursesAnnouncementsCreateResponse;
}(SpeakeasyBase));
export { ClassroomCoursesAnnouncementsCreateResponse };
