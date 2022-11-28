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
var DataflowProjectsSnapshotsGetPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsSnapshotsGetPathParams, _super);
    function DataflowProjectsSnapshotsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsGetPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=snapshotId" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsGetPathParams.prototype, "snapshotId", void 0);
    return DataflowProjectsSnapshotsGetPathParams;
}(SpeakeasyBase));
export { DataflowProjectsSnapshotsGetPathParams };
var DataflowProjectsSnapshotsGetQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsSnapshotsGetQueryParams, _super);
    function DataflowProjectsSnapshotsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsGetQueryParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsSnapshotsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsSnapshotsGetQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsSnapshotsGetQueryParams };
var DataflowProjectsSnapshotsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsSnapshotsGetSecurityOption1, _super);
    function DataflowProjectsSnapshotsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsSnapshotsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsSnapshotsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsSnapshotsGetSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsSnapshotsGetSecurityOption1 };
var DataflowProjectsSnapshotsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsSnapshotsGetSecurityOption2, _super);
    function DataflowProjectsSnapshotsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsSnapshotsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsSnapshotsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsSnapshotsGetSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsSnapshotsGetSecurityOption2 };
var DataflowProjectsSnapshotsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsSnapshotsGetSecurityOption3, _super);
    function DataflowProjectsSnapshotsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsSnapshotsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsSnapshotsGetSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsSnapshotsGetSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsSnapshotsGetSecurityOption3 };
var DataflowProjectsSnapshotsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsSnapshotsGetSecurityOption4, _super);
    function DataflowProjectsSnapshotsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsSnapshotsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsSnapshotsGetSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsSnapshotsGetSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsSnapshotsGetSecurityOption4 };
var DataflowProjectsSnapshotsGetSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsSnapshotsGetSecurity, _super);
    function DataflowProjectsSnapshotsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsSnapshotsGetSecurityOption1)
    ], DataflowProjectsSnapshotsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsSnapshotsGetSecurityOption2)
    ], DataflowProjectsSnapshotsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsSnapshotsGetSecurityOption3)
    ], DataflowProjectsSnapshotsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsSnapshotsGetSecurityOption4)
    ], DataflowProjectsSnapshotsGetSecurity.prototype, "option4", void 0);
    return DataflowProjectsSnapshotsGetSecurity;
}(SpeakeasyBase));
export { DataflowProjectsSnapshotsGetSecurity };
var DataflowProjectsSnapshotsGetRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsSnapshotsGetRequest, _super);
    function DataflowProjectsSnapshotsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsSnapshotsGetPathParams)
    ], DataflowProjectsSnapshotsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsSnapshotsGetQueryParams)
    ], DataflowProjectsSnapshotsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsSnapshotsGetSecurity)
    ], DataflowProjectsSnapshotsGetRequest.prototype, "security", void 0);
    return DataflowProjectsSnapshotsGetRequest;
}(SpeakeasyBase));
export { DataflowProjectsSnapshotsGetRequest };
var DataflowProjectsSnapshotsGetResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsSnapshotsGetResponse, _super);
    function DataflowProjectsSnapshotsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Snapshot)
    ], DataflowProjectsSnapshotsGetResponse.prototype, "snapshot", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsSnapshotsGetResponse.prototype, "statusCode", void 0);
    return DataflowProjectsSnapshotsGetResponse;
}(SpeakeasyBase));
export { DataflowProjectsSnapshotsGetResponse };
