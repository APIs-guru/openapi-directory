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
var CloudbuildProjectsLocationsBuildsCreatePathParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsBuildsCreatePathParams, _super);
    function CloudbuildProjectsLocationsBuildsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsCreatePathParams.prototype, "parent", void 0);
    return CloudbuildProjectsLocationsBuildsCreatePathParams;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsBuildsCreatePathParams };
var CloudbuildProjectsLocationsBuildsCreateQueryParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsBuildsCreateQueryParams, _super);
    function CloudbuildProjectsLocationsBuildsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbuildProjectsLocationsBuildsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projectId" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsCreateQueryParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbuildProjectsLocationsBuildsCreateQueryParams;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsBuildsCreateQueryParams };
var CloudbuildProjectsLocationsBuildsCreateSecurity = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsBuildsCreateSecurity, _super);
    function CloudbuildProjectsLocationsBuildsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbuildProjectsLocationsBuildsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbuildProjectsLocationsBuildsCreateSecurity.prototype, "oauth2c", void 0);
    return CloudbuildProjectsLocationsBuildsCreateSecurity;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsBuildsCreateSecurity };
var CloudbuildProjectsLocationsBuildsCreateRequest = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsBuildsCreateRequest, _super);
    function CloudbuildProjectsLocationsBuildsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsBuildsCreatePathParams)
    ], CloudbuildProjectsLocationsBuildsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsBuildsCreateQueryParams)
    ], CloudbuildProjectsLocationsBuildsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BuildInput)
    ], CloudbuildProjectsLocationsBuildsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsBuildsCreateSecurity)
    ], CloudbuildProjectsLocationsBuildsCreateRequest.prototype, "security", void 0);
    return CloudbuildProjectsLocationsBuildsCreateRequest;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsBuildsCreateRequest };
var CloudbuildProjectsLocationsBuildsCreateResponse = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsBuildsCreateResponse, _super);
    function CloudbuildProjectsLocationsBuildsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBuildsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudbuildProjectsLocationsBuildsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudbuildProjectsLocationsBuildsCreateResponse.prototype, "statusCode", void 0);
    return CloudbuildProjectsLocationsBuildsCreateResponse;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsBuildsCreateResponse };
