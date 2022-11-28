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
var SpannerProjectsInstancesBackupOperationsListPathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesBackupOperationsListPathParams, _super);
    function SpannerProjectsInstancesBackupOperationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupOperationsListPathParams.prototype, "parent", void 0);
    return SpannerProjectsInstancesBackupOperationsListPathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesBackupOperationsListPathParams };
var SpannerProjectsInstancesBackupOperationsListQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesBackupOperationsListQueryParams, _super);
    function SpannerProjectsInstancesBackupOperationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupOperationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupOperationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupOperationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupOperationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupOperationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupOperationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupOperationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupOperationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesBackupOperationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupOperationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstancesBackupOperationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupOperationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupOperationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupOperationsListQueryParams.prototype, "uploadProtocol", void 0);
    return SpannerProjectsInstancesBackupOperationsListQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesBackupOperationsListQueryParams };
var SpannerProjectsInstancesBackupOperationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesBackupOperationsListSecurityOption1, _super);
    function SpannerProjectsInstancesBackupOperationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesBackupOperationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesBackupOperationsListSecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesBackupOperationsListSecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstancesBackupOperationsListSecurityOption1 };
var SpannerProjectsInstancesBackupOperationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesBackupOperationsListSecurityOption2, _super);
    function SpannerProjectsInstancesBackupOperationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesBackupOperationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesBackupOperationsListSecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesBackupOperationsListSecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstancesBackupOperationsListSecurityOption2 };
var SpannerProjectsInstancesBackupOperationsListSecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesBackupOperationsListSecurity, _super);
    function SpannerProjectsInstancesBackupOperationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesBackupOperationsListSecurityOption1)
    ], SpannerProjectsInstancesBackupOperationsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesBackupOperationsListSecurityOption2)
    ], SpannerProjectsInstancesBackupOperationsListSecurity.prototype, "option2", void 0);
    return SpannerProjectsInstancesBackupOperationsListSecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstancesBackupOperationsListSecurity };
var SpannerProjectsInstancesBackupOperationsListRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesBackupOperationsListRequest, _super);
    function SpannerProjectsInstancesBackupOperationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesBackupOperationsListPathParams)
    ], SpannerProjectsInstancesBackupOperationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesBackupOperationsListQueryParams)
    ], SpannerProjectsInstancesBackupOperationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesBackupOperationsListSecurity)
    ], SpannerProjectsInstancesBackupOperationsListRequest.prototype, "security", void 0);
    return SpannerProjectsInstancesBackupOperationsListRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstancesBackupOperationsListRequest };
var SpannerProjectsInstancesBackupOperationsListResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesBackupOperationsListResponse, _super);
    function SpannerProjectsInstancesBackupOperationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesBackupOperationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListBackupOperationsResponse)
    ], SpannerProjectsInstancesBackupOperationsListResponse.prototype, "listBackupOperationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesBackupOperationsListResponse.prototype, "statusCode", void 0);
    return SpannerProjectsInstancesBackupOperationsListResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstancesBackupOperationsListResponse };
