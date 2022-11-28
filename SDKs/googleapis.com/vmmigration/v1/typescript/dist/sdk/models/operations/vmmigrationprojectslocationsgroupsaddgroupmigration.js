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
var VmmigrationProjectsLocationsGroupsAddGroupMigrationPathParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsGroupsAddGroupMigrationPathParams, _super);
    function VmmigrationProjectsLocationsGroupsAddGroupMigrationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsAddGroupMigrationPathParams.prototype, "group", void 0);
    return VmmigrationProjectsLocationsGroupsAddGroupMigrationPathParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsGroupsAddGroupMigrationPathParams };
var VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams, _super);
    function VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams.prototype, "uploadProtocol", void 0);
    return VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams };
var VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity, _super);
    function VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity.prototype, "oauth2c", void 0);
    return VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity };
var VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest, _super);
    function VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsGroupsAddGroupMigrationPathParams)
    ], VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams)
    ], VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddGroupMigrationRequest)
    ], VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity)
    ], VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest.prototype, "security", void 0);
    return VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest };
var VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse, _super);
    function VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse.prototype, "statusCode", void 0);
    return VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse };
