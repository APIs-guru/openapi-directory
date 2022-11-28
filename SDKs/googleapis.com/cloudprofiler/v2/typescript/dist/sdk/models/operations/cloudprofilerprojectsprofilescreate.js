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
var CloudprofilerProjectsProfilesCreatePathParams = /** @class */ (function (_super) {
    __extends(CloudprofilerProjectsProfilesCreatePathParams, _super);
    function CloudprofilerProjectsProfilesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesCreatePathParams.prototype, "parent", void 0);
    return CloudprofilerProjectsProfilesCreatePathParams;
}(SpeakeasyBase));
export { CloudprofilerProjectsProfilesCreatePathParams };
var CloudprofilerProjectsProfilesCreateQueryParams = /** @class */ (function (_super) {
    __extends(CloudprofilerProjectsProfilesCreateQueryParams, _super);
    function CloudprofilerProjectsProfilesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudprofilerProjectsProfilesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CloudprofilerProjectsProfilesCreateQueryParams;
}(SpeakeasyBase));
export { CloudprofilerProjectsProfilesCreateQueryParams };
var CloudprofilerProjectsProfilesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudprofilerProjectsProfilesCreateSecurityOption1, _super);
    function CloudprofilerProjectsProfilesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudprofilerProjectsProfilesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudprofilerProjectsProfilesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return CloudprofilerProjectsProfilesCreateSecurityOption1;
}(SpeakeasyBase));
export { CloudprofilerProjectsProfilesCreateSecurityOption1 };
var CloudprofilerProjectsProfilesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudprofilerProjectsProfilesCreateSecurityOption2, _super);
    function CloudprofilerProjectsProfilesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudprofilerProjectsProfilesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudprofilerProjectsProfilesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return CloudprofilerProjectsProfilesCreateSecurityOption2;
}(SpeakeasyBase));
export { CloudprofilerProjectsProfilesCreateSecurityOption2 };
var CloudprofilerProjectsProfilesCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudprofilerProjectsProfilesCreateSecurityOption3, _super);
    function CloudprofilerProjectsProfilesCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudprofilerProjectsProfilesCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudprofilerProjectsProfilesCreateSecurityOption3.prototype, "oauth2c", void 0);
    return CloudprofilerProjectsProfilesCreateSecurityOption3;
}(SpeakeasyBase));
export { CloudprofilerProjectsProfilesCreateSecurityOption3 };
var CloudprofilerProjectsProfilesCreateSecurity = /** @class */ (function (_super) {
    __extends(CloudprofilerProjectsProfilesCreateSecurity, _super);
    function CloudprofilerProjectsProfilesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudprofilerProjectsProfilesCreateSecurityOption1)
    ], CloudprofilerProjectsProfilesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudprofilerProjectsProfilesCreateSecurityOption2)
    ], CloudprofilerProjectsProfilesCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudprofilerProjectsProfilesCreateSecurityOption3)
    ], CloudprofilerProjectsProfilesCreateSecurity.prototype, "option3", void 0);
    return CloudprofilerProjectsProfilesCreateSecurity;
}(SpeakeasyBase));
export { CloudprofilerProjectsProfilesCreateSecurity };
var CloudprofilerProjectsProfilesCreateRequest = /** @class */ (function (_super) {
    __extends(CloudprofilerProjectsProfilesCreateRequest, _super);
    function CloudprofilerProjectsProfilesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprofilerProjectsProfilesCreatePathParams)
    ], CloudprofilerProjectsProfilesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprofilerProjectsProfilesCreateQueryParams)
    ], CloudprofilerProjectsProfilesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateProfileRequest)
    ], CloudprofilerProjectsProfilesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprofilerProjectsProfilesCreateSecurity)
    ], CloudprofilerProjectsProfilesCreateRequest.prototype, "security", void 0);
    return CloudprofilerProjectsProfilesCreateRequest;
}(SpeakeasyBase));
export { CloudprofilerProjectsProfilesCreateRequest };
var CloudprofilerProjectsProfilesCreateResponse = /** @class */ (function (_super) {
    __extends(CloudprofilerProjectsProfilesCreateResponse, _super);
    function CloudprofilerProjectsProfilesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Profile)
    ], CloudprofilerProjectsProfilesCreateResponse.prototype, "profile", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudprofilerProjectsProfilesCreateResponse.prototype, "statusCode", void 0);
    return CloudprofilerProjectsProfilesCreateResponse;
}(SpeakeasyBase));
export { CloudprofilerProjectsProfilesCreateResponse };
