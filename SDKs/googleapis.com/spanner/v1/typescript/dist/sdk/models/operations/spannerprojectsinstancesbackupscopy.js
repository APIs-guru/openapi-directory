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
var SpannerProjectsInstancesBackupsCopyPathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesBackupsCopyPathParams, _super);
    function SpannerProjectsInstancesBackupsCopyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCopyPathParams.prototype, "parent", void 0);
    return SpannerProjectsInstancesBackupsCopyPathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesBackupsCopyPathParams };
var SpannerProjectsInstancesBackupsCopyQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesBackupsCopyQueryParams, _super);
    function SpannerProjectsInstancesBackupsCopyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCopyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCopyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCopyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCopyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCopyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCopyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCopyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstancesBackupsCopyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCopyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCopyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCopyQueryParams.prototype, "uploadProtocol", void 0);
    return SpannerProjectsInstancesBackupsCopyQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesBackupsCopyQueryParams };
var SpannerProjectsInstancesBackupsCopySecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesBackupsCopySecurityOption1, _super);
    function SpannerProjectsInstancesBackupsCopySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesBackupsCopySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesBackupsCopySecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesBackupsCopySecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstancesBackupsCopySecurityOption1 };
var SpannerProjectsInstancesBackupsCopySecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesBackupsCopySecurityOption2, _super);
    function SpannerProjectsInstancesBackupsCopySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesBackupsCopySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesBackupsCopySecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesBackupsCopySecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstancesBackupsCopySecurityOption2 };
var SpannerProjectsInstancesBackupsCopySecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesBackupsCopySecurity, _super);
    function SpannerProjectsInstancesBackupsCopySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesBackupsCopySecurityOption1)
    ], SpannerProjectsInstancesBackupsCopySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesBackupsCopySecurityOption2)
    ], SpannerProjectsInstancesBackupsCopySecurity.prototype, "option2", void 0);
    return SpannerProjectsInstancesBackupsCopySecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstancesBackupsCopySecurity };
var SpannerProjectsInstancesBackupsCopyRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesBackupsCopyRequest, _super);
    function SpannerProjectsInstancesBackupsCopyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesBackupsCopyPathParams)
    ], SpannerProjectsInstancesBackupsCopyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesBackupsCopyQueryParams)
    ], SpannerProjectsInstancesBackupsCopyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CopyBackupRequest)
    ], SpannerProjectsInstancesBackupsCopyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesBackupsCopySecurity)
    ], SpannerProjectsInstancesBackupsCopyRequest.prototype, "security", void 0);
    return SpannerProjectsInstancesBackupsCopyRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstancesBackupsCopyRequest };
var SpannerProjectsInstancesBackupsCopyResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesBackupsCopyResponse, _super);
    function SpannerProjectsInstancesBackupsCopyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupsCopyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], SpannerProjectsInstancesBackupsCopyResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesBackupsCopyResponse.prototype, "statusCode", void 0);
    return SpannerProjectsInstancesBackupsCopyResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstancesBackupsCopyResponse };
