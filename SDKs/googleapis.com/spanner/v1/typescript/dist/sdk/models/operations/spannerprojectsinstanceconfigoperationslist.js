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
var SpannerProjectsInstanceConfigOperationsListPathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstanceConfigOperationsListPathParams, _super);
    function SpannerProjectsInstanceConfigOperationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigOperationsListPathParams.prototype, "parent", void 0);
    return SpannerProjectsInstanceConfigOperationsListPathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstanceConfigOperationsListPathParams };
var SpannerProjectsInstanceConfigOperationsListQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstanceConfigOperationsListQueryParams, _super);
    function SpannerProjectsInstanceConfigOperationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigOperationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigOperationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigOperationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigOperationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigOperationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigOperationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigOperationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigOperationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], SpannerProjectsInstanceConfigOperationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigOperationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstanceConfigOperationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigOperationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigOperationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigOperationsListQueryParams.prototype, "uploadProtocol", void 0);
    return SpannerProjectsInstanceConfigOperationsListQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstanceConfigOperationsListQueryParams };
var SpannerProjectsInstanceConfigOperationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstanceConfigOperationsListSecurityOption1, _super);
    function SpannerProjectsInstanceConfigOperationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstanceConfigOperationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstanceConfigOperationsListSecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstanceConfigOperationsListSecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstanceConfigOperationsListSecurityOption1 };
var SpannerProjectsInstanceConfigOperationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstanceConfigOperationsListSecurityOption2, _super);
    function SpannerProjectsInstanceConfigOperationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstanceConfigOperationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstanceConfigOperationsListSecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstanceConfigOperationsListSecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstanceConfigOperationsListSecurityOption2 };
var SpannerProjectsInstanceConfigOperationsListSecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstanceConfigOperationsListSecurity, _super);
    function SpannerProjectsInstanceConfigOperationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstanceConfigOperationsListSecurityOption1)
    ], SpannerProjectsInstanceConfigOperationsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstanceConfigOperationsListSecurityOption2)
    ], SpannerProjectsInstanceConfigOperationsListSecurity.prototype, "option2", void 0);
    return SpannerProjectsInstanceConfigOperationsListSecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstanceConfigOperationsListSecurity };
var SpannerProjectsInstanceConfigOperationsListRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstanceConfigOperationsListRequest, _super);
    function SpannerProjectsInstanceConfigOperationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstanceConfigOperationsListPathParams)
    ], SpannerProjectsInstanceConfigOperationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstanceConfigOperationsListQueryParams)
    ], SpannerProjectsInstanceConfigOperationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstanceConfigOperationsListSecurity)
    ], SpannerProjectsInstanceConfigOperationsListRequest.prototype, "security", void 0);
    return SpannerProjectsInstanceConfigOperationsListRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstanceConfigOperationsListRequest };
var SpannerProjectsInstanceConfigOperationsListResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstanceConfigOperationsListResponse, _super);
    function SpannerProjectsInstanceConfigOperationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstanceConfigOperationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListInstanceConfigOperationsResponse)
    ], SpannerProjectsInstanceConfigOperationsListResponse.prototype, "listInstanceConfigOperationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstanceConfigOperationsListResponse.prototype, "statusCode", void 0);
    return SpannerProjectsInstanceConfigOperationsListResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstanceConfigOperationsListResponse };
