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
var ComposerProjectsLocationsEnvironmentsLoadSnapshotPathParams = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsLoadSnapshotPathParams, _super);
    function ComposerProjectsLocationsEnvironmentsLoadSnapshotPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=environment" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsLoadSnapshotPathParams.prototype, "environment", void 0);
    return ComposerProjectsLocationsEnvironmentsLoadSnapshotPathParams;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsLoadSnapshotPathParams };
var ComposerProjectsLocationsEnvironmentsLoadSnapshotQueryParams = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsLoadSnapshotQueryParams, _super);
    function ComposerProjectsLocationsEnvironmentsLoadSnapshotQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsLoadSnapshotQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsLoadSnapshotQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsLoadSnapshotQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsLoadSnapshotQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsLoadSnapshotQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsLoadSnapshotQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsLoadSnapshotQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ComposerProjectsLocationsEnvironmentsLoadSnapshotQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsLoadSnapshotQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsLoadSnapshotQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsLoadSnapshotQueryParams.prototype, "uploadProtocol", void 0);
    return ComposerProjectsLocationsEnvironmentsLoadSnapshotQueryParams;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsLoadSnapshotQueryParams };
var ComposerProjectsLocationsEnvironmentsLoadSnapshotSecurity = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsLoadSnapshotSecurity, _super);
    function ComposerProjectsLocationsEnvironmentsLoadSnapshotSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ComposerProjectsLocationsEnvironmentsLoadSnapshotSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ComposerProjectsLocationsEnvironmentsLoadSnapshotSecurity.prototype, "oauth2c", void 0);
    return ComposerProjectsLocationsEnvironmentsLoadSnapshotSecurity;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsLoadSnapshotSecurity };
var ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest, _super);
    function ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ComposerProjectsLocationsEnvironmentsLoadSnapshotPathParams)
    ], ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComposerProjectsLocationsEnvironmentsLoadSnapshotQueryParams)
    ], ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LoadSnapshotRequest)
    ], ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComposerProjectsLocationsEnvironmentsLoadSnapshotSecurity)
    ], ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest.prototype, "security", void 0);
    return ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest };
var ComposerProjectsLocationsEnvironmentsLoadSnapshotResponse = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsLoadSnapshotResponse, _super);
    function ComposerProjectsLocationsEnvironmentsLoadSnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsLoadSnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], ComposerProjectsLocationsEnvironmentsLoadSnapshotResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ComposerProjectsLocationsEnvironmentsLoadSnapshotResponse.prototype, "statusCode", void 0);
    return ComposerProjectsLocationsEnvironmentsLoadSnapshotResponse;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsLoadSnapshotResponse };
