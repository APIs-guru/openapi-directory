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
var ClouddeployProjectsLocationsDeliveryPipelinesReleasesListPathParams = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsDeliveryPipelinesReleasesListPathParams, _super);
    function ClouddeployProjectsLocationsDeliveryPipelinesReleasesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesListPathParams.prototype, "parent", void 0);
    return ClouddeployProjectsLocationsDeliveryPipelinesReleasesListPathParams;
}(SpeakeasyBase));
export { ClouddeployProjectsLocationsDeliveryPipelinesReleasesListPathParams };
var ClouddeployProjectsLocationsDeliveryPipelinesReleasesListQueryParams = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsDeliveryPipelinesReleasesListQueryParams, _super);
    function ClouddeployProjectsLocationsDeliveryPipelinesReleasesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesListQueryParams.prototype, "uploadProtocol", void 0);
    return ClouddeployProjectsLocationsDeliveryPipelinesReleasesListQueryParams;
}(SpeakeasyBase));
export { ClouddeployProjectsLocationsDeliveryPipelinesReleasesListQueryParams };
var ClouddeployProjectsLocationsDeliveryPipelinesReleasesListSecurity = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsDeliveryPipelinesReleasesListSecurity, _super);
    function ClouddeployProjectsLocationsDeliveryPipelinesReleasesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesListSecurity.prototype, "oauth2c", void 0);
    return ClouddeployProjectsLocationsDeliveryPipelinesReleasesListSecurity;
}(SpeakeasyBase));
export { ClouddeployProjectsLocationsDeliveryPipelinesReleasesListSecurity };
var ClouddeployProjectsLocationsDeliveryPipelinesReleasesListRequest = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsDeliveryPipelinesReleasesListRequest, _super);
    function ClouddeployProjectsLocationsDeliveryPipelinesReleasesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddeployProjectsLocationsDeliveryPipelinesReleasesListPathParams)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddeployProjectsLocationsDeliveryPipelinesReleasesListQueryParams)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddeployProjectsLocationsDeliveryPipelinesReleasesListSecurity)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesListRequest.prototype, "security", void 0);
    return ClouddeployProjectsLocationsDeliveryPipelinesReleasesListRequest;
}(SpeakeasyBase));
export { ClouddeployProjectsLocationsDeliveryPipelinesReleasesListRequest };
var ClouddeployProjectsLocationsDeliveryPipelinesReleasesListResponse = /** @class */ (function (_super) {
    __extends(ClouddeployProjectsLocationsDeliveryPipelinesReleasesListResponse, _super);
    function ClouddeployProjectsLocationsDeliveryPipelinesReleasesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListReleasesResponse)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesListResponse.prototype, "listReleasesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClouddeployProjectsLocationsDeliveryPipelinesReleasesListResponse.prototype, "statusCode", void 0);
    return ClouddeployProjectsLocationsDeliveryPipelinesReleasesListResponse;
}(SpeakeasyBase));
export { ClouddeployProjectsLocationsDeliveryPipelinesReleasesListResponse };
