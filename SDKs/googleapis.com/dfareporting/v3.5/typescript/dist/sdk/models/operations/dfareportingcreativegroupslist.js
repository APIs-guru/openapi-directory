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
var DfareportingCreativeGroupsListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingCreativeGroupsListPathParams, _super);
    function DfareportingCreativeGroupsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingCreativeGroupsListPathParams.prototype, "profileId", void 0);
    return DfareportingCreativeGroupsListPathParams;
}(SpeakeasyBase));
export { DfareportingCreativeGroupsListPathParams };
export var DfareportingCreativeGroupsListSortFieldEnum;
(function (DfareportingCreativeGroupsListSortFieldEnum) {
    DfareportingCreativeGroupsListSortFieldEnum["Id"] = "ID";
    DfareportingCreativeGroupsListSortFieldEnum["Name"] = "NAME";
})(DfareportingCreativeGroupsListSortFieldEnum || (DfareportingCreativeGroupsListSortFieldEnum = {}));
export var DfareportingCreativeGroupsListSortOrderEnum;
(function (DfareportingCreativeGroupsListSortOrderEnum) {
    DfareportingCreativeGroupsListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingCreativeGroupsListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingCreativeGroupsListSortOrderEnum || (DfareportingCreativeGroupsListSortOrderEnum = {}));
var DfareportingCreativeGroupsListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingCreativeGroupsListQueryParams, _super);
    function DfareportingCreativeGroupsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingCreativeGroupsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingCreativeGroupsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserIds" }),
        __metadata("design:type", Array)
    ], DfareportingCreativeGroupsListQueryParams.prototype, "advertiserIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingCreativeGroupsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingCreativeGroupsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingCreativeGroupsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupNumber" }),
        __metadata("design:type", Number)
    ], DfareportingCreativeGroupsListQueryParams.prototype, "groupNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingCreativeGroupsListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingCreativeGroupsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingCreativeGroupsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingCreativeGroupsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingCreativeGroupsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingCreativeGroupsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingCreativeGroupsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" }),
        __metadata("design:type", String)
    ], DfareportingCreativeGroupsListQueryParams.prototype, "searchString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingCreativeGroupsListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingCreativeGroupsListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingCreativeGroupsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingCreativeGroupsListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingCreativeGroupsListQueryParams;
}(SpeakeasyBase));
export { DfareportingCreativeGroupsListQueryParams };
var DfareportingCreativeGroupsListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingCreativeGroupsListSecurity, _super);
    function DfareportingCreativeGroupsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingCreativeGroupsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingCreativeGroupsListSecurity.prototype, "oauth2c", void 0);
    return DfareportingCreativeGroupsListSecurity;
}(SpeakeasyBase));
export { DfareportingCreativeGroupsListSecurity };
var DfareportingCreativeGroupsListRequest = /** @class */ (function (_super) {
    __extends(DfareportingCreativeGroupsListRequest, _super);
    function DfareportingCreativeGroupsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingCreativeGroupsListPathParams)
    ], DfareportingCreativeGroupsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingCreativeGroupsListQueryParams)
    ], DfareportingCreativeGroupsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingCreativeGroupsListSecurity)
    ], DfareportingCreativeGroupsListRequest.prototype, "security", void 0);
    return DfareportingCreativeGroupsListRequest;
}(SpeakeasyBase));
export { DfareportingCreativeGroupsListRequest };
var DfareportingCreativeGroupsListResponse = /** @class */ (function (_super) {
    __extends(DfareportingCreativeGroupsListResponse, _super);
    function DfareportingCreativeGroupsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingCreativeGroupsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreativeGroupsListResponse)
    ], DfareportingCreativeGroupsListResponse.prototype, "creativeGroupsListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingCreativeGroupsListResponse.prototype, "statusCode", void 0);
    return DfareportingCreativeGroupsListResponse;
}(SpeakeasyBase));
export { DfareportingCreativeGroupsListResponse };
