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
var VmmigrationProjectsLocationsSourcesUtilizationReportsCreatePathParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesUtilizationReportsCreatePathParams, _super);
    function VmmigrationProjectsLocationsSourcesUtilizationReportsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsCreatePathParams.prototype, "parent", void 0);
    return VmmigrationProjectsLocationsSourcesUtilizationReportsCreatePathParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesUtilizationReportsCreatePathParams };
var VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams, _super);
    function VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=utilizationReportId" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams.prototype, "utilizationReportId", void 0);
    return VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams };
var VmmigrationProjectsLocationsSourcesUtilizationReportsCreateSecurity = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesUtilizationReportsCreateSecurity, _super);
    function VmmigrationProjectsLocationsSourcesUtilizationReportsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsCreateSecurity.prototype, "oauth2c", void 0);
    return VmmigrationProjectsLocationsSourcesUtilizationReportsCreateSecurity;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesUtilizationReportsCreateSecurity };
var VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest, _super);
    function VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsSourcesUtilizationReportsCreatePathParams)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UtilizationReportInput)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsSourcesUtilizationReportsCreateSecurity)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest.prototype, "security", void 0);
    return VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest };
var VmmigrationProjectsLocationsSourcesUtilizationReportsCreateResponse = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesUtilizationReportsCreateResponse, _super);
    function VmmigrationProjectsLocationsSourcesUtilizationReportsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VmmigrationProjectsLocationsSourcesUtilizationReportsCreateResponse.prototype, "statusCode", void 0);
    return VmmigrationProjectsLocationsSourcesUtilizationReportsCreateResponse;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesUtilizationReportsCreateResponse };
