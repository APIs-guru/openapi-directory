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
var ClassroomCoursesAnnouncementsModifyAssigneesPathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsModifyAssigneesPathParams, _super);
    function ClassroomCoursesAnnouncementsModifyAssigneesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsModifyAssigneesPathParams.prototype, "courseId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsModifyAssigneesPathParams.prototype, "id", void 0);
    return ClassroomCoursesAnnouncementsModifyAssigneesPathParams;
}(SpeakeasyBase));
export { ClassroomCoursesAnnouncementsModifyAssigneesPathParams };
var ClassroomCoursesAnnouncementsModifyAssigneesQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsModifyAssigneesQueryParams, _super);
    function ClassroomCoursesAnnouncementsModifyAssigneesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsModifyAssigneesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsModifyAssigneesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsModifyAssigneesQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsModifyAssigneesQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsModifyAssigneesQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsModifyAssigneesQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsModifyAssigneesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesAnnouncementsModifyAssigneesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsModifyAssigneesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsModifyAssigneesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsModifyAssigneesQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesAnnouncementsModifyAssigneesQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesAnnouncementsModifyAssigneesQueryParams };
var ClassroomCoursesAnnouncementsModifyAssigneesSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsModifyAssigneesSecurity, _super);
    function ClassroomCoursesAnnouncementsModifyAssigneesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesAnnouncementsModifyAssigneesSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesAnnouncementsModifyAssigneesSecurity.prototype, "oauth2c", void 0);
    return ClassroomCoursesAnnouncementsModifyAssigneesSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesAnnouncementsModifyAssigneesSecurity };
var ClassroomCoursesAnnouncementsModifyAssigneesRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsModifyAssigneesRequest, _super);
    function ClassroomCoursesAnnouncementsModifyAssigneesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesAnnouncementsModifyAssigneesPathParams)
    ], ClassroomCoursesAnnouncementsModifyAssigneesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesAnnouncementsModifyAssigneesQueryParams)
    ], ClassroomCoursesAnnouncementsModifyAssigneesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ModifyAnnouncementAssigneesRequest)
    ], ClassroomCoursesAnnouncementsModifyAssigneesRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesAnnouncementsModifyAssigneesSecurity)
    ], ClassroomCoursesAnnouncementsModifyAssigneesRequest.prototype, "security", void 0);
    return ClassroomCoursesAnnouncementsModifyAssigneesRequest;
}(SpeakeasyBase));
export { ClassroomCoursesAnnouncementsModifyAssigneesRequest };
var ClassroomCoursesAnnouncementsModifyAssigneesResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAnnouncementsModifyAssigneesResponse, _super);
    function ClassroomCoursesAnnouncementsModifyAssigneesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Announcement)
    ], ClassroomCoursesAnnouncementsModifyAssigneesResponse.prototype, "announcement", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesAnnouncementsModifyAssigneesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesAnnouncementsModifyAssigneesResponse.prototype, "statusCode", void 0);
    return ClassroomCoursesAnnouncementsModifyAssigneesResponse;
}(SpeakeasyBase));
export { ClassroomCoursesAnnouncementsModifyAssigneesResponse };
