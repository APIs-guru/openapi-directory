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
var ClassroomCoursesCourseWorkMaterialsDeletePathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsDeletePathParams, _super);
    function ClassroomCoursesCourseWorkMaterialsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsDeletePathParams.prototype, "courseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsDeletePathParams.prototype, "id", void 0);
    return ClassroomCoursesCourseWorkMaterialsDeletePathParams;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkMaterialsDeletePathParams };
var ClassroomCoursesCourseWorkMaterialsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsDeleteQueryParams, _super);
    function ClassroomCoursesCourseWorkMaterialsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesCourseWorkMaterialsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesCourseWorkMaterialsDeleteQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkMaterialsDeleteQueryParams };
var ClassroomCoursesCourseWorkMaterialsDeleteSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsDeleteSecurity, _super);
    function ClassroomCoursesCourseWorkMaterialsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkMaterialsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkMaterialsDeleteSecurity.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkMaterialsDeleteSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkMaterialsDeleteSecurity };
var ClassroomCoursesCourseWorkMaterialsDeleteRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsDeleteRequest, _super);
    function ClassroomCoursesCourseWorkMaterialsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkMaterialsDeletePathParams)
    ], ClassroomCoursesCourseWorkMaterialsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkMaterialsDeleteQueryParams)
    ], ClassroomCoursesCourseWorkMaterialsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkMaterialsDeleteSecurity)
    ], ClassroomCoursesCourseWorkMaterialsDeleteRequest.prototype, "security", void 0);
    return ClassroomCoursesCourseWorkMaterialsDeleteRequest;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkMaterialsDeleteRequest };
var ClassroomCoursesCourseWorkMaterialsDeleteResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkMaterialsDeleteResponse, _super);
    function ClassroomCoursesCourseWorkMaterialsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkMaterialsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ClassroomCoursesCourseWorkMaterialsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesCourseWorkMaterialsDeleteResponse.prototype, "statusCode", void 0);
    return ClassroomCoursesCourseWorkMaterialsDeleteResponse;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkMaterialsDeleteResponse };
