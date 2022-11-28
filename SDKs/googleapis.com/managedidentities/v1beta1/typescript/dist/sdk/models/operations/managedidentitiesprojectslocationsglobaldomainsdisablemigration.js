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
var ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationPathParams = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationPathParams, _super);
    function ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domain" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationPathParams.prototype, "domain", void 0);
    return ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationPathParams;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationPathParams };
var ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationQueryParams = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationQueryParams, _super);
    function ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationQueryParams.prototype, "uploadProtocol", void 0);
    return ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationQueryParams;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationQueryParams };
var ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationSecurity = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationSecurity, _super);
    function ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationSecurity.prototype, "oauth2c", void 0);
    return ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationSecurity;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationSecurity };
var ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationRequest = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationRequest, _super);
    function ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationPathParams)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationQueryParams)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationSecurity)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationRequest.prototype, "security", void 0);
    return ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationRequest;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationRequest };
var ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationResponse = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationResponse, _super);
    function ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationResponse.prototype, "statusCode", void 0);
    return ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationResponse;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationResponse };
