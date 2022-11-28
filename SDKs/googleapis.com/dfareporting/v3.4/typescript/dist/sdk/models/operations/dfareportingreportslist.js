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
var DfareportingReportsListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingReportsListPathParams, _super);
    function DfareportingReportsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingReportsListPathParams.prototype, "profileId", void 0);
    return DfareportingReportsListPathParams;
}(SpeakeasyBase));
export { DfareportingReportsListPathParams };
export var DfareportingReportsListScopeEnum;
(function (DfareportingReportsListScopeEnum) {
    DfareportingReportsListScopeEnum["All"] = "ALL";
    DfareportingReportsListScopeEnum["Mine"] = "MINE";
})(DfareportingReportsListScopeEnum || (DfareportingReportsListScopeEnum = {}));
export var DfareportingReportsListSortFieldEnum;
(function (DfareportingReportsListSortFieldEnum) {
    DfareportingReportsListSortFieldEnum["Id"] = "ID";
    DfareportingReportsListSortFieldEnum["LastModifiedTime"] = "LAST_MODIFIED_TIME";
    DfareportingReportsListSortFieldEnum["Name"] = "NAME";
})(DfareportingReportsListSortFieldEnum || (DfareportingReportsListSortFieldEnum = {}));
export var DfareportingReportsListSortOrderEnum;
(function (DfareportingReportsListSortOrderEnum) {
    DfareportingReportsListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingReportsListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingReportsListSortOrderEnum || (DfareportingReportsListSortOrderEnum = {}));
var DfareportingReportsListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingReportsListQueryParams, _super);
    function DfareportingReportsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingReportsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingReportsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingReportsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingReportsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingReportsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingReportsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingReportsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingReportsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingReportsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingReportsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingReportsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" }),
        __metadata("design:type", String)
    ], DfareportingReportsListQueryParams.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingReportsListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingReportsListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingReportsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingReportsListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingReportsListQueryParams;
}(SpeakeasyBase));
export { DfareportingReportsListQueryParams };
var DfareportingReportsListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingReportsListSecurity, _super);
    function DfareportingReportsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingReportsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingReportsListSecurity.prototype, "oauth2c", void 0);
    return DfareportingReportsListSecurity;
}(SpeakeasyBase));
export { DfareportingReportsListSecurity };
var DfareportingReportsListRequest = /** @class */ (function (_super) {
    __extends(DfareportingReportsListRequest, _super);
    function DfareportingReportsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingReportsListPathParams)
    ], DfareportingReportsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingReportsListQueryParams)
    ], DfareportingReportsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingReportsListSecurity)
    ], DfareportingReportsListRequest.prototype, "security", void 0);
    return DfareportingReportsListRequest;
}(SpeakeasyBase));
export { DfareportingReportsListRequest };
var DfareportingReportsListResponse = /** @class */ (function (_super) {
    __extends(DfareportingReportsListResponse, _super);
    function DfareportingReportsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingReportsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ReportList)
    ], DfareportingReportsListResponse.prototype, "reportList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingReportsListResponse.prototype, "statusCode", void 0);
    return DfareportingReportsListResponse;
}(SpeakeasyBase));
export { DfareportingReportsListResponse };
