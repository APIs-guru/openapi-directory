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
var ClassroomCoursesTopicsGetPathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTopicsGetPathParams, _super);
    function ClassroomCoursesTopicsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsGetPathParams.prototype, "courseId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsGetPathParams.prototype, "id", void 0);
    return ClassroomCoursesTopicsGetPathParams;
}(SpeakeasyBase));
export { ClassroomCoursesTopicsGetPathParams };
var ClassroomCoursesTopicsGetQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTopicsGetQueryParams, _super);
    function ClassroomCoursesTopicsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesTopicsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsGetQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomCoursesTopicsGetQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesTopicsGetQueryParams };
var ClassroomCoursesTopicsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTopicsGetSecurityOption1, _super);
    function ClassroomCoursesTopicsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesTopicsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesTopicsGetSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomCoursesTopicsGetSecurityOption1;
}(SpeakeasyBase));
export { ClassroomCoursesTopicsGetSecurityOption1 };
var ClassroomCoursesTopicsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTopicsGetSecurityOption2, _super);
    function ClassroomCoursesTopicsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesTopicsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesTopicsGetSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomCoursesTopicsGetSecurityOption2;
}(SpeakeasyBase));
export { ClassroomCoursesTopicsGetSecurityOption2 };
var ClassroomCoursesTopicsGetSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTopicsGetSecurity, _super);
    function ClassroomCoursesTopicsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesTopicsGetSecurityOption1)
    ], ClassroomCoursesTopicsGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesTopicsGetSecurityOption2)
    ], ClassroomCoursesTopicsGetSecurity.prototype, "option2", void 0);
    return ClassroomCoursesTopicsGetSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesTopicsGetSecurity };
var ClassroomCoursesTopicsGetRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTopicsGetRequest, _super);
    function ClassroomCoursesTopicsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesTopicsGetPathParams)
    ], ClassroomCoursesTopicsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesTopicsGetQueryParams)
    ], ClassroomCoursesTopicsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomCoursesTopicsGetSecurity)
    ], ClassroomCoursesTopicsGetRequest.prototype, "security", void 0);
    return ClassroomCoursesTopicsGetRequest;
}(SpeakeasyBase));
export { ClassroomCoursesTopicsGetRequest };
var ClassroomCoursesTopicsGetResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesTopicsGetResponse, _super);
    function ClassroomCoursesTopicsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesTopicsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesTopicsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Topic)
    ], ClassroomCoursesTopicsGetResponse.prototype, "topic", void 0);
    return ClassroomCoursesTopicsGetResponse;
}(SpeakeasyBase));
export { ClassroomCoursesTopicsGetResponse };
