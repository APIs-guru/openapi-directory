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
var CloudprofilerProjectsProfilesPatchPathParams = /** @class */ (function (_super) {
    __extends(CloudprofilerProjectsProfilesPatchPathParams, _super);
    function CloudprofilerProjectsProfilesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesPatchPathParams.prototype, "name", void 0);
    return CloudprofilerProjectsProfilesPatchPathParams;
}(SpeakeasyBase));
export { CloudprofilerProjectsProfilesPatchPathParams };
var CloudprofilerProjectsProfilesPatchQueryParams = /** @class */ (function (_super) {
    __extends(CloudprofilerProjectsProfilesPatchQueryParams, _super);
    function CloudprofilerProjectsProfilesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudprofilerProjectsProfilesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return CloudprofilerProjectsProfilesPatchQueryParams;
}(SpeakeasyBase));
export { CloudprofilerProjectsProfilesPatchQueryParams };
var CloudprofilerProjectsProfilesPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudprofilerProjectsProfilesPatchSecurityOption1, _super);
    function CloudprofilerProjectsProfilesPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudprofilerProjectsProfilesPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudprofilerProjectsProfilesPatchSecurityOption1.prototype, "oauth2c", void 0);
    return CloudprofilerProjectsProfilesPatchSecurityOption1;
}(SpeakeasyBase));
export { CloudprofilerProjectsProfilesPatchSecurityOption1 };
var CloudprofilerProjectsProfilesPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudprofilerProjectsProfilesPatchSecurityOption2, _super);
    function CloudprofilerProjectsProfilesPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudprofilerProjectsProfilesPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudprofilerProjectsProfilesPatchSecurityOption2.prototype, "oauth2c", void 0);
    return CloudprofilerProjectsProfilesPatchSecurityOption2;
}(SpeakeasyBase));
export { CloudprofilerProjectsProfilesPatchSecurityOption2 };
var CloudprofilerProjectsProfilesPatchSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudprofilerProjectsProfilesPatchSecurityOption3, _super);
    function CloudprofilerProjectsProfilesPatchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudprofilerProjectsProfilesPatchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudprofilerProjectsProfilesPatchSecurityOption3.prototype, "oauth2c", void 0);
    return CloudprofilerProjectsProfilesPatchSecurityOption3;
}(SpeakeasyBase));
export { CloudprofilerProjectsProfilesPatchSecurityOption3 };
var CloudprofilerProjectsProfilesPatchSecurity = /** @class */ (function (_super) {
    __extends(CloudprofilerProjectsProfilesPatchSecurity, _super);
    function CloudprofilerProjectsProfilesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudprofilerProjectsProfilesPatchSecurityOption1)
    ], CloudprofilerProjectsProfilesPatchSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudprofilerProjectsProfilesPatchSecurityOption2)
    ], CloudprofilerProjectsProfilesPatchSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudprofilerProjectsProfilesPatchSecurityOption3)
    ], CloudprofilerProjectsProfilesPatchSecurity.prototype, "option3", void 0);
    return CloudprofilerProjectsProfilesPatchSecurity;
}(SpeakeasyBase));
export { CloudprofilerProjectsProfilesPatchSecurity };
var CloudprofilerProjectsProfilesPatchRequest = /** @class */ (function (_super) {
    __extends(CloudprofilerProjectsProfilesPatchRequest, _super);
    function CloudprofilerProjectsProfilesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudprofilerProjectsProfilesPatchPathParams)
    ], CloudprofilerProjectsProfilesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudprofilerProjectsProfilesPatchQueryParams)
    ], CloudprofilerProjectsProfilesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Profile)
    ], CloudprofilerProjectsProfilesPatchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudprofilerProjectsProfilesPatchSecurity)
    ], CloudprofilerProjectsProfilesPatchRequest.prototype, "security", void 0);
    return CloudprofilerProjectsProfilesPatchRequest;
}(SpeakeasyBase));
export { CloudprofilerProjectsProfilesPatchRequest };
var CloudprofilerProjectsProfilesPatchResponse = /** @class */ (function (_super) {
    __extends(CloudprofilerProjectsProfilesPatchResponse, _super);
    function CloudprofilerProjectsProfilesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudprofilerProjectsProfilesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Profile)
    ], CloudprofilerProjectsProfilesPatchResponse.prototype, "profile", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudprofilerProjectsProfilesPatchResponse.prototype, "statusCode", void 0);
    return CloudprofilerProjectsProfilesPatchResponse;
}(SpeakeasyBase));
export { CloudprofilerProjectsProfilesPatchResponse };
