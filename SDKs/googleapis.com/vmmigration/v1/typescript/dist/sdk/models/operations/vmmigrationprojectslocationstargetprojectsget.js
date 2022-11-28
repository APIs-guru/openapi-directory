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
var VmmigrationProjectsLocationsTargetProjectsGetPathParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsTargetProjectsGetPathParams, _super);
    function VmmigrationProjectsLocationsTargetProjectsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsGetPathParams.prototype, "name", void 0);
    return VmmigrationProjectsLocationsTargetProjectsGetPathParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsTargetProjectsGetPathParams };
export var VmmigrationProjectsLocationsTargetProjectsGetViewEnum;
(function (VmmigrationProjectsLocationsTargetProjectsGetViewEnum) {
    VmmigrationProjectsLocationsTargetProjectsGetViewEnum["UtilizationReportViewUnspecified"] = "UTILIZATION_REPORT_VIEW_UNSPECIFIED";
    VmmigrationProjectsLocationsTargetProjectsGetViewEnum["Basic"] = "BASIC";
    VmmigrationProjectsLocationsTargetProjectsGetViewEnum["Full"] = "FULL";
})(VmmigrationProjectsLocationsTargetProjectsGetViewEnum || (VmmigrationProjectsLocationsTargetProjectsGetViewEnum = {}));
var VmmigrationProjectsLocationsTargetProjectsGetQueryParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsTargetProjectsGetQueryParams, _super);
    function VmmigrationProjectsLocationsTargetProjectsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VmmigrationProjectsLocationsTargetProjectsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsGetQueryParams.prototype, "view", void 0);
    return VmmigrationProjectsLocationsTargetProjectsGetQueryParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsTargetProjectsGetQueryParams };
var VmmigrationProjectsLocationsTargetProjectsGetSecurity = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsTargetProjectsGetSecurity, _super);
    function VmmigrationProjectsLocationsTargetProjectsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VmmigrationProjectsLocationsTargetProjectsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VmmigrationProjectsLocationsTargetProjectsGetSecurity.prototype, "oauth2c", void 0);
    return VmmigrationProjectsLocationsTargetProjectsGetSecurity;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsTargetProjectsGetSecurity };
var VmmigrationProjectsLocationsTargetProjectsGetRequest = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsTargetProjectsGetRequest, _super);
    function VmmigrationProjectsLocationsTargetProjectsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsTargetProjectsGetPathParams)
    ], VmmigrationProjectsLocationsTargetProjectsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsTargetProjectsGetQueryParams)
    ], VmmigrationProjectsLocationsTargetProjectsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsTargetProjectsGetSecurity)
    ], VmmigrationProjectsLocationsTargetProjectsGetRequest.prototype, "security", void 0);
    return VmmigrationProjectsLocationsTargetProjectsGetRequest;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsTargetProjectsGetRequest };
var VmmigrationProjectsLocationsTargetProjectsGetResponse = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsTargetProjectsGetResponse, _super);
    function VmmigrationProjectsLocationsTargetProjectsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VmmigrationProjectsLocationsTargetProjectsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TargetProject)
    ], VmmigrationProjectsLocationsTargetProjectsGetResponse.prototype, "targetProject", void 0);
    return VmmigrationProjectsLocationsTargetProjectsGetResponse;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsTargetProjectsGetResponse };
