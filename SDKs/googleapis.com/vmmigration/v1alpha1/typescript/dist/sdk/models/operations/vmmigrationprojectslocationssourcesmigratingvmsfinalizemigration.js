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
var VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationPathParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationPathParams, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=migratingVm" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationPathParams.prototype, "migratingVm", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationPathParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationPathParams };
var VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationQueryParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationQueryParams, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationQueryParams.prototype, "uploadProtocol", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationQueryParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationQueryParams };
var VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationSecurity = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationSecurity, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationSecurity.prototype, "oauth2c", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationSecurity;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationSecurity };
var VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationRequest = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationRequest, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationPathParams)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationQueryParams)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationSecurity)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationRequest.prototype, "security", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationRequest;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationRequest };
var VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationResponse = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationResponse, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationResponse.prototype, "statusCode", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationResponse;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationResponse };
