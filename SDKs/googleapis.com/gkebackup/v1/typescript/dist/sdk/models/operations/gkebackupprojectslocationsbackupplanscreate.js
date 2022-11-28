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
var GkebackupProjectsLocationsBackupPlansCreatePathParams = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsBackupPlansCreatePathParams, _super);
    function GkebackupProjectsLocationsBackupPlansCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansCreatePathParams.prototype, "parent", void 0);
    return GkebackupProjectsLocationsBackupPlansCreatePathParams;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsBackupPlansCreatePathParams };
var GkebackupProjectsLocationsBackupPlansCreateQueryParams = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsBackupPlansCreateQueryParams, _super);
    function GkebackupProjectsLocationsBackupPlansCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=backupPlanId" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansCreateQueryParams.prototype, "backupPlanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GkebackupProjectsLocationsBackupPlansCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansCreateQueryParams.prototype, "uploadProtocol", void 0);
    return GkebackupProjectsLocationsBackupPlansCreateQueryParams;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsBackupPlansCreateQueryParams };
var GkebackupProjectsLocationsBackupPlansCreateSecurity = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsBackupPlansCreateSecurity, _super);
    function GkebackupProjectsLocationsBackupPlansCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GkebackupProjectsLocationsBackupPlansCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GkebackupProjectsLocationsBackupPlansCreateSecurity.prototype, "oauth2c", void 0);
    return GkebackupProjectsLocationsBackupPlansCreateSecurity;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsBackupPlansCreateSecurity };
var GkebackupProjectsLocationsBackupPlansCreateRequest = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsBackupPlansCreateRequest, _super);
    function GkebackupProjectsLocationsBackupPlansCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkebackupProjectsLocationsBackupPlansCreatePathParams)
    ], GkebackupProjectsLocationsBackupPlansCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkebackupProjectsLocationsBackupPlansCreateQueryParams)
    ], GkebackupProjectsLocationsBackupPlansCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BackupPlanInput)
    ], GkebackupProjectsLocationsBackupPlansCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkebackupProjectsLocationsBackupPlansCreateSecurity)
    ], GkebackupProjectsLocationsBackupPlansCreateRequest.prototype, "security", void 0);
    return GkebackupProjectsLocationsBackupPlansCreateRequest;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsBackupPlansCreateRequest };
var GkebackupProjectsLocationsBackupPlansCreateResponse = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsBackupPlansCreateResponse, _super);
    function GkebackupProjectsLocationsBackupPlansCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsBackupPlansCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], GkebackupProjectsLocationsBackupPlansCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GkebackupProjectsLocationsBackupPlansCreateResponse.prototype, "statusCode", void 0);
    return GkebackupProjectsLocationsBackupPlansCreateResponse;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsBackupPlansCreateResponse };
