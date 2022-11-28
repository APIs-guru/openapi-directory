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
var DataflowProjectsLocationsSnapshotsDeletePathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsDeletePathParams, _super);
    function DataflowProjectsLocationsSnapshotsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsDeletePathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsDeletePathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=snapshotId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsDeletePathParams.prototype, "snapshotId", void 0);
    return DataflowProjectsLocationsSnapshotsDeletePathParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsDeletePathParams };
var DataflowProjectsLocationsSnapshotsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsDeleteQueryParams, _super);
    function DataflowProjectsLocationsSnapshotsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsLocationsSnapshotsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsLocationsSnapshotsDeleteQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsDeleteQueryParams };
var DataflowProjectsLocationsSnapshotsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsDeleteSecurityOption1, _super);
    function DataflowProjectsLocationsSnapshotsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsSnapshotsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsSnapshotsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsSnapshotsDeleteSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsDeleteSecurityOption1 };
var DataflowProjectsLocationsSnapshotsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsDeleteSecurityOption2, _super);
    function DataflowProjectsLocationsSnapshotsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsSnapshotsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsSnapshotsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsSnapshotsDeleteSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsDeleteSecurityOption2 };
var DataflowProjectsLocationsSnapshotsDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsDeleteSecurityOption3, _super);
    function DataflowProjectsLocationsSnapshotsDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsSnapshotsDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsSnapshotsDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsSnapshotsDeleteSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsDeleteSecurityOption3 };
var DataflowProjectsLocationsSnapshotsDeleteSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsDeleteSecurityOption4, _super);
    function DataflowProjectsLocationsSnapshotsDeleteSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsSnapshotsDeleteSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsSnapshotsDeleteSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsSnapshotsDeleteSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsDeleteSecurityOption4 };
var DataflowProjectsLocationsSnapshotsDeleteSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsDeleteSecurity, _super);
    function DataflowProjectsLocationsSnapshotsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsSnapshotsDeleteSecurityOption1)
    ], DataflowProjectsLocationsSnapshotsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsSnapshotsDeleteSecurityOption2)
    ], DataflowProjectsLocationsSnapshotsDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsSnapshotsDeleteSecurityOption3)
    ], DataflowProjectsLocationsSnapshotsDeleteSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsSnapshotsDeleteSecurityOption4)
    ], DataflowProjectsLocationsSnapshotsDeleteSecurity.prototype, "option4", void 0);
    return DataflowProjectsLocationsSnapshotsDeleteSecurity;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsDeleteSecurity };
var DataflowProjectsLocationsSnapshotsDeleteRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsDeleteRequest, _super);
    function DataflowProjectsLocationsSnapshotsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsSnapshotsDeletePathParams)
    ], DataflowProjectsLocationsSnapshotsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsSnapshotsDeleteQueryParams)
    ], DataflowProjectsLocationsSnapshotsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsSnapshotsDeleteSecurity)
    ], DataflowProjectsLocationsSnapshotsDeleteRequest.prototype, "security", void 0);
    return DataflowProjectsLocationsSnapshotsDeleteRequest;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsDeleteRequest };
var DataflowProjectsLocationsSnapshotsDeleteResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsDeleteResponse, _super);
    function DataflowProjectsLocationsSnapshotsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DataflowProjectsLocationsSnapshotsDeleteResponse.prototype, "deleteSnapshotResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsSnapshotsDeleteResponse.prototype, "statusCode", void 0);
    return DataflowProjectsLocationsSnapshotsDeleteResponse;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsDeleteResponse };
