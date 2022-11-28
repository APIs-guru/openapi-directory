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
var SpannerProjectsInstancesDatabasesCreatePathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesCreatePathParams, _super);
    function SpannerProjectsInstancesDatabasesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesCreatePathParams.prototype, "parent", void 0);
    return SpannerProjectsInstancesDatabasesCreatePathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesCreatePathParams };
var SpannerProjectsInstancesDatabasesCreateQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesCreateQueryParams, _super);
    function SpannerProjectsInstancesDatabasesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstancesDatabasesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return SpannerProjectsInstancesDatabasesCreateQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesCreateQueryParams };
var SpannerProjectsInstancesDatabasesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesCreateSecurityOption1, _super);
    function SpannerProjectsInstancesDatabasesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesCreateSecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesCreateSecurityOption1 };
var SpannerProjectsInstancesDatabasesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesCreateSecurityOption2, _super);
    function SpannerProjectsInstancesDatabasesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesCreateSecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesCreateSecurityOption2 };
var SpannerProjectsInstancesDatabasesCreateSecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesCreateSecurity, _super);
    function SpannerProjectsInstancesDatabasesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesCreateSecurityOption1)
    ], SpannerProjectsInstancesDatabasesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesCreateSecurityOption2)
    ], SpannerProjectsInstancesDatabasesCreateSecurity.prototype, "option2", void 0);
    return SpannerProjectsInstancesDatabasesCreateSecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesCreateSecurity };
var SpannerProjectsInstancesDatabasesCreateRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesCreateRequest, _super);
    function SpannerProjectsInstancesDatabasesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesCreatePathParams)
    ], SpannerProjectsInstancesDatabasesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesCreateQueryParams)
    ], SpannerProjectsInstancesDatabasesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateDatabaseRequest)
    ], SpannerProjectsInstancesDatabasesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesCreateSecurity)
    ], SpannerProjectsInstancesDatabasesCreateRequest.prototype, "security", void 0);
    return SpannerProjectsInstancesDatabasesCreateRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesCreateRequest };
var SpannerProjectsInstancesDatabasesCreateResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesCreateResponse, _super);
    function SpannerProjectsInstancesDatabasesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], SpannerProjectsInstancesDatabasesCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesDatabasesCreateResponse.prototype, "statusCode", void 0);
    return SpannerProjectsInstancesDatabasesCreateResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesCreateResponse };
