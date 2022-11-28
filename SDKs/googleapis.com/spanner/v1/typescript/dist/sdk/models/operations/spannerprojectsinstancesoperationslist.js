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
var SpannerProjectsInstancesOperationsListPathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesOperationsListPathParams, _super);
    function SpannerProjectsInstancesOperationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsListPathParams.prototype, "name", void 0);
    return SpannerProjectsInstancesOperationsListPathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesOperationsListPathParams };
var SpannerProjectsInstancesOperationsListQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesOperationsListQueryParams, _super);
    function SpannerProjectsInstancesOperationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesOperationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstancesOperationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsListQueryParams.prototype, "uploadProtocol", void 0);
    return SpannerProjectsInstancesOperationsListQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesOperationsListQueryParams };
var SpannerProjectsInstancesOperationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesOperationsListSecurityOption1, _super);
    function SpannerProjectsInstancesOperationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesOperationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesOperationsListSecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesOperationsListSecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstancesOperationsListSecurityOption1 };
var SpannerProjectsInstancesOperationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesOperationsListSecurityOption2, _super);
    function SpannerProjectsInstancesOperationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesOperationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesOperationsListSecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesOperationsListSecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstancesOperationsListSecurityOption2 };
var SpannerProjectsInstancesOperationsListSecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesOperationsListSecurity, _super);
    function SpannerProjectsInstancesOperationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesOperationsListSecurityOption1)
    ], SpannerProjectsInstancesOperationsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesOperationsListSecurityOption2)
    ], SpannerProjectsInstancesOperationsListSecurity.prototype, "option2", void 0);
    return SpannerProjectsInstancesOperationsListSecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstancesOperationsListSecurity };
var SpannerProjectsInstancesOperationsListRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesOperationsListRequest, _super);
    function SpannerProjectsInstancesOperationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesOperationsListPathParams)
    ], SpannerProjectsInstancesOperationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesOperationsListQueryParams)
    ], SpannerProjectsInstancesOperationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesOperationsListSecurity)
    ], SpannerProjectsInstancesOperationsListRequest.prototype, "security", void 0);
    return SpannerProjectsInstancesOperationsListRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstancesOperationsListRequest };
var SpannerProjectsInstancesOperationsListResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesOperationsListResponse, _super);
    function SpannerProjectsInstancesOperationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListOperationsResponse)
    ], SpannerProjectsInstancesOperationsListResponse.prototype, "listOperationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesOperationsListResponse.prototype, "statusCode", void 0);
    return SpannerProjectsInstancesOperationsListResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstancesOperationsListResponse };
