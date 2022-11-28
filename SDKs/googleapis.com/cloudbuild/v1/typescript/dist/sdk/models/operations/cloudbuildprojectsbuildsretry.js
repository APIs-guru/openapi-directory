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
var CloudbuildProjectsBuildsRetryPathParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsBuildsRetryPathParams, _super);
    function CloudbuildProjectsBuildsRetryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsRetryPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsRetryPathParams.prototype, "projectId", void 0);
    return CloudbuildProjectsBuildsRetryPathParams;
}(SpeakeasyBase));
export { CloudbuildProjectsBuildsRetryPathParams };
var CloudbuildProjectsBuildsRetryQueryParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsBuildsRetryQueryParams, _super);
    function CloudbuildProjectsBuildsRetryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsRetryQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsRetryQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsRetryQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsRetryQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsRetryQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsRetryQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsRetryQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbuildProjectsBuildsRetryQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsRetryQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsRetryQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsRetryQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbuildProjectsBuildsRetryQueryParams;
}(SpeakeasyBase));
export { CloudbuildProjectsBuildsRetryQueryParams };
var CloudbuildProjectsBuildsRetrySecurity = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsBuildsRetrySecurity, _super);
    function CloudbuildProjectsBuildsRetrySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbuildProjectsBuildsRetrySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbuildProjectsBuildsRetrySecurity.prototype, "oauth2c", void 0);
    return CloudbuildProjectsBuildsRetrySecurity;
}(SpeakeasyBase));
export { CloudbuildProjectsBuildsRetrySecurity };
var CloudbuildProjectsBuildsRetryRequest = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsBuildsRetryRequest, _super);
    function CloudbuildProjectsBuildsRetryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsBuildsRetryPathParams)
    ], CloudbuildProjectsBuildsRetryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsBuildsRetryQueryParams)
    ], CloudbuildProjectsBuildsRetryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RetryBuildRequest)
    ], CloudbuildProjectsBuildsRetryRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsBuildsRetrySecurity)
    ], CloudbuildProjectsBuildsRetryRequest.prototype, "security", void 0);
    return CloudbuildProjectsBuildsRetryRequest;
}(SpeakeasyBase));
export { CloudbuildProjectsBuildsRetryRequest };
var CloudbuildProjectsBuildsRetryResponse = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsBuildsRetryResponse, _super);
    function CloudbuildProjectsBuildsRetryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudbuildProjectsBuildsRetryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudbuildProjectsBuildsRetryResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudbuildProjectsBuildsRetryResponse.prototype, "statusCode", void 0);
    return CloudbuildProjectsBuildsRetryResponse;
}(SpeakeasyBase));
export { CloudbuildProjectsBuildsRetryResponse };
