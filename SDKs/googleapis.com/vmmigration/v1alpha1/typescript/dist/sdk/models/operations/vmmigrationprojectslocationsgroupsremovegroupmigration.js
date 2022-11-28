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
var VmmigrationProjectsLocationsGroupsRemoveGroupMigrationPathParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsGroupsRemoveGroupMigrationPathParams, _super);
    function VmmigrationProjectsLocationsGroupsRemoveGroupMigrationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsRemoveGroupMigrationPathParams.prototype, "group", void 0);
    return VmmigrationProjectsLocationsGroupsRemoveGroupMigrationPathParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsGroupsRemoveGroupMigrationPathParams };
var VmmigrationProjectsLocationsGroupsRemoveGroupMigrationQueryParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsGroupsRemoveGroupMigrationQueryParams, _super);
    function VmmigrationProjectsLocationsGroupsRemoveGroupMigrationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsRemoveGroupMigrationQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsRemoveGroupMigrationQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsRemoveGroupMigrationQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsRemoveGroupMigrationQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsRemoveGroupMigrationQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsRemoveGroupMigrationQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsRemoveGroupMigrationQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VmmigrationProjectsLocationsGroupsRemoveGroupMigrationQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsRemoveGroupMigrationQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsRemoveGroupMigrationQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsRemoveGroupMigrationQueryParams.prototype, "uploadProtocol", void 0);
    return VmmigrationProjectsLocationsGroupsRemoveGroupMigrationQueryParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsGroupsRemoveGroupMigrationQueryParams };
var VmmigrationProjectsLocationsGroupsRemoveGroupMigrationSecurity = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsGroupsRemoveGroupMigrationSecurity, _super);
    function VmmigrationProjectsLocationsGroupsRemoveGroupMigrationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VmmigrationProjectsLocationsGroupsRemoveGroupMigrationSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VmmigrationProjectsLocationsGroupsRemoveGroupMigrationSecurity.prototype, "oauth2c", void 0);
    return VmmigrationProjectsLocationsGroupsRemoveGroupMigrationSecurity;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsGroupsRemoveGroupMigrationSecurity };
var VmmigrationProjectsLocationsGroupsRemoveGroupMigrationRequest = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsGroupsRemoveGroupMigrationRequest, _super);
    function VmmigrationProjectsLocationsGroupsRemoveGroupMigrationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsGroupsRemoveGroupMigrationPathParams)
    ], VmmigrationProjectsLocationsGroupsRemoveGroupMigrationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsGroupsRemoveGroupMigrationQueryParams)
    ], VmmigrationProjectsLocationsGroupsRemoveGroupMigrationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RemoveGroupMigrationRequest)
    ], VmmigrationProjectsLocationsGroupsRemoveGroupMigrationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsGroupsRemoveGroupMigrationSecurity)
    ], VmmigrationProjectsLocationsGroupsRemoveGroupMigrationRequest.prototype, "security", void 0);
    return VmmigrationProjectsLocationsGroupsRemoveGroupMigrationRequest;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsGroupsRemoveGroupMigrationRequest };
var VmmigrationProjectsLocationsGroupsRemoveGroupMigrationResponse = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsGroupsRemoveGroupMigrationResponse, _super);
    function VmmigrationProjectsLocationsGroupsRemoveGroupMigrationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsRemoveGroupMigrationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], VmmigrationProjectsLocationsGroupsRemoveGroupMigrationResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VmmigrationProjectsLocationsGroupsRemoveGroupMigrationResponse.prototype, "statusCode", void 0);
    return VmmigrationProjectsLocationsGroupsRemoveGroupMigrationResponse;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsGroupsRemoveGroupMigrationResponse };
