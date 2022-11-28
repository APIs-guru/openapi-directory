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
var ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreatePathParams = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreatePathParams, _super);
    function ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreatePathParams.prototype, "parent", void 0);
    return ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreatePathParams;
}(SpeakeasyBase));
export { ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreatePathParams };
var ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateQueryParams = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateQueryParams, _super);
    function ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=releaseId" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateQueryParams.prototype, "releaseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateQueryParams.prototype, "validateOnly", void 0);
    return ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateQueryParams;
}(SpeakeasyBase));
export { ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateQueryParams };
var ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateSecurity = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateSecurity, _super);
    function ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateSecurity.prototype, "oauth2c", void 0);
    return ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateSecurity;
}(SpeakeasyBase));
export { ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateSecurity };
var ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateRequest = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateRequest, _super);
    function ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreatePathParams)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateQueryParams)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReleaseInput)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateSecurity)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateRequest.prototype, "security", void 0);
    return ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateRequest;
}(SpeakeasyBase));
export { ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateRequest };
var ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateResponse = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateResponse, _super);
    function ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateResponse.prototype, "statusCode", void 0);
    return ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateResponse;
}(SpeakeasyBase));
export { ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateResponse };
