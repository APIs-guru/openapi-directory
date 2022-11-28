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
var VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationPathParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationPathParams, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=migratingVm" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationPathParams.prototype, "migratingVm", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationPathParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationPathParams };
var VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams.prototype, "uploadProtocol", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams };
var VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity.prototype, "oauth2c", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity };
var VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationPathParams)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationQueryParams)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest.prototype, "security", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest };
var VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse.prototype, "statusCode", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse };
