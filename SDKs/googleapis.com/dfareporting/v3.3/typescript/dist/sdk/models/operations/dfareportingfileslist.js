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
var DfareportingFilesListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingFilesListPathParams, _super);
    function DfareportingFilesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingFilesListPathParams.prototype, "profileId", void 0);
    return DfareportingFilesListPathParams;
}(SpeakeasyBase));
export { DfareportingFilesListPathParams };
export var DfareportingFilesListScopeEnum;
(function (DfareportingFilesListScopeEnum) {
    DfareportingFilesListScopeEnum["All"] = "ALL";
    DfareportingFilesListScopeEnum["Mine"] = "MINE";
    DfareportingFilesListScopeEnum["SharedWithMe"] = "SHARED_WITH_ME";
})(DfareportingFilesListScopeEnum || (DfareportingFilesListScopeEnum = {}));
export var DfareportingFilesListSortFieldEnum;
(function (DfareportingFilesListSortFieldEnum) {
    DfareportingFilesListSortFieldEnum["Id"] = "ID";
    DfareportingFilesListSortFieldEnum["LastModifiedTime"] = "LAST_MODIFIED_TIME";
})(DfareportingFilesListSortFieldEnum || (DfareportingFilesListSortFieldEnum = {}));
export var DfareportingFilesListSortOrderEnum;
(function (DfareportingFilesListSortOrderEnum) {
    DfareportingFilesListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingFilesListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingFilesListSortOrderEnum || (DfareportingFilesListSortOrderEnum = {}));
var DfareportingFilesListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingFilesListQueryParams, _super);
    function DfareportingFilesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingFilesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingFilesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingFilesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingFilesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingFilesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingFilesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingFilesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingFilesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingFilesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingFilesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingFilesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" }),
        __metadata("design:type", String)
    ], DfareportingFilesListQueryParams.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingFilesListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingFilesListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingFilesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingFilesListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingFilesListQueryParams;
}(SpeakeasyBase));
export { DfareportingFilesListQueryParams };
var DfareportingFilesListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingFilesListSecurity, _super);
    function DfareportingFilesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingFilesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingFilesListSecurity.prototype, "oauth2c", void 0);
    return DfareportingFilesListSecurity;
}(SpeakeasyBase));
export { DfareportingFilesListSecurity };
var DfareportingFilesListRequest = /** @class */ (function (_super) {
    __extends(DfareportingFilesListRequest, _super);
    function DfareportingFilesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingFilesListPathParams)
    ], DfareportingFilesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingFilesListQueryParams)
    ], DfareportingFilesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingFilesListSecurity)
    ], DfareportingFilesListRequest.prototype, "security", void 0);
    return DfareportingFilesListRequest;
}(SpeakeasyBase));
export { DfareportingFilesListRequest };
var DfareportingFilesListResponse = /** @class */ (function (_super) {
    __extends(DfareportingFilesListResponse, _super);
    function DfareportingFilesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingFilesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FileList)
    ], DfareportingFilesListResponse.prototype, "fileList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingFilesListResponse.prototype, "statusCode", void 0);
    return DfareportingFilesListResponse;
}(SpeakeasyBase));
export { DfareportingFilesListResponse };
