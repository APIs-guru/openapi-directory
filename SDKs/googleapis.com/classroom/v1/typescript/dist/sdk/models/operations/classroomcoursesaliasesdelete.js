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
var ClassroomCoursesAliasesDeletePathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAliasesDeletePathParams, _super);
    function ClassroomCoursesAliasesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alias" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesDeletePathParams.prototype, "alias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesDeletePathParams.prototype, "courseId", void 0);
    return ClassroomCoursesAliasesDeletePathParams;
}(SpeakeasyBase));
export { ClassroomCoursesAliasesDeletePathParams };
var ClassroomCoursesAliasesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAliasesDeleteQueryParams, _super);
    function ClassroomCoursesAliasesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesAliasesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesAliasesDeleteQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesAliasesDeleteQueryParams };
var ClassroomCoursesAliasesDeleteSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAliasesDeleteSecurity, _super);
    function ClassroomCoursesAliasesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesAliasesDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesAliasesDeleteSecurity.prototype, "oauth2c", void 0);
    return ClassroomCoursesAliasesDeleteSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesAliasesDeleteSecurity };
var ClassroomCoursesAliasesDeleteRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAliasesDeleteRequest, _super);
    function ClassroomCoursesAliasesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesAliasesDeletePathParams)
    ], ClassroomCoursesAliasesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesAliasesDeleteQueryParams)
    ], ClassroomCoursesAliasesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesAliasesDeleteSecurity)
    ], ClassroomCoursesAliasesDeleteRequest.prototype, "security", void 0);
    return ClassroomCoursesAliasesDeleteRequest;
}(SpeakeasyBase));
export { ClassroomCoursesAliasesDeleteRequest };
var ClassroomCoursesAliasesDeleteResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesAliasesDeleteResponse, _super);
    function ClassroomCoursesAliasesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesAliasesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ClassroomCoursesAliasesDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesAliasesDeleteResponse.prototype, "statusCode", void 0);
    return ClassroomCoursesAliasesDeleteResponse;
}(SpeakeasyBase));
export { ClassroomCoursesAliasesDeleteResponse };
