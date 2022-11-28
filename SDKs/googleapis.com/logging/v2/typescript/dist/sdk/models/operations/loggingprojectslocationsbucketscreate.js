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
var LoggingProjectsLocationsBucketsCreatePathParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsCreatePathParams, _super);
    function LoggingProjectsLocationsBucketsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsCreatePathParams.prototype, "parent", void 0);
    return LoggingProjectsLocationsBucketsCreatePathParams;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsCreatePathParams };
var LoggingProjectsLocationsBucketsCreateQueryParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsCreateQueryParams, _super);
    function LoggingProjectsLocationsBucketsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bucketId" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsCreateQueryParams.prototype, "bucketId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingProjectsLocationsBucketsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingProjectsLocationsBucketsCreateQueryParams;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsCreateQueryParams };
var LoggingProjectsLocationsBucketsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsCreateSecurityOption1, _super);
    function LoggingProjectsLocationsBucketsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsBucketsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsBucketsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsBucketsCreateSecurityOption1;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsCreateSecurityOption1 };
var LoggingProjectsLocationsBucketsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsCreateSecurityOption2, _super);
    function LoggingProjectsLocationsBucketsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsBucketsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsBucketsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsBucketsCreateSecurityOption2;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsCreateSecurityOption2 };
var LoggingProjectsLocationsBucketsCreateSecurity = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsCreateSecurity, _super);
    function LoggingProjectsLocationsBucketsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsBucketsCreateSecurityOption1)
    ], LoggingProjectsLocationsBucketsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsBucketsCreateSecurityOption2)
    ], LoggingProjectsLocationsBucketsCreateSecurity.prototype, "option2", void 0);
    return LoggingProjectsLocationsBucketsCreateSecurity;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsCreateSecurity };
var LoggingProjectsLocationsBucketsCreateRequest = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsCreateRequest, _super);
    function LoggingProjectsLocationsBucketsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsLocationsBucketsCreatePathParams)
    ], LoggingProjectsLocationsBucketsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsLocationsBucketsCreateQueryParams)
    ], LoggingProjectsLocationsBucketsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LogBucketInput)
    ], LoggingProjectsLocationsBucketsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsLocationsBucketsCreateSecurity)
    ], LoggingProjectsLocationsBucketsCreateRequest.prototype, "security", void 0);
    return LoggingProjectsLocationsBucketsCreateRequest;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsCreateRequest };
var LoggingProjectsLocationsBucketsCreateResponse = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsCreateResponse, _super);
    function LoggingProjectsLocationsBucketsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LogBucket)
    ], LoggingProjectsLocationsBucketsCreateResponse.prototype, "logBucket", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LoggingProjectsLocationsBucketsCreateResponse.prototype, "statusCode", void 0);
    return LoggingProjectsLocationsBucketsCreateResponse;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsCreateResponse };
