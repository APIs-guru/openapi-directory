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
var ClassroomUserProfilesGuardiansDeletePathParams = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardiansDeletePathParams, _super);
    function ClassroomUserProfilesGuardiansDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=guardianId" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansDeletePathParams.prototype, "guardianId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=studentId" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansDeletePathParams.prototype, "studentId", void 0);
    return ClassroomUserProfilesGuardiansDeletePathParams;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardiansDeletePathParams };
var ClassroomUserProfilesGuardiansDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardiansDeleteQueryParams, _super);
    function ClassroomUserProfilesGuardiansDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomUserProfilesGuardiansDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomUserProfilesGuardiansDeleteQueryParams;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardiansDeleteQueryParams };
var ClassroomUserProfilesGuardiansDeleteSecurity = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardiansDeleteSecurity, _super);
    function ClassroomUserProfilesGuardiansDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomUserProfilesGuardiansDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomUserProfilesGuardiansDeleteSecurity.prototype, "oauth2c", void 0);
    return ClassroomUserProfilesGuardiansDeleteSecurity;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardiansDeleteSecurity };
var ClassroomUserProfilesGuardiansDeleteRequest = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardiansDeleteRequest, _super);
    function ClassroomUserProfilesGuardiansDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomUserProfilesGuardiansDeletePathParams)
    ], ClassroomUserProfilesGuardiansDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomUserProfilesGuardiansDeleteQueryParams)
    ], ClassroomUserProfilesGuardiansDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomUserProfilesGuardiansDeleteSecurity)
    ], ClassroomUserProfilesGuardiansDeleteRequest.prototype, "security", void 0);
    return ClassroomUserProfilesGuardiansDeleteRequest;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardiansDeleteRequest };
var ClassroomUserProfilesGuardiansDeleteResponse = /** @class */ (function (_super) {
    __extends(ClassroomUserProfilesGuardiansDeleteResponse, _super);
    function ClassroomUserProfilesGuardiansDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClassroomUserProfilesGuardiansDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ClassroomUserProfilesGuardiansDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClassroomUserProfilesGuardiansDeleteResponse.prototype, "statusCode", void 0);
    return ClassroomUserProfilesGuardiansDeleteResponse;
}(SpeakeasyBase));
export { ClassroomUserProfilesGuardiansDeleteResponse };
