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
var ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreatePathParams = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreatePathParams, _super);
    function ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreatePathParams.prototype, "parent", void 0);
    return ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreatePathParams;
}(SpeakeasyBase));
export { ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreatePathParams };
var ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams, _super);
    function ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rolloutId" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams.prototype, "rolloutId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams.prototype, "validateOnly", void 0);
    return ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams;
}(SpeakeasyBase));
export { ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams };
var ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateSecurity = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateSecurity, _super);
    function ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateSecurity.prototype, "oauth2c", void 0);
    return ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateSecurity;
}(SpeakeasyBase));
export { ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateSecurity };
var ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateRequest = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateRequest, _super);
    function ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreatePathParams)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RolloutInput)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateSecurity)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateRequest.prototype, "security", void 0);
    return ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateRequest;
}(SpeakeasyBase));
export { ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateRequest };
var ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateResponse = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateResponse, _super);
    function ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateResponse.prototype, "statusCode", void 0);
    return ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateResponse;
}(SpeakeasyBase));
export { ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateResponse };
