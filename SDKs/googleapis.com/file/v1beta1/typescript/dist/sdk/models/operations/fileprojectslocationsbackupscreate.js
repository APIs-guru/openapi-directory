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
var FileProjectsLocationsBackupsCreatePathParams = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsBackupsCreatePathParams, _super);
    function FileProjectsLocationsBackupsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsBackupsCreatePathParams.prototype, "parent", void 0);
    return FileProjectsLocationsBackupsCreatePathParams;
}(SpeakeasyBase));
export { FileProjectsLocationsBackupsCreatePathParams };
var FileProjectsLocationsBackupsCreateQueryParams = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsBackupsCreateQueryParams, _super);
    function FileProjectsLocationsBackupsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsBackupsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsBackupsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsBackupsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=backupId" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsBackupsCreateQueryParams.prototype, "backupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsBackupsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsBackupsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsBackupsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsBackupsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FileProjectsLocationsBackupsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsBackupsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsBackupsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsBackupsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return FileProjectsLocationsBackupsCreateQueryParams;
}(SpeakeasyBase));
export { FileProjectsLocationsBackupsCreateQueryParams };
var FileProjectsLocationsBackupsCreateSecurity = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsBackupsCreateSecurity, _super);
    function FileProjectsLocationsBackupsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FileProjectsLocationsBackupsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FileProjectsLocationsBackupsCreateSecurity.prototype, "oauth2c", void 0);
    return FileProjectsLocationsBackupsCreateSecurity;
}(SpeakeasyBase));
export { FileProjectsLocationsBackupsCreateSecurity };
var FileProjectsLocationsBackupsCreateRequest = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsBackupsCreateRequest, _super);
    function FileProjectsLocationsBackupsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FileProjectsLocationsBackupsCreatePathParams)
    ], FileProjectsLocationsBackupsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FileProjectsLocationsBackupsCreateQueryParams)
    ], FileProjectsLocationsBackupsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BackupInput)
    ], FileProjectsLocationsBackupsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FileProjectsLocationsBackupsCreateSecurity)
    ], FileProjectsLocationsBackupsCreateRequest.prototype, "security", void 0);
    return FileProjectsLocationsBackupsCreateRequest;
}(SpeakeasyBase));
export { FileProjectsLocationsBackupsCreateRequest };
var FileProjectsLocationsBackupsCreateResponse = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsBackupsCreateResponse, _super);
    function FileProjectsLocationsBackupsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FileProjectsLocationsBackupsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], FileProjectsLocationsBackupsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FileProjectsLocationsBackupsCreateResponse.prototype, "statusCode", void 0);
    return FileProjectsLocationsBackupsCreateResponse;
}(SpeakeasyBase));
export { FileProjectsLocationsBackupsCreateResponse };
