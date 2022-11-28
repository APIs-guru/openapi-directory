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
var SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlPathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlPathParams, _super);
    function SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=session" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlPathParams.prototype, "session", void 0);
    return SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlPathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlPathParams };
var SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlQueryParams, _super);
    function SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlQueryParams.prototype, "uploadProtocol", void 0);
    return SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlQueryParams };
var SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurityOption1, _super);
    function SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurityOption1 };
var SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurityOption2, _super);
    function SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurityOption2 };
var SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurity, _super);
    function SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurityOption1)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurityOption2)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurity.prototype, "option2", void 0);
    return SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurity };
var SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlRequest, _super);
    function SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlPathParams)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlQueryParams)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ExecuteBatchDmlRequest)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurity)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlRequest.prototype, "security", void 0);
    return SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlRequest };
var SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlResponse, _super);
    function SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ExecuteBatchDmlResponse)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlResponse.prototype, "executeBatchDmlResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlResponse.prototype, "statusCode", void 0);
    return SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlResponse };
