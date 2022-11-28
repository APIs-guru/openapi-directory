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
var RuntimeconfigProjectsConfigsCreatePathParams = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsCreatePathParams, _super);
    function RuntimeconfigProjectsConfigsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsCreatePathParams.prototype, "parent", void 0);
    return RuntimeconfigProjectsConfigsCreatePathParams;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsCreatePathParams };
var RuntimeconfigProjectsConfigsCreateQueryParams = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsCreateQueryParams, _super);
    function RuntimeconfigProjectsConfigsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RuntimeconfigProjectsConfigsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return RuntimeconfigProjectsConfigsCreateQueryParams;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsCreateQueryParams };
var RuntimeconfigProjectsConfigsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsCreateSecurityOption1, _super);
    function RuntimeconfigProjectsConfigsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RuntimeconfigProjectsConfigsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RuntimeconfigProjectsConfigsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return RuntimeconfigProjectsConfigsCreateSecurityOption1;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsCreateSecurityOption1 };
var RuntimeconfigProjectsConfigsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsCreateSecurityOption2, _super);
    function RuntimeconfigProjectsConfigsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RuntimeconfigProjectsConfigsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RuntimeconfigProjectsConfigsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return RuntimeconfigProjectsConfigsCreateSecurityOption2;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsCreateSecurityOption2 };
var RuntimeconfigProjectsConfigsCreateSecurity = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsCreateSecurity, _super);
    function RuntimeconfigProjectsConfigsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", RuntimeconfigProjectsConfigsCreateSecurityOption1)
    ], RuntimeconfigProjectsConfigsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", RuntimeconfigProjectsConfigsCreateSecurityOption2)
    ], RuntimeconfigProjectsConfigsCreateSecurity.prototype, "option2", void 0);
    return RuntimeconfigProjectsConfigsCreateSecurity;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsCreateSecurity };
var RuntimeconfigProjectsConfigsCreateRequest = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsCreateRequest, _super);
    function RuntimeconfigProjectsConfigsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsCreatePathParams)
    ], RuntimeconfigProjectsConfigsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsCreateQueryParams)
    ], RuntimeconfigProjectsConfigsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RuntimeConfig)
    ], RuntimeconfigProjectsConfigsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsCreateSecurity)
    ], RuntimeconfigProjectsConfigsCreateRequest.prototype, "security", void 0);
    return RuntimeconfigProjectsConfigsCreateRequest;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsCreateRequest };
var RuntimeconfigProjectsConfigsCreateResponse = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsCreateResponse, _super);
    function RuntimeconfigProjectsConfigsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RuntimeConfig)
    ], RuntimeconfigProjectsConfigsCreateResponse.prototype, "runtimeConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RuntimeconfigProjectsConfigsCreateResponse.prototype, "statusCode", void 0);
    return RuntimeconfigProjectsConfigsCreateResponse;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsCreateResponse };
