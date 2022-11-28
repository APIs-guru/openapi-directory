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
var DataflowProjectsSnapshotsListPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsSnapshotsListPathParams, _super);
    function DataflowProjectsSnapshotsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsListPathParams.prototype, "projectId", void 0);
    return DataflowProjectsSnapshotsListPathParams;
}(SpeakeasyBase));
export { DataflowProjectsSnapshotsListPathParams };
var DataflowProjectsSnapshotsListQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsSnapshotsListQueryParams, _super);
    function DataflowProjectsSnapshotsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsListQueryParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsListQueryParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsSnapshotsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsListQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsSnapshotsListQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsSnapshotsListQueryParams };
var DataflowProjectsSnapshotsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsSnapshotsListSecurityOption1, _super);
    function DataflowProjectsSnapshotsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsSnapshotsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsSnapshotsListSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsSnapshotsListSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsSnapshotsListSecurityOption1 };
var DataflowProjectsSnapshotsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsSnapshotsListSecurityOption2, _super);
    function DataflowProjectsSnapshotsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsSnapshotsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsSnapshotsListSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsSnapshotsListSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsSnapshotsListSecurityOption2 };
var DataflowProjectsSnapshotsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsSnapshotsListSecurityOption3, _super);
    function DataflowProjectsSnapshotsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsSnapshotsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsSnapshotsListSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsSnapshotsListSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsSnapshotsListSecurityOption3 };
var DataflowProjectsSnapshotsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsSnapshotsListSecurityOption4, _super);
    function DataflowProjectsSnapshotsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsSnapshotsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsSnapshotsListSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsSnapshotsListSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsSnapshotsListSecurityOption4 };
var DataflowProjectsSnapshotsListSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsSnapshotsListSecurity, _super);
    function DataflowProjectsSnapshotsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsSnapshotsListSecurityOption1)
    ], DataflowProjectsSnapshotsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsSnapshotsListSecurityOption2)
    ], DataflowProjectsSnapshotsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsSnapshotsListSecurityOption3)
    ], DataflowProjectsSnapshotsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsSnapshotsListSecurityOption4)
    ], DataflowProjectsSnapshotsListSecurity.prototype, "option4", void 0);
    return DataflowProjectsSnapshotsListSecurity;
}(SpeakeasyBase));
export { DataflowProjectsSnapshotsListSecurity };
var DataflowProjectsSnapshotsListRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsSnapshotsListRequest, _super);
    function DataflowProjectsSnapshotsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsSnapshotsListPathParams)
    ], DataflowProjectsSnapshotsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsSnapshotsListQueryParams)
    ], DataflowProjectsSnapshotsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsSnapshotsListSecurity)
    ], DataflowProjectsSnapshotsListRequest.prototype, "security", void 0);
    return DataflowProjectsSnapshotsListRequest;
}(SpeakeasyBase));
export { DataflowProjectsSnapshotsListRequest };
var DataflowProjectsSnapshotsListResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsSnapshotsListResponse, _super);
    function DataflowProjectsSnapshotsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsSnapshotsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListSnapshotsResponse)
    ], DataflowProjectsSnapshotsListResponse.prototype, "listSnapshotsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsSnapshotsListResponse.prototype, "statusCode", void 0);
    return DataflowProjectsSnapshotsListResponse;
}(SpeakeasyBase));
export { DataflowProjectsSnapshotsListResponse };
