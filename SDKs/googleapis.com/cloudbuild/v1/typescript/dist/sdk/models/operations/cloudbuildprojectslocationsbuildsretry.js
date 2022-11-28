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
var CloudbuildProjectsLocationsBuildsRetryPathParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsBuildsRetryPathParams, _super);
    function CloudbuildProjectsLocationsBuildsRetryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsRetryPathParams.prototype, "name", void 0);
    return CloudbuildProjectsLocationsBuildsRetryPathParams;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsBuildsRetryPathParams };
var CloudbuildProjectsLocationsBuildsRetryQueryParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsBuildsRetryQueryParams, _super);
    function CloudbuildProjectsLocationsBuildsRetryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsRetryQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsRetryQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsRetryQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsRetryQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsRetryQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsRetryQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsRetryQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbuildProjectsLocationsBuildsRetryQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsRetryQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsRetryQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsRetryQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbuildProjectsLocationsBuildsRetryQueryParams;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsBuildsRetryQueryParams };
var CloudbuildProjectsLocationsBuildsRetrySecurity = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsBuildsRetrySecurity, _super);
    function CloudbuildProjectsLocationsBuildsRetrySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbuildProjectsLocationsBuildsRetrySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbuildProjectsLocationsBuildsRetrySecurity.prototype, "oauth2c", void 0);
    return CloudbuildProjectsLocationsBuildsRetrySecurity;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsBuildsRetrySecurity };
var CloudbuildProjectsLocationsBuildsRetryRequest = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsBuildsRetryRequest, _super);
    function CloudbuildProjectsLocationsBuildsRetryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsBuildsRetryPathParams)
    ], CloudbuildProjectsLocationsBuildsRetryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsBuildsRetryQueryParams)
    ], CloudbuildProjectsLocationsBuildsRetryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RetryBuildRequest)
    ], CloudbuildProjectsLocationsBuildsRetryRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsBuildsRetrySecurity)
    ], CloudbuildProjectsLocationsBuildsRetryRequest.prototype, "security", void 0);
    return CloudbuildProjectsLocationsBuildsRetryRequest;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsBuildsRetryRequest };
var CloudbuildProjectsLocationsBuildsRetryResponse = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsBuildsRetryResponse, _super);
    function CloudbuildProjectsLocationsBuildsRetryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsRetryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudbuildProjectsLocationsBuildsRetryResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudbuildProjectsLocationsBuildsRetryResponse.prototype, "statusCode", void 0);
    return CloudbuildProjectsLocationsBuildsRetryResponse;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsBuildsRetryResponse };
