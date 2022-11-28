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
var CloudprofilerProjectsProfilesCreateOfflinePathParams = /** @class */ (function (_super) {
    __extends(CloudprofilerProjectsProfilesCreateOfflinePathParams, _super);
    function CloudprofilerProjectsProfilesCreateOfflinePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesCreateOfflinePathParams.prototype, "parent", void 0);
    return CloudprofilerProjectsProfilesCreateOfflinePathParams;
}(SpeakeasyBase));
export { CloudprofilerProjectsProfilesCreateOfflinePathParams };
var CloudprofilerProjectsProfilesCreateOfflineQueryParams = /** @class */ (function (_super) {
    __extends(CloudprofilerProjectsProfilesCreateOfflineQueryParams, _super);
    function CloudprofilerProjectsProfilesCreateOfflineQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesCreateOfflineQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesCreateOfflineQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesCreateOfflineQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesCreateOfflineQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesCreateOfflineQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesCreateOfflineQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesCreateOfflineQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudprofilerProjectsProfilesCreateOfflineQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesCreateOfflineQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesCreateOfflineQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesCreateOfflineQueryParams.prototype, "uploadProtocol", void 0);
    return CloudprofilerProjectsProfilesCreateOfflineQueryParams;
}(SpeakeasyBase));
export { CloudprofilerProjectsProfilesCreateOfflineQueryParams };
var CloudprofilerProjectsProfilesCreateOfflineSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudprofilerProjectsProfilesCreateOfflineSecurityOption1, _super);
    function CloudprofilerProjectsProfilesCreateOfflineSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudprofilerProjectsProfilesCreateOfflineSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudprofilerProjectsProfilesCreateOfflineSecurityOption1.prototype, "oauth2c", void 0);
    return CloudprofilerProjectsProfilesCreateOfflineSecurityOption1;
}(SpeakeasyBase));
export { CloudprofilerProjectsProfilesCreateOfflineSecurityOption1 };
var CloudprofilerProjectsProfilesCreateOfflineSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudprofilerProjectsProfilesCreateOfflineSecurityOption2, _super);
    function CloudprofilerProjectsProfilesCreateOfflineSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudprofilerProjectsProfilesCreateOfflineSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudprofilerProjectsProfilesCreateOfflineSecurityOption2.prototype, "oauth2c", void 0);
    return CloudprofilerProjectsProfilesCreateOfflineSecurityOption2;
}(SpeakeasyBase));
export { CloudprofilerProjectsProfilesCreateOfflineSecurityOption2 };
var CloudprofilerProjectsProfilesCreateOfflineSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudprofilerProjectsProfilesCreateOfflineSecurityOption3, _super);
    function CloudprofilerProjectsProfilesCreateOfflineSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudprofilerProjectsProfilesCreateOfflineSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudprofilerProjectsProfilesCreateOfflineSecurityOption3.prototype, "oauth2c", void 0);
    return CloudprofilerProjectsProfilesCreateOfflineSecurityOption3;
}(SpeakeasyBase));
export { CloudprofilerProjectsProfilesCreateOfflineSecurityOption3 };
var CloudprofilerProjectsProfilesCreateOfflineSecurity = /** @class */ (function (_super) {
    __extends(CloudprofilerProjectsProfilesCreateOfflineSecurity, _super);
    function CloudprofilerProjectsProfilesCreateOfflineSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudprofilerProjectsProfilesCreateOfflineSecurityOption1)
    ], CloudprofilerProjectsProfilesCreateOfflineSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudprofilerProjectsProfilesCreateOfflineSecurityOption2)
    ], CloudprofilerProjectsProfilesCreateOfflineSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudprofilerProjectsProfilesCreateOfflineSecurityOption3)
    ], CloudprofilerProjectsProfilesCreateOfflineSecurity.prototype, "option3", void 0);
    return CloudprofilerProjectsProfilesCreateOfflineSecurity;
}(SpeakeasyBase));
export { CloudprofilerProjectsProfilesCreateOfflineSecurity };
var CloudprofilerProjectsProfilesCreateOfflineRequest = /** @class */ (function (_super) {
    __extends(CloudprofilerProjectsProfilesCreateOfflineRequest, _super);
    function CloudprofilerProjectsProfilesCreateOfflineRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprofilerProjectsProfilesCreateOfflinePathParams)
    ], CloudprofilerProjectsProfilesCreateOfflineRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprofilerProjectsProfilesCreateOfflineQueryParams)
    ], CloudprofilerProjectsProfilesCreateOfflineRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ProfileInput)
    ], CloudprofilerProjectsProfilesCreateOfflineRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprofilerProjectsProfilesCreateOfflineSecurity)
    ], CloudprofilerProjectsProfilesCreateOfflineRequest.prototype, "security", void 0);
    return CloudprofilerProjectsProfilesCreateOfflineRequest;
}(SpeakeasyBase));
export { CloudprofilerProjectsProfilesCreateOfflineRequest };
var CloudprofilerProjectsProfilesCreateOfflineResponse = /** @class */ (function (_super) {
    __extends(CloudprofilerProjectsProfilesCreateOfflineResponse, _super);
    function CloudprofilerProjectsProfilesCreateOfflineResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesCreateOfflineResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Profile)
    ], CloudprofilerProjectsProfilesCreateOfflineResponse.prototype, "profile", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudprofilerProjectsProfilesCreateOfflineResponse.prototype, "statusCode", void 0);
    return CloudprofilerProjectsProfilesCreateOfflineResponse;
}(SpeakeasyBase));
export { CloudprofilerProjectsProfilesCreateOfflineResponse };
