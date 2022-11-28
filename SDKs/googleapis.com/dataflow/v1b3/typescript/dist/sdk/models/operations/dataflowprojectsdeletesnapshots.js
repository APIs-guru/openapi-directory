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
var DataflowProjectsDeleteSnapshotsPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsDeleteSnapshotsPathParams, _super);
    function DataflowProjectsDeleteSnapshotsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsDeleteSnapshotsPathParams.prototype, "projectId", void 0);
    return DataflowProjectsDeleteSnapshotsPathParams;
}(SpeakeasyBase));
export { DataflowProjectsDeleteSnapshotsPathParams };
var DataflowProjectsDeleteSnapshotsQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsDeleteSnapshotsQueryParams, _super);
    function DataflowProjectsDeleteSnapshotsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsDeleteSnapshotsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsDeleteSnapshotsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsDeleteSnapshotsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsDeleteSnapshotsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsDeleteSnapshotsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsDeleteSnapshotsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsDeleteSnapshotsQueryParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsDeleteSnapshotsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsDeleteSnapshotsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsDeleteSnapshotsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=snapshotId" }),
        __metadata("design:type", String)
    ], DataflowProjectsDeleteSnapshotsQueryParams.prototype, "snapshotId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsDeleteSnapshotsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsDeleteSnapshotsQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsDeleteSnapshotsQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsDeleteSnapshotsQueryParams };
var DataflowProjectsDeleteSnapshotsSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsDeleteSnapshotsSecurityOption1, _super);
    function DataflowProjectsDeleteSnapshotsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsDeleteSnapshotsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsDeleteSnapshotsSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsDeleteSnapshotsSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsDeleteSnapshotsSecurityOption1 };
var DataflowProjectsDeleteSnapshotsSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsDeleteSnapshotsSecurityOption2, _super);
    function DataflowProjectsDeleteSnapshotsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsDeleteSnapshotsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsDeleteSnapshotsSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsDeleteSnapshotsSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsDeleteSnapshotsSecurityOption2 };
var DataflowProjectsDeleteSnapshotsSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsDeleteSnapshotsSecurityOption3, _super);
    function DataflowProjectsDeleteSnapshotsSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsDeleteSnapshotsSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsDeleteSnapshotsSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsDeleteSnapshotsSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsDeleteSnapshotsSecurityOption3 };
var DataflowProjectsDeleteSnapshotsSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsDeleteSnapshotsSecurityOption4, _super);
    function DataflowProjectsDeleteSnapshotsSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsDeleteSnapshotsSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsDeleteSnapshotsSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsDeleteSnapshotsSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsDeleteSnapshotsSecurityOption4 };
var DataflowProjectsDeleteSnapshotsSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsDeleteSnapshotsSecurity, _super);
    function DataflowProjectsDeleteSnapshotsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsDeleteSnapshotsSecurityOption1)
    ], DataflowProjectsDeleteSnapshotsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsDeleteSnapshotsSecurityOption2)
    ], DataflowProjectsDeleteSnapshotsSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsDeleteSnapshotsSecurityOption3)
    ], DataflowProjectsDeleteSnapshotsSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsDeleteSnapshotsSecurityOption4)
    ], DataflowProjectsDeleteSnapshotsSecurity.prototype, "option4", void 0);
    return DataflowProjectsDeleteSnapshotsSecurity;
}(SpeakeasyBase));
export { DataflowProjectsDeleteSnapshotsSecurity };
var DataflowProjectsDeleteSnapshotsRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsDeleteSnapshotsRequest, _super);
    function DataflowProjectsDeleteSnapshotsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsDeleteSnapshotsPathParams)
    ], DataflowProjectsDeleteSnapshotsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsDeleteSnapshotsQueryParams)
    ], DataflowProjectsDeleteSnapshotsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsDeleteSnapshotsSecurity)
    ], DataflowProjectsDeleteSnapshotsRequest.prototype, "security", void 0);
    return DataflowProjectsDeleteSnapshotsRequest;
}(SpeakeasyBase));
export { DataflowProjectsDeleteSnapshotsRequest };
var DataflowProjectsDeleteSnapshotsResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsDeleteSnapshotsResponse, _super);
    function DataflowProjectsDeleteSnapshotsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsDeleteSnapshotsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DataflowProjectsDeleteSnapshotsResponse.prototype, "deleteSnapshotResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsDeleteSnapshotsResponse.prototype, "statusCode", void 0);
    return DataflowProjectsDeleteSnapshotsResponse;
}(SpeakeasyBase));
export { DataflowProjectsDeleteSnapshotsResponse };
