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
var SpannerProjectsInstancesDatabasesUpdateDdlPathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesUpdateDdlPathParams, _super);
    function SpannerProjectsInstancesDatabasesUpdateDdlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesUpdateDdlPathParams.prototype, "database", void 0);
    return SpannerProjectsInstancesDatabasesUpdateDdlPathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesUpdateDdlPathParams };
var SpannerProjectsInstancesDatabasesUpdateDdlQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesUpdateDdlQueryParams, _super);
    function SpannerProjectsInstancesDatabasesUpdateDdlQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesUpdateDdlQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesUpdateDdlQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesUpdateDdlQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesUpdateDdlQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesUpdateDdlQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesUpdateDdlQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesUpdateDdlQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstancesDatabasesUpdateDdlQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesUpdateDdlQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesUpdateDdlQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesUpdateDdlQueryParams.prototype, "uploadProtocol", void 0);
    return SpannerProjectsInstancesDatabasesUpdateDdlQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesUpdateDdlQueryParams };
var SpannerProjectsInstancesDatabasesUpdateDdlSecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesUpdateDdlSecurityOption1, _super);
    function SpannerProjectsInstancesDatabasesUpdateDdlSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesUpdateDdlSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesUpdateDdlSecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesUpdateDdlSecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesUpdateDdlSecurityOption1 };
var SpannerProjectsInstancesDatabasesUpdateDdlSecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesUpdateDdlSecurityOption2, _super);
    function SpannerProjectsInstancesDatabasesUpdateDdlSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesUpdateDdlSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesUpdateDdlSecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesUpdateDdlSecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesUpdateDdlSecurityOption2 };
var SpannerProjectsInstancesDatabasesUpdateDdlSecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesUpdateDdlSecurity, _super);
    function SpannerProjectsInstancesDatabasesUpdateDdlSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesUpdateDdlSecurityOption1)
    ], SpannerProjectsInstancesDatabasesUpdateDdlSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesUpdateDdlSecurityOption2)
    ], SpannerProjectsInstancesDatabasesUpdateDdlSecurity.prototype, "option2", void 0);
    return SpannerProjectsInstancesDatabasesUpdateDdlSecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesUpdateDdlSecurity };
var SpannerProjectsInstancesDatabasesUpdateDdlRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesUpdateDdlRequest, _super);
    function SpannerProjectsInstancesDatabasesUpdateDdlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesUpdateDdlPathParams)
    ], SpannerProjectsInstancesDatabasesUpdateDdlRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesUpdateDdlQueryParams)
    ], SpannerProjectsInstancesDatabasesUpdateDdlRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateDatabaseDdlRequest)
    ], SpannerProjectsInstancesDatabasesUpdateDdlRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesUpdateDdlSecurity)
    ], SpannerProjectsInstancesDatabasesUpdateDdlRequest.prototype, "security", void 0);
    return SpannerProjectsInstancesDatabasesUpdateDdlRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesUpdateDdlRequest };
var SpannerProjectsInstancesDatabasesUpdateDdlResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesUpdateDdlResponse, _super);
    function SpannerProjectsInstancesDatabasesUpdateDdlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesUpdateDdlResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], SpannerProjectsInstancesDatabasesUpdateDdlResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesDatabasesUpdateDdlResponse.prototype, "statusCode", void 0);
    return SpannerProjectsInstancesDatabasesUpdateDdlResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesUpdateDdlResponse };
