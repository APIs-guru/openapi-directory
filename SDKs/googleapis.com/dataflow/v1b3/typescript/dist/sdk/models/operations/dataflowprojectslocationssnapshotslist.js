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
var DataflowProjectsLocationsSnapshotsListPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsListPathParams, _super);
    function DataflowProjectsLocationsSnapshotsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsListPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsListPathParams.prototype, "projectId", void 0);
    return DataflowProjectsLocationsSnapshotsListPathParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsListPathParams };
var DataflowProjectsLocationsSnapshotsListQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsListQueryParams, _super);
    function DataflowProjectsLocationsSnapshotsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsListQueryParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsLocationsSnapshotsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsListQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsLocationsSnapshotsListQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsListQueryParams };
var DataflowProjectsLocationsSnapshotsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsListSecurityOption1, _super);
    function DataflowProjectsLocationsSnapshotsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsSnapshotsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsSnapshotsListSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsSnapshotsListSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsListSecurityOption1 };
var DataflowProjectsLocationsSnapshotsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsListSecurityOption2, _super);
    function DataflowProjectsLocationsSnapshotsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsSnapshotsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsSnapshotsListSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsSnapshotsListSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsListSecurityOption2 };
var DataflowProjectsLocationsSnapshotsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsListSecurityOption3, _super);
    function DataflowProjectsLocationsSnapshotsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsSnapshotsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsSnapshotsListSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsSnapshotsListSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsListSecurityOption3 };
var DataflowProjectsLocationsSnapshotsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsListSecurityOption4, _super);
    function DataflowProjectsLocationsSnapshotsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsSnapshotsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsSnapshotsListSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsSnapshotsListSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsListSecurityOption4 };
var DataflowProjectsLocationsSnapshotsListSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsListSecurity, _super);
    function DataflowProjectsLocationsSnapshotsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsSnapshotsListSecurityOption1)
    ], DataflowProjectsLocationsSnapshotsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsSnapshotsListSecurityOption2)
    ], DataflowProjectsLocationsSnapshotsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsSnapshotsListSecurityOption3)
    ], DataflowProjectsLocationsSnapshotsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsSnapshotsListSecurityOption4)
    ], DataflowProjectsLocationsSnapshotsListSecurity.prototype, "option4", void 0);
    return DataflowProjectsLocationsSnapshotsListSecurity;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsListSecurity };
var DataflowProjectsLocationsSnapshotsListRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsListRequest, _super);
    function DataflowProjectsLocationsSnapshotsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsSnapshotsListPathParams)
    ], DataflowProjectsLocationsSnapshotsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsSnapshotsListQueryParams)
    ], DataflowProjectsLocationsSnapshotsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsSnapshotsListSecurity)
    ], DataflowProjectsLocationsSnapshotsListRequest.prototype, "security", void 0);
    return DataflowProjectsLocationsSnapshotsListRequest;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsListRequest };
var DataflowProjectsLocationsSnapshotsListResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsSnapshotsListResponse, _super);
    function DataflowProjectsLocationsSnapshotsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsSnapshotsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListSnapshotsResponse)
    ], DataflowProjectsLocationsSnapshotsListResponse.prototype, "listSnapshotsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsSnapshotsListResponse.prototype, "statusCode", void 0);
    return DataflowProjectsLocationsSnapshotsListResponse;
}(SpeakeasyBase));
export { DataflowProjectsLocationsSnapshotsListResponse };
