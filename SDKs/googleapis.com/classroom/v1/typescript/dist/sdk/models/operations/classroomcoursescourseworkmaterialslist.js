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
var ClassroomCoursesCourseWorkMaterialsListPathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsListPathParams, _super);
    function ClassroomCoursesCourseWorkMaterialsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsListPathParams.prototype, "courseId", void 0);
    return ClassroomCoursesCourseWorkMaterialsListPathParams;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkMaterialsListPathParams };
export var ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum;
(function (ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum) {
    ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum["CourseworkMaterialStateUnspecified"] = "COURSEWORK_MATERIAL_STATE_UNSPECIFIED";
    ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum["Published"] = "PUBLISHED";
    ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum["Draft"] = "DRAFT";
    ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum["Deleted"] = "DELETED";
})(ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum || (ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum = {}));
var ClassroomCoursesCourseWorkMaterialsListQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsListQueryParams, _super);
    function ClassroomCoursesCourseWorkMaterialsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=courseWorkMaterialStates" }),
        __metadata("design:type", Array)
    ], ClassroomCoursesCourseWorkMaterialsListQueryParams.prototype, "courseWorkMaterialStates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=materialDriveId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsListQueryParams.prototype, "materialDriveId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=materialLink" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsListQueryParams.prototype, "materialLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ClassroomCoursesCourseWorkMaterialsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesCourseWorkMaterialsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsListQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesCourseWorkMaterialsListQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkMaterialsListQueryParams };
var ClassroomCoursesCourseWorkMaterialsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsListSecurityOption1, _super);
    function ClassroomCoursesCourseWorkMaterialsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkMaterialsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkMaterialsListSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkMaterialsListSecurityOption1;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkMaterialsListSecurityOption1 };
var ClassroomCoursesCourseWorkMaterialsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsListSecurityOption2, _super);
    function ClassroomCoursesCourseWorkMaterialsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkMaterialsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkMaterialsListSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkMaterialsListSecurityOption2;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkMaterialsListSecurityOption2 };
var ClassroomCoursesCourseWorkMaterialsListSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsListSecurity, _super);
    function ClassroomCoursesCourseWorkMaterialsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkMaterialsListSecurityOption1)
    ], ClassroomCoursesCourseWorkMaterialsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkMaterialsListSecurityOption2)
    ], ClassroomCoursesCourseWorkMaterialsListSecurity.prototype, "option2", void 0);
    return ClassroomCoursesCourseWorkMaterialsListSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkMaterialsListSecurity };
var ClassroomCoursesCourseWorkMaterialsListRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsListRequest, _super);
    function ClassroomCoursesCourseWorkMaterialsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkMaterialsListPathParams)
    ], ClassroomCoursesCourseWorkMaterialsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkMaterialsListQueryParams)
    ], ClassroomCoursesCourseWorkMaterialsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkMaterialsListSecurity)
    ], ClassroomCoursesCourseWorkMaterialsListRequest.prototype, "security", void 0);
    return ClassroomCoursesCourseWorkMaterialsListRequest;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkMaterialsListRequest };
var ClassroomCoursesCourseWorkMaterialsListResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsListResponse, _super);
    function ClassroomCoursesCourseWorkMaterialsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListCourseWorkMaterialResponse)
    ], ClassroomCoursesCourseWorkMaterialsListResponse.prototype, "listCourseWorkMaterialResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesCourseWorkMaterialsListResponse.prototype, "statusCode", void 0);
    return ClassroomCoursesCourseWorkMaterialsListResponse;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkMaterialsListResponse };
