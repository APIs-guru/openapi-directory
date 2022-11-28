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
var SpannerProjectsInstancesDatabasesSessionsCommitPathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsCommitPathParams, _super);
    function SpannerProjectsInstancesDatabasesSessionsCommitPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=session" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsCommitPathParams.prototype, "session", void 0);
    return SpannerProjectsInstancesDatabasesSessionsCommitPathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsCommitPathParams };
var SpannerProjectsInstancesDatabasesSessionsCommitQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsCommitQueryParams, _super);
    function SpannerProjectsInstancesDatabasesSessionsCommitQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsCommitQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsCommitQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsCommitQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsCommitQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsCommitQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsCommitQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsCommitQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstancesDatabasesSessionsCommitQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsCommitQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsCommitQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsCommitQueryParams.prototype, "uploadProtocol", void 0);
    return SpannerProjectsInstancesDatabasesSessionsCommitQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsCommitQueryParams };
var SpannerProjectsInstancesDatabasesSessionsCommitSecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsCommitSecurityOption1, _super);
    function SpannerProjectsInstancesDatabasesSessionsCommitSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesSessionsCommitSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesSessionsCommitSecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesSessionsCommitSecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsCommitSecurityOption1 };
var SpannerProjectsInstancesDatabasesSessionsCommitSecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsCommitSecurityOption2, _super);
    function SpannerProjectsInstancesDatabasesSessionsCommitSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesSessionsCommitSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesSessionsCommitSecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesSessionsCommitSecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsCommitSecurityOption2 };
var SpannerProjectsInstancesDatabasesSessionsCommitSecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsCommitSecurity, _super);
    function SpannerProjectsInstancesDatabasesSessionsCommitSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsCommitSecurityOption1)
    ], SpannerProjectsInstancesDatabasesSessionsCommitSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsCommitSecurityOption2)
    ], SpannerProjectsInstancesDatabasesSessionsCommitSecurity.prototype, "option2", void 0);
    return SpannerProjectsInstancesDatabasesSessionsCommitSecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsCommitSecurity };
var SpannerProjectsInstancesDatabasesSessionsCommitRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsCommitRequest, _super);
    function SpannerProjectsInstancesDatabasesSessionsCommitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsCommitPathParams)
    ], SpannerProjectsInstancesDatabasesSessionsCommitRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsCommitQueryParams)
    ], SpannerProjectsInstancesDatabasesSessionsCommitRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CommitRequest)
    ], SpannerProjectsInstancesDatabasesSessionsCommitRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsCommitSecurity)
    ], SpannerProjectsInstancesDatabasesSessionsCommitRequest.prototype, "security", void 0);
    return SpannerProjectsInstancesDatabasesSessionsCommitRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsCommitRequest };
var SpannerProjectsInstancesDatabasesSessionsCommitResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsCommitResponse, _super);
    function SpannerProjectsInstancesDatabasesSessionsCommitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CommitResponse)
    ], SpannerProjectsInstancesDatabasesSessionsCommitResponse.prototype, "commitResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsCommitResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesDatabasesSessionsCommitResponse.prototype, "statusCode", void 0);
    return SpannerProjectsInstancesDatabasesSessionsCommitResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsCommitResponse };
