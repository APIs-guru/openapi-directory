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
var SpannerProjectsInstancesDatabaseOperationsListPathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabaseOperationsListPathParams, _super);
    function SpannerProjectsInstancesDatabaseOperationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabaseOperationsListPathParams.prototype, "parent", void 0);
    return SpannerProjectsInstancesDatabaseOperationsListPathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabaseOperationsListPathParams };
var SpannerProjectsInstancesDatabaseOperationsListQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabaseOperationsListQueryParams, _super);
    function SpannerProjectsInstancesDatabaseOperationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabaseOperationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabaseOperationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabaseOperationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabaseOperationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabaseOperationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabaseOperationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabaseOperationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabaseOperationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesDatabaseOperationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabaseOperationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstancesDatabaseOperationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabaseOperationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabaseOperationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabaseOperationsListQueryParams.prototype, "uploadProtocol", void 0);
    return SpannerProjectsInstancesDatabaseOperationsListQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabaseOperationsListQueryParams };
var SpannerProjectsInstancesDatabaseOperationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabaseOperationsListSecurityOption1, _super);
    function SpannerProjectsInstancesDatabaseOperationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabaseOperationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabaseOperationsListSecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabaseOperationsListSecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabaseOperationsListSecurityOption1 };
var SpannerProjectsInstancesDatabaseOperationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabaseOperationsListSecurityOption2, _super);
    function SpannerProjectsInstancesDatabaseOperationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabaseOperationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabaseOperationsListSecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabaseOperationsListSecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabaseOperationsListSecurityOption2 };
var SpannerProjectsInstancesDatabaseOperationsListSecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabaseOperationsListSecurity, _super);
    function SpannerProjectsInstancesDatabaseOperationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabaseOperationsListSecurityOption1)
    ], SpannerProjectsInstancesDatabaseOperationsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabaseOperationsListSecurityOption2)
    ], SpannerProjectsInstancesDatabaseOperationsListSecurity.prototype, "option2", void 0);
    return SpannerProjectsInstancesDatabaseOperationsListSecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabaseOperationsListSecurity };
var SpannerProjectsInstancesDatabaseOperationsListRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabaseOperationsListRequest, _super);
    function SpannerProjectsInstancesDatabaseOperationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabaseOperationsListPathParams)
    ], SpannerProjectsInstancesDatabaseOperationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabaseOperationsListQueryParams)
    ], SpannerProjectsInstancesDatabaseOperationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabaseOperationsListSecurity)
    ], SpannerProjectsInstancesDatabaseOperationsListRequest.prototype, "security", void 0);
    return SpannerProjectsInstancesDatabaseOperationsListRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabaseOperationsListRequest };
var SpannerProjectsInstancesDatabaseOperationsListResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabaseOperationsListResponse, _super);
    function SpannerProjectsInstancesDatabaseOperationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabaseOperationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDatabaseOperationsResponse)
    ], SpannerProjectsInstancesDatabaseOperationsListResponse.prototype, "listDatabaseOperationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesDatabaseOperationsListResponse.prototype, "statusCode", void 0);
    return SpannerProjectsInstancesDatabaseOperationsListResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabaseOperationsListResponse };
