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
var VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationPathParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationPathParams, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=migratingVm" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationPathParams.prototype, "migratingVm", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationPathParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationPathParams };
var VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationQueryParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationQueryParams, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationQueryParams.prototype, "uploadProtocol", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationQueryParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationQueryParams };
var VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationSecurity = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationSecurity, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationSecurity.prototype, "oauth2c", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationSecurity;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationSecurity };
var VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationPathParams)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationQueryParams)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationSecurity)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest.prototype, "security", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest };
var VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationResponse = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationResponse, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationResponse.prototype, "statusCode", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationResponse;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationResponse };
