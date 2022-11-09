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
var ClassroomUserProfilesGuardiansGetPathParams = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardiansGetPathParams, _super);
    function ClassroomUserProfilesGuardiansGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=guardianId" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansGetPathParams.prototype, "guardianId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=studentId" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansGetPathParams.prototype, "studentId", void 0);
    return ClassroomUserProfilesGuardiansGetPathParams;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardiansGetPathParams };
var ClassroomUserProfilesGuardiansGetQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardiansGetQueryParams, _super);
    function ClassroomUserProfilesGuardiansGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomUserProfilesGuardiansGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansGetQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomUserProfilesGuardiansGetQueryParams;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardiansGetQueryParams };
var ClassroomUserProfilesGuardiansGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardiansGetSecurityOption1, _super);
    function ClassroomUserProfilesGuardiansGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomUserProfilesGuardiansGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomUserProfilesGuardiansGetSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomUserProfilesGuardiansGetSecurityOption1;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardiansGetSecurityOption1 };
var ClassroomUserProfilesGuardiansGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardiansGetSecurityOption2, _super);
    function ClassroomUserProfilesGuardiansGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomUserProfilesGuardiansGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomUserProfilesGuardiansGetSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomUserProfilesGuardiansGetSecurityOption2;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardiansGetSecurityOption2 };
var ClassroomUserProfilesGuardiansGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardiansGetSecurityOption3, _super);
    function ClassroomUserProfilesGuardiansGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomUserProfilesGuardiansGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomUserProfilesGuardiansGetSecurityOption3.prototype, "oauth2c", void 0);
    return ClassroomUserProfilesGuardiansGetSecurityOption3;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardiansGetSecurityOption3 };
var ClassroomUserProfilesGuardiansGetSecurity = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardiansGetSecurity, _super);
    function ClassroomUserProfilesGuardiansGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomUserProfilesGuardiansGetSecurityOption1)
    ], ClassroomUserProfilesGuardiansGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomUserProfilesGuardiansGetSecurityOption2)
    ], ClassroomUserProfilesGuardiansGetSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomUserProfilesGuardiansGetSecurityOption3)
    ], ClassroomUserProfilesGuardiansGetSecurity.prototype, "option3", void 0);
    return ClassroomUserProfilesGuardiansGetSecurity;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardiansGetSecurity };
var ClassroomUserProfilesGuardiansGetRequest = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardiansGetRequest, _super);
    function ClassroomUserProfilesGuardiansGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomUserProfilesGuardiansGetPathParams)
    ], ClassroomUserProfilesGuardiansGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomUserProfilesGuardiansGetQueryParams)
    ], ClassroomUserProfilesGuardiansGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomUserProfilesGuardiansGetSecurity)
    ], ClassroomUserProfilesGuardiansGetRequest.prototype, "security", void 0);
    return ClassroomUserProfilesGuardiansGetRequest;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardiansGetRequest };
var ClassroomUserProfilesGuardiansGetResponse = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardiansGetResponse, _super);
    function ClassroomUserProfilesGuardiansGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Guardian)
    ], ClassroomUserProfilesGuardiansGetResponse.prototype, "guardian", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ClassroomUserProfilesGuardiansGetResponse.prototype, "statusCode", void 0);
    return ClassroomUserProfilesGuardiansGetResponse;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardiansGetResponse };
