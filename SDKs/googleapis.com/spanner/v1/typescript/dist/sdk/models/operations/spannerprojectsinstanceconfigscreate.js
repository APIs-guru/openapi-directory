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
var SpannerProjectsInstanceConfigsCreatePathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstanceConfigsCreatePathParams, _super);
    function SpannerProjectsInstanceConfigsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsCreatePathParams.prototype, "parent", void 0);
    return SpannerProjectsInstanceConfigsCreatePathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstanceConfigsCreatePathParams };
var SpannerProjectsInstanceConfigsCreateQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstanceConfigsCreateQueryParams, _super);
    function SpannerProjectsInstanceConfigsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstanceConfigsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return SpannerProjectsInstanceConfigsCreateQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstanceConfigsCreateQueryParams };
var SpannerProjectsInstanceConfigsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstanceConfigsCreateSecurityOption1, _super);
    function SpannerProjectsInstanceConfigsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstanceConfigsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstanceConfigsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstanceConfigsCreateSecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstanceConfigsCreateSecurityOption1 };
var SpannerProjectsInstanceConfigsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstanceConfigsCreateSecurityOption2, _super);
    function SpannerProjectsInstanceConfigsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstanceConfigsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstanceConfigsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstanceConfigsCreateSecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstanceConfigsCreateSecurityOption2 };
var SpannerProjectsInstanceConfigsCreateSecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstanceConfigsCreateSecurity, _super);
    function SpannerProjectsInstanceConfigsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstanceConfigsCreateSecurityOption1)
    ], SpannerProjectsInstanceConfigsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstanceConfigsCreateSecurityOption2)
    ], SpannerProjectsInstanceConfigsCreateSecurity.prototype, "option2", void 0);
    return SpannerProjectsInstanceConfigsCreateSecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstanceConfigsCreateSecurity };
var SpannerProjectsInstanceConfigsCreateRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstanceConfigsCreateRequest, _super);
    function SpannerProjectsInstanceConfigsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstanceConfigsCreatePathParams)
    ], SpannerProjectsInstanceConfigsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstanceConfigsCreateQueryParams)
    ], SpannerProjectsInstanceConfigsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateInstanceConfigRequestInput)
    ], SpannerProjectsInstanceConfigsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstanceConfigsCreateSecurity)
    ], SpannerProjectsInstanceConfigsCreateRequest.prototype, "security", void 0);
    return SpannerProjectsInstanceConfigsCreateRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstanceConfigsCreateRequest };
var SpannerProjectsInstanceConfigsCreateResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstanceConfigsCreateResponse, _super);
    function SpannerProjectsInstanceConfigsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], SpannerProjectsInstanceConfigsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstanceConfigsCreateResponse.prototype, "statusCode", void 0);
    return SpannerProjectsInstanceConfigsCreateResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstanceConfigsCreateResponse };
