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
var DfareportingReportsFilesListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingReportsFilesListPathParams, _super);
    function DfareportingReportsFilesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingReportsFilesListPathParams.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reportId" }),
        __metadata("design:type", String)
    ], DfareportingReportsFilesListPathParams.prototype, "reportId", void 0);
    return DfareportingReportsFilesListPathParams;
}(SpeakeasyBase));
export { DfareportingReportsFilesListPathParams };
export var DfareportingReportsFilesListSortFieldEnum;
(function (DfareportingReportsFilesListSortFieldEnum) {
    DfareportingReportsFilesListSortFieldEnum["Id"] = "ID";
    DfareportingReportsFilesListSortFieldEnum["LastModifiedTime"] = "LAST_MODIFIED_TIME";
})(DfareportingReportsFilesListSortFieldEnum || (DfareportingReportsFilesListSortFieldEnum = {}));
export var DfareportingReportsFilesListSortOrderEnum;
(function (DfareportingReportsFilesListSortOrderEnum) {
    DfareportingReportsFilesListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingReportsFilesListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingReportsFilesListSortOrderEnum || (DfareportingReportsFilesListSortOrderEnum = {}));
var DfareportingReportsFilesListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingReportsFilesListQueryParams, _super);
    function DfareportingReportsFilesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingReportsFilesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingReportsFilesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingReportsFilesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingReportsFilesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingReportsFilesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingReportsFilesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingReportsFilesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingReportsFilesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingReportsFilesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingReportsFilesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingReportsFilesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingReportsFilesListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingReportsFilesListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingReportsFilesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingReportsFilesListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingReportsFilesListQueryParams;
}(SpeakeasyBase));
export { DfareportingReportsFilesListQueryParams };
var DfareportingReportsFilesListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingReportsFilesListSecurity, _super);
    function DfareportingReportsFilesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingReportsFilesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingReportsFilesListSecurity.prototype, "oauth2c", void 0);
    return DfareportingReportsFilesListSecurity;
}(SpeakeasyBase));
export { DfareportingReportsFilesListSecurity };
var DfareportingReportsFilesListRequest = /** @class */ (function (_super) {
    __extends(DfareportingReportsFilesListRequest, _super);
    function DfareportingReportsFilesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingReportsFilesListPathParams)
    ], DfareportingReportsFilesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingReportsFilesListQueryParams)
    ], DfareportingReportsFilesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingReportsFilesListSecurity)
    ], DfareportingReportsFilesListRequest.prototype, "security", void 0);
    return DfareportingReportsFilesListRequest;
}(SpeakeasyBase));
export { DfareportingReportsFilesListRequest };
var DfareportingReportsFilesListResponse = /** @class */ (function (_super) {
    __extends(DfareportingReportsFilesListResponse, _super);
    function DfareportingReportsFilesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingReportsFilesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FileList)
    ], DfareportingReportsFilesListResponse.prototype, "fileList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingReportsFilesListResponse.prototype, "statusCode", void 0);
    return DfareportingReportsFilesListResponse;
}(SpeakeasyBase));
export { DfareportingReportsFilesListResponse };
