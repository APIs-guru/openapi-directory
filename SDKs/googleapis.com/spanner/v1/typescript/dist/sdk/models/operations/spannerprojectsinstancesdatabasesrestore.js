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
var SpannerProjectsInstancesDatabasesRestorePathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesRestorePathParams, _super);
    function SpannerProjectsInstancesDatabasesRestorePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesRestorePathParams.prototype, "parent", void 0);
    return SpannerProjectsInstancesDatabasesRestorePathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesRestorePathParams };
var SpannerProjectsInstancesDatabasesRestoreQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesRestoreQueryParams, _super);
    function SpannerProjectsInstancesDatabasesRestoreQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesRestoreQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesRestoreQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesRestoreQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesRestoreQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesRestoreQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesRestoreQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesRestoreQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstancesDatabasesRestoreQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesRestoreQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesRestoreQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesRestoreQueryParams.prototype, "uploadProtocol", void 0);
    return SpannerProjectsInstancesDatabasesRestoreQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesRestoreQueryParams };
var SpannerProjectsInstancesDatabasesRestoreSecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesRestoreSecurityOption1, _super);
    function SpannerProjectsInstancesDatabasesRestoreSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesRestoreSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesRestoreSecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesRestoreSecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesRestoreSecurityOption1 };
var SpannerProjectsInstancesDatabasesRestoreSecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesRestoreSecurityOption2, _super);
    function SpannerProjectsInstancesDatabasesRestoreSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesRestoreSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesRestoreSecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesRestoreSecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesRestoreSecurityOption2 };
var SpannerProjectsInstancesDatabasesRestoreSecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesRestoreSecurity, _super);
    function SpannerProjectsInstancesDatabasesRestoreSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesRestoreSecurityOption1)
    ], SpannerProjectsInstancesDatabasesRestoreSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesRestoreSecurityOption2)
    ], SpannerProjectsInstancesDatabasesRestoreSecurity.prototype, "option2", void 0);
    return SpannerProjectsInstancesDatabasesRestoreSecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesRestoreSecurity };
var SpannerProjectsInstancesDatabasesRestoreRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesRestoreRequest, _super);
    function SpannerProjectsInstancesDatabasesRestoreRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesRestorePathParams)
    ], SpannerProjectsInstancesDatabasesRestoreRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesRestoreQueryParams)
    ], SpannerProjectsInstancesDatabasesRestoreRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RestoreDatabaseRequest)
    ], SpannerProjectsInstancesDatabasesRestoreRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesRestoreSecurity)
    ], SpannerProjectsInstancesDatabasesRestoreRequest.prototype, "security", void 0);
    return SpannerProjectsInstancesDatabasesRestoreRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesRestoreRequest };
var SpannerProjectsInstancesDatabasesRestoreResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesRestoreResponse, _super);
    function SpannerProjectsInstancesDatabasesRestoreResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesRestoreResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], SpannerProjectsInstancesDatabasesRestoreResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesDatabasesRestoreResponse.prototype, "statusCode", void 0);
    return SpannerProjectsInstancesDatabasesRestoreResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesRestoreResponse };
