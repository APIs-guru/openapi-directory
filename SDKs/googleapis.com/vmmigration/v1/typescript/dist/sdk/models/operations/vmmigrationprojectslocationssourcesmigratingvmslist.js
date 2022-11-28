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
var VmmigrationProjectsLocationsSourcesMigratingVmsListPathParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsListPathParams, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListPathParams.prototype, "parent", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsListPathParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesMigratingVmsListPathParams };
export var VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum;
(function (VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum) {
    VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum["MigratingVmViewUnspecified"] = "MIGRATING_VM_VIEW_UNSPECIFIED";
    VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum["MigratingVmViewBasic"] = "MIGRATING_VM_VIEW_BASIC";
    VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum["MigratingVmViewFull"] = "MIGRATING_VM_VIEW_FULL";
})(VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum || (VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum = {}));
var VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams.prototype, "view", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams };
var VmmigrationProjectsLocationsSourcesMigratingVmsListSecurity = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsListSecurity, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListSecurity.prototype, "oauth2c", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsListSecurity;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesMigratingVmsListSecurity };
var VmmigrationProjectsLocationsSourcesMigratingVmsListRequest = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsListRequest, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsSourcesMigratingVmsListPathParams)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsSourcesMigratingVmsListSecurity)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListRequest.prototype, "security", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsListRequest;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesMigratingVmsListRequest };
var VmmigrationProjectsLocationsSourcesMigratingVmsListResponse = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesMigratingVmsListResponse, _super);
    function VmmigrationProjectsLocationsSourcesMigratingVmsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListMigratingVmsResponse)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListResponse.prototype, "listMigratingVmsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VmmigrationProjectsLocationsSourcesMigratingVmsListResponse.prototype, "statusCode", void 0);
    return VmmigrationProjectsLocationsSourcesMigratingVmsListResponse;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesMigratingVmsListResponse };
