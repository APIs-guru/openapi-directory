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
var CloudbuildProjectsLocationsTriggersPatchPathParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsTriggersPatchPathParams, _super);
    function CloudbuildProjectsLocationsTriggersPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceName" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersPatchPathParams.prototype, "resourceName", void 0);
    return CloudbuildProjectsLocationsTriggersPatchPathParams;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsTriggersPatchPathParams };
var CloudbuildProjectsLocationsTriggersPatchQueryParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsTriggersPatchQueryParams, _super);
    function CloudbuildProjectsLocationsTriggersPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbuildProjectsLocationsTriggersPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projectId" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersPatchQueryParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=triggerId" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersPatchQueryParams.prototype, "triggerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersPatchQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbuildProjectsLocationsTriggersPatchQueryParams;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsTriggersPatchQueryParams };
var CloudbuildProjectsLocationsTriggersPatchSecurity = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsTriggersPatchSecurity, _super);
    function CloudbuildProjectsLocationsTriggersPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbuildProjectsLocationsTriggersPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbuildProjectsLocationsTriggersPatchSecurity.prototype, "oauth2c", void 0);
    return CloudbuildProjectsLocationsTriggersPatchSecurity;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsTriggersPatchSecurity };
var CloudbuildProjectsLocationsTriggersPatchRequest = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsTriggersPatchRequest, _super);
    function CloudbuildProjectsLocationsTriggersPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsTriggersPatchPathParams)
    ], CloudbuildProjectsLocationsTriggersPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsTriggersPatchQueryParams)
    ], CloudbuildProjectsLocationsTriggersPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BuildTriggerInput)
    ], CloudbuildProjectsLocationsTriggersPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsTriggersPatchSecurity)
    ], CloudbuildProjectsLocationsTriggersPatchRequest.prototype, "security", void 0);
    return CloudbuildProjectsLocationsTriggersPatchRequest;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsTriggersPatchRequest };
var CloudbuildProjectsLocationsTriggersPatchResponse = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsTriggersPatchResponse, _super);
    function CloudbuildProjectsLocationsTriggersPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BuildTrigger)
    ], CloudbuildProjectsLocationsTriggersPatchResponse.prototype, "buildTrigger", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudbuildProjectsLocationsTriggersPatchResponse.prototype, "statusCode", void 0);
    return CloudbuildProjectsLocationsTriggersPatchResponse;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsTriggersPatchResponse };
