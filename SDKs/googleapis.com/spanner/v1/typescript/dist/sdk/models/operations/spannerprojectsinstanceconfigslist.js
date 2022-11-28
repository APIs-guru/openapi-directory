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
var SpannerProjectsInstanceConfigsListPathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstanceConfigsListPathParams, _super);
    function SpannerProjectsInstanceConfigsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsListPathParams.prototype, "parent", void 0);
    return SpannerProjectsInstanceConfigsListPathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstanceConfigsListPathParams };
var SpannerProjectsInstanceConfigsListQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstanceConfigsListQueryParams, _super);
    function SpannerProjectsInstanceConfigsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], SpannerProjectsInstanceConfigsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstanceConfigsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsListQueryParams.prototype, "uploadProtocol", void 0);
    return SpannerProjectsInstanceConfigsListQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstanceConfigsListQueryParams };
var SpannerProjectsInstanceConfigsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstanceConfigsListSecurityOption1, _super);
    function SpannerProjectsInstanceConfigsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstanceConfigsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstanceConfigsListSecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstanceConfigsListSecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstanceConfigsListSecurityOption1 };
var SpannerProjectsInstanceConfigsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstanceConfigsListSecurityOption2, _super);
    function SpannerProjectsInstanceConfigsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstanceConfigsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstanceConfigsListSecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstanceConfigsListSecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstanceConfigsListSecurityOption2 };
var SpannerProjectsInstanceConfigsListSecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstanceConfigsListSecurity, _super);
    function SpannerProjectsInstanceConfigsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstanceConfigsListSecurityOption1)
    ], SpannerProjectsInstanceConfigsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstanceConfigsListSecurityOption2)
    ], SpannerProjectsInstanceConfigsListSecurity.prototype, "option2", void 0);
    return SpannerProjectsInstanceConfigsListSecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstanceConfigsListSecurity };
var SpannerProjectsInstanceConfigsListRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstanceConfigsListRequest, _super);
    function SpannerProjectsInstanceConfigsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstanceConfigsListPathParams)
    ], SpannerProjectsInstanceConfigsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstanceConfigsListQueryParams)
    ], SpannerProjectsInstanceConfigsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstanceConfigsListSecurity)
    ], SpannerProjectsInstanceConfigsListRequest.prototype, "security", void 0);
    return SpannerProjectsInstanceConfigsListRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstanceConfigsListRequest };
var SpannerProjectsInstanceConfigsListResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstanceConfigsListResponse, _super);
    function SpannerProjectsInstanceConfigsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListInstanceConfigsResponse)
    ], SpannerProjectsInstanceConfigsListResponse.prototype, "listInstanceConfigsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstanceConfigsListResponse.prototype, "statusCode", void 0);
    return SpannerProjectsInstanceConfigsListResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstanceConfigsListResponse };
