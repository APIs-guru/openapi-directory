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
var SpannerProjectsInstancesDatabasesGetScansPathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesGetScansPathParams, _super);
    function SpannerProjectsInstancesDatabasesGetScansPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetScansPathParams.prototype, "name", void 0);
    return SpannerProjectsInstancesDatabasesGetScansPathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesGetScansPathParams };
export var SpannerProjectsInstancesDatabasesGetScansViewEnum;
(function (SpannerProjectsInstancesDatabasesGetScansViewEnum) {
    SpannerProjectsInstancesDatabasesGetScansViewEnum["ViewUnspecified"] = "VIEW_UNSPECIFIED";
    SpannerProjectsInstancesDatabasesGetScansViewEnum["Summary"] = "SUMMARY";
    SpannerProjectsInstancesDatabasesGetScansViewEnum["Full"] = "FULL";
})(SpannerProjectsInstancesDatabasesGetScansViewEnum || (SpannerProjectsInstancesDatabasesGetScansViewEnum = {}));
var SpannerProjectsInstancesDatabasesGetScansQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesGetScansQueryParams, _super);
    function SpannerProjectsInstancesDatabasesGetScansQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetScansQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetScansQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetScansQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetScansQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetScansQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetScansQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetScansQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetScansQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstancesDatabasesGetScansQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetScansQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetScansQueryParams.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetScansQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetScansQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetScansQueryParams.prototype, "view", void 0);
    return SpannerProjectsInstancesDatabasesGetScansQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesGetScansQueryParams };
var SpannerProjectsInstancesDatabasesGetScansSecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesGetScansSecurityOption1, _super);
    function SpannerProjectsInstancesDatabasesGetScansSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesGetScansSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesGetScansSecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesGetScansSecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesGetScansSecurityOption1 };
var SpannerProjectsInstancesDatabasesGetScansSecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesGetScansSecurityOption2, _super);
    function SpannerProjectsInstancesDatabasesGetScansSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesGetScansSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesGetScansSecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesGetScansSecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesGetScansSecurityOption2 };
var SpannerProjectsInstancesDatabasesGetScansSecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesGetScansSecurity, _super);
    function SpannerProjectsInstancesDatabasesGetScansSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesGetScansSecurityOption1)
    ], SpannerProjectsInstancesDatabasesGetScansSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesGetScansSecurityOption2)
    ], SpannerProjectsInstancesDatabasesGetScansSecurity.prototype, "option2", void 0);
    return SpannerProjectsInstancesDatabasesGetScansSecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesGetScansSecurity };
var SpannerProjectsInstancesDatabasesGetScansRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesGetScansRequest, _super);
    function SpannerProjectsInstancesDatabasesGetScansRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesGetScansPathParams)
    ], SpannerProjectsInstancesDatabasesGetScansRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesGetScansQueryParams)
    ], SpannerProjectsInstancesDatabasesGetScansRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesGetScansSecurity)
    ], SpannerProjectsInstancesDatabasesGetScansRequest.prototype, "security", void 0);
    return SpannerProjectsInstancesDatabasesGetScansRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesGetScansRequest };
var SpannerProjectsInstancesDatabasesGetScansResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesGetScansResponse, _super);
    function SpannerProjectsInstancesDatabasesGetScansResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetScansResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Scan)
    ], SpannerProjectsInstancesDatabasesGetScansResponse.prototype, "scan", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesDatabasesGetScansResponse.prototype, "statusCode", void 0);
    return SpannerProjectsInstancesDatabasesGetScansResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesGetScansResponse };
