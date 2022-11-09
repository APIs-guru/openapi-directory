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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var ComposerProjectsLocationsEnvironmentsSaveSnapshotPathParams = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsSaveSnapshotPathParams, _super);
    function ComposerProjectsLocationsEnvironmentsSaveSnapshotPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=environment" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsSaveSnapshotPathParams.prototype, "environment", void 0);
    return ComposerProjectsLocationsEnvironmentsSaveSnapshotPathParams;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsSaveSnapshotPathParams };
var ComposerProjectsLocationsEnvironmentsSaveSnapshotQueryParams = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsSaveSnapshotQueryParams, _super);
    function ComposerProjectsLocationsEnvironmentsSaveSnapshotQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsSaveSnapshotQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsSaveSnapshotQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsSaveSnapshotQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsSaveSnapshotQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsSaveSnapshotQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsSaveSnapshotQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsSaveSnapshotQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ComposerProjectsLocationsEnvironmentsSaveSnapshotQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsSaveSnapshotQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsSaveSnapshotQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsSaveSnapshotQueryParams.prototype, "uploadProtocol", void 0);
    return ComposerProjectsLocationsEnvironmentsSaveSnapshotQueryParams;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsSaveSnapshotQueryParams };
var ComposerProjectsLocationsEnvironmentsSaveSnapshotSecurity = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsSaveSnapshotSecurity, _super);
    function ComposerProjectsLocationsEnvironmentsSaveSnapshotSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ComposerProjectsLocationsEnvironmentsSaveSnapshotSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ComposerProjectsLocationsEnvironmentsSaveSnapshotSecurity.prototype, "oauth2c", void 0);
    return ComposerProjectsLocationsEnvironmentsSaveSnapshotSecurity;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsSaveSnapshotSecurity };
var ComposerProjectsLocationsEnvironmentsSaveSnapshotRequest = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsSaveSnapshotRequest, _super);
    function ComposerProjectsLocationsEnvironmentsSaveSnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ComposerProjectsLocationsEnvironmentsSaveSnapshotPathParams)
    ], ComposerProjectsLocationsEnvironmentsSaveSnapshotRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComposerProjectsLocationsEnvironmentsSaveSnapshotQueryParams)
    ], ComposerProjectsLocationsEnvironmentsSaveSnapshotRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SaveSnapshotRequest)
    ], ComposerProjectsLocationsEnvironmentsSaveSnapshotRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComposerProjectsLocationsEnvironmentsSaveSnapshotSecurity)
    ], ComposerProjectsLocationsEnvironmentsSaveSnapshotRequest.prototype, "security", void 0);
    return ComposerProjectsLocationsEnvironmentsSaveSnapshotRequest;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsSaveSnapshotRequest };
var ComposerProjectsLocationsEnvironmentsSaveSnapshotResponse = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsSaveSnapshotResponse, _super);
    function ComposerProjectsLocationsEnvironmentsSaveSnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsSaveSnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], ComposerProjectsLocationsEnvironmentsSaveSnapshotResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ComposerProjectsLocationsEnvironmentsSaveSnapshotResponse.prototype, "statusCode", void 0);
    return ComposerProjectsLocationsEnvironmentsSaveSnapshotResponse;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsSaveSnapshotResponse };
