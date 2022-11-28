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
var DataflowProjectsLocationsSnapshotsGetPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsGetPathParams, _super);
    function DataflowProjectsLocationsSnapshotsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsGetPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsGetPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=snapshotId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsGetPathParams.prototype, "snapshotId", void 0);
    return DataflowProjectsLocationsSnapshotsGetPathParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsGetPathParams };
var DataflowProjectsLocationsSnapshotsGetQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsGetQueryParams, _super);
    function DataflowProjectsLocationsSnapshotsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsLocationsSnapshotsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsLocationsSnapshotsGetQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsGetQueryParams };
var DataflowProjectsLocationsSnapshotsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsGetSecurityOption1, _super);
    function DataflowProjectsLocationsSnapshotsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsSnapshotsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsSnapshotsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsSnapshotsGetSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsGetSecurityOption1 };
var DataflowProjectsLocationsSnapshotsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsGetSecurityOption2, _super);
    function DataflowProjectsLocationsSnapshotsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsSnapshotsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsSnapshotsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsSnapshotsGetSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsGetSecurityOption2 };
var DataflowProjectsLocationsSnapshotsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsGetSecurityOption3, _super);
    function DataflowProjectsLocationsSnapshotsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsSnapshotsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsSnapshotsGetSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsSnapshotsGetSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsGetSecurityOption3 };
var DataflowProjectsLocationsSnapshotsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsGetSecurityOption4, _super);
    function DataflowProjectsLocationsSnapshotsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsSnapshotsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsSnapshotsGetSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsSnapshotsGetSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsGetSecurityOption4 };
var DataflowProjectsLocationsSnapshotsGetSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsGetSecurity, _super);
    function DataflowProjectsLocationsSnapshotsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsSnapshotsGetSecurityOption1)
    ], DataflowProjectsLocationsSnapshotsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsSnapshotsGetSecurityOption2)
    ], DataflowProjectsLocationsSnapshotsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsSnapshotsGetSecurityOption3)
    ], DataflowProjectsLocationsSnapshotsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsSnapshotsGetSecurityOption4)
    ], DataflowProjectsLocationsSnapshotsGetSecurity.prototype, "option4", void 0);
    return DataflowProjectsLocationsSnapshotsGetSecurity;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsGetSecurity };
var DataflowProjectsLocationsSnapshotsGetRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsGetRequest, _super);
    function DataflowProjectsLocationsSnapshotsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsSnapshotsGetPathParams)
    ], DataflowProjectsLocationsSnapshotsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsSnapshotsGetQueryParams)
    ], DataflowProjectsLocationsSnapshotsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsSnapshotsGetSecurity)
    ], DataflowProjectsLocationsSnapshotsGetRequest.prototype, "security", void 0);
    return DataflowProjectsLocationsSnapshotsGetRequest;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsGetRequest };
var DataflowProjectsLocationsSnapshotsGetResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsGetResponse, _super);
    function DataflowProjectsLocationsSnapshotsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Snapshot)
    ], DataflowProjectsLocationsSnapshotsGetResponse.prototype, "snapshot", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsSnapshotsGetResponse.prototype, "statusCode", void 0);
    return DataflowProjectsLocationsSnapshotsGetResponse;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsGetResponse };
