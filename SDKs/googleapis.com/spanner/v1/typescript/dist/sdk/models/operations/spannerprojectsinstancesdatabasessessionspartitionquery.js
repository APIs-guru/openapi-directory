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
var SpannerProjectsInstancesDatabasesSessionsPartitionQueryPathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsPartitionQueryPathParams, _super);
    function SpannerProjectsInstancesDatabasesSessionsPartitionQueryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=session" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQueryPathParams.prototype, "session", void 0);
    return SpannerProjectsInstancesDatabasesSessionsPartitionQueryPathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsPartitionQueryPathParams };
var SpannerProjectsInstancesDatabasesSessionsPartitionQueryQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsPartitionQueryQueryParams, _super);
    function SpannerProjectsInstancesDatabasesSessionsPartitionQueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQueryQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQueryQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQueryQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQueryQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQueryQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQueryQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQueryQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQueryQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQueryQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQueryQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQueryQueryParams.prototype, "uploadProtocol", void 0);
    return SpannerProjectsInstancesDatabasesSessionsPartitionQueryQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsPartitionQueryQueryParams };
var SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurityOption1, _super);
    function SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurityOption1 };
var SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurityOption2, _super);
    function SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurityOption2 };
var SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurity, _super);
    function SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurityOption1)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurityOption2)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurity.prototype, "option2", void 0);
    return SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurity };
var SpannerProjectsInstancesDatabasesSessionsPartitionQueryRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsPartitionQueryRequest, _super);
    function SpannerProjectsInstancesDatabasesSessionsPartitionQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsPartitionQueryPathParams)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQueryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsPartitionQueryQueryParams)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQueryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PartitionQueryRequest)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQueryRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurity)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQueryRequest.prototype, "security", void 0);
    return SpannerProjectsInstancesDatabasesSessionsPartitionQueryRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsPartitionQueryRequest };
var SpannerProjectsInstancesDatabasesSessionsPartitionQueryResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsPartitionQueryResponse, _super);
    function SpannerProjectsInstancesDatabasesSessionsPartitionQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQueryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PartitionResponse)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQueryResponse.prototype, "partitionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesDatabasesSessionsPartitionQueryResponse.prototype, "statusCode", void 0);
    return SpannerProjectsInstancesDatabasesSessionsPartitionQueryResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsPartitionQueryResponse };
