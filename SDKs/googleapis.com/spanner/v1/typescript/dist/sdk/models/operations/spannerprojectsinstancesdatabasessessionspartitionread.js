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
var SpannerProjectsInstancesDatabasesSessionsPartitionReadPathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsPartitionReadPathParams, _super);
    function SpannerProjectsInstancesDatabasesSessionsPartitionReadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=session" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadPathParams.prototype, "session", void 0);
    return SpannerProjectsInstancesDatabasesSessionsPartitionReadPathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsPartitionReadPathParams };
var SpannerProjectsInstancesDatabasesSessionsPartitionReadQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsPartitionReadQueryParams, _super);
    function SpannerProjectsInstancesDatabasesSessionsPartitionReadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadQueryParams.prototype, "uploadProtocol", void 0);
    return SpannerProjectsInstancesDatabasesSessionsPartitionReadQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsPartitionReadQueryParams };
var SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurityOption1, _super);
    function SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurityOption1 };
var SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurityOption2, _super);
    function SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurityOption2 };
var SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurity, _super);
    function SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurityOption1)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurityOption2)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurity.prototype, "option2", void 0);
    return SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurity };
var SpannerProjectsInstancesDatabasesSessionsPartitionReadRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsPartitionReadRequest, _super);
    function SpannerProjectsInstancesDatabasesSessionsPartitionReadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsPartitionReadPathParams)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsPartitionReadQueryParams)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PartitionReadRequest)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurity)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadRequest.prototype, "security", void 0);
    return SpannerProjectsInstancesDatabasesSessionsPartitionReadRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsPartitionReadRequest };
var SpannerProjectsInstancesDatabasesSessionsPartitionReadResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsPartitionReadResponse, _super);
    function SpannerProjectsInstancesDatabasesSessionsPartitionReadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PartitionResponse)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadResponse.prototype, "partitionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionReadResponse.prototype, "statusCode", void 0);
    return SpannerProjectsInstancesDatabasesSessionsPartitionReadResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsPartitionReadResponse };
