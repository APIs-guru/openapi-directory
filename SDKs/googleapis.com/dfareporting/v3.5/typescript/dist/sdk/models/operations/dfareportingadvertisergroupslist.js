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
var DfareportingAdvertiserGroupsListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserGroupsListPathParams, _super);
    function DfareportingAdvertiserGroupsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsListPathParams.prototype, "profileId", void 0);
    return DfareportingAdvertiserGroupsListPathParams;
}(SpeakeasyBase));
export { DfareportingAdvertiserGroupsListPathParams };
export var DfareportingAdvertiserGroupsListSortFieldEnum;
(function (DfareportingAdvertiserGroupsListSortFieldEnum) {
    DfareportingAdvertiserGroupsListSortFieldEnum["Id"] = "ID";
    DfareportingAdvertiserGroupsListSortFieldEnum["Name"] = "NAME";
})(DfareportingAdvertiserGroupsListSortFieldEnum || (DfareportingAdvertiserGroupsListSortFieldEnum = {}));
export var DfareportingAdvertiserGroupsListSortOrderEnum;
(function (DfareportingAdvertiserGroupsListSortOrderEnum) {
    DfareportingAdvertiserGroupsListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingAdvertiserGroupsListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingAdvertiserGroupsListSortOrderEnum || (DfareportingAdvertiserGroupsListSortOrderEnum = {}));
var DfareportingAdvertiserGroupsListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserGroupsListQueryParams, _super);
    function DfareportingAdvertiserGroupsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingAdvertiserGroupsListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingAdvertiserGroupsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingAdvertiserGroupsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsListQueryParams.prototype, "searchString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingAdvertiserGroupsListQueryParams;
}(SpeakeasyBase));
export { DfareportingAdvertiserGroupsListQueryParams };
var DfareportingAdvertiserGroupsListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserGroupsListSecurity, _super);
    function DfareportingAdvertiserGroupsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingAdvertiserGroupsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingAdvertiserGroupsListSecurity.prototype, "oauth2c", void 0);
    return DfareportingAdvertiserGroupsListSecurity;
}(SpeakeasyBase));
export { DfareportingAdvertiserGroupsListSecurity };
var DfareportingAdvertiserGroupsListRequest = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserGroupsListRequest, _super);
    function DfareportingAdvertiserGroupsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAdvertiserGroupsListPathParams)
    ], DfareportingAdvertiserGroupsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAdvertiserGroupsListQueryParams)
    ], DfareportingAdvertiserGroupsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAdvertiserGroupsListSecurity)
    ], DfareportingAdvertiserGroupsListRequest.prototype, "security", void 0);
    return DfareportingAdvertiserGroupsListRequest;
}(SpeakeasyBase));
export { DfareportingAdvertiserGroupsListRequest };
var DfareportingAdvertiserGroupsListResponse = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserGroupsListResponse, _super);
    function DfareportingAdvertiserGroupsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AdvertiserGroupsListResponse)
    ], DfareportingAdvertiserGroupsListResponse.prototype, "advertiserGroupsListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingAdvertiserGroupsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingAdvertiserGroupsListResponse.prototype, "statusCode", void 0);
    return DfareportingAdvertiserGroupsListResponse;
}(SpeakeasyBase));
export { DfareportingAdvertiserGroupsListResponse };
