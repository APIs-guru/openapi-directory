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
var DfareportingAdvertisersListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingAdvertisersListPathParams, _super);
    function DfareportingAdvertisersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingAdvertisersListPathParams.prototype, "profileId", void 0);
    return DfareportingAdvertisersListPathParams;
}(SpeakeasyBase));
export { DfareportingAdvertisersListPathParams };
export var DfareportingAdvertisersListSortFieldEnum;
(function (DfareportingAdvertisersListSortFieldEnum) {
    DfareportingAdvertisersListSortFieldEnum["Id"] = "ID";
    DfareportingAdvertisersListSortFieldEnum["Name"] = "NAME";
})(DfareportingAdvertisersListSortFieldEnum || (DfareportingAdvertisersListSortFieldEnum = {}));
export var DfareportingAdvertisersListSortOrderEnum;
(function (DfareportingAdvertisersListSortOrderEnum) {
    DfareportingAdvertisersListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingAdvertisersListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingAdvertisersListSortOrderEnum || (DfareportingAdvertisersListSortOrderEnum = {}));
export var DfareportingAdvertisersListStatusEnum;
(function (DfareportingAdvertisersListStatusEnum) {
    DfareportingAdvertisersListStatusEnum["Approved"] = "APPROVED";
    DfareportingAdvertisersListStatusEnum["OnHold"] = "ON_HOLD";
})(DfareportingAdvertisersListStatusEnum || (DfareportingAdvertisersListStatusEnum = {}));
var DfareportingAdvertisersListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingAdvertisersListQueryParams, _super);
    function DfareportingAdvertisersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingAdvertisersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingAdvertisersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserGroupIds" }),
        __metadata("design:type", Array)
    ], DfareportingAdvertisersListQueryParams.prototype, "advertiserGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingAdvertisersListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingAdvertisersListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingAdvertisersListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=floodlightConfigurationIds" }),
        __metadata("design:type", Array)
    ], DfareportingAdvertisersListQueryParams.prototype, "floodlightConfigurationIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingAdvertisersListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeAdvertisersWithoutGroupsOnly" }),
        __metadata("design:type", Boolean)
    ], DfareportingAdvertisersListQueryParams.prototype, "includeAdvertisersWithoutGroupsOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingAdvertisersListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingAdvertisersListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingAdvertisersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onlyParent" }),
        __metadata("design:type", Boolean)
    ], DfareportingAdvertisersListQueryParams.prototype, "onlyParent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingAdvertisersListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingAdvertisersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingAdvertisersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" }),
        __metadata("design:type", String)
    ], DfareportingAdvertisersListQueryParams.prototype, "searchString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingAdvertisersListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingAdvertisersListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], DfareportingAdvertisersListQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subaccountId" }),
        __metadata("design:type", String)
    ], DfareportingAdvertisersListQueryParams.prototype, "subaccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingAdvertisersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingAdvertisersListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingAdvertisersListQueryParams;
}(SpeakeasyBase));
export { DfareportingAdvertisersListQueryParams };
var DfareportingAdvertisersListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingAdvertisersListSecurity, _super);
    function DfareportingAdvertisersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingAdvertisersListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingAdvertisersListSecurity.prototype, "oauth2c", void 0);
    return DfareportingAdvertisersListSecurity;
}(SpeakeasyBase));
export { DfareportingAdvertisersListSecurity };
var DfareportingAdvertisersListRequest = /** @class */ (function (_super) {
    __extends(DfareportingAdvertisersListRequest, _super);
    function DfareportingAdvertisersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAdvertisersListPathParams)
    ], DfareportingAdvertisersListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAdvertisersListQueryParams)
    ], DfareportingAdvertisersListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAdvertisersListSecurity)
    ], DfareportingAdvertisersListRequest.prototype, "security", void 0);
    return DfareportingAdvertisersListRequest;
}(SpeakeasyBase));
export { DfareportingAdvertisersListRequest };
var DfareportingAdvertisersListResponse = /** @class */ (function (_super) {
    __extends(DfareportingAdvertisersListResponse, _super);
    function DfareportingAdvertisersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AdvertisersListResponse)
    ], DfareportingAdvertisersListResponse.prototype, "advertisersListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingAdvertisersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingAdvertisersListResponse.prototype, "statusCode", void 0);
    return DfareportingAdvertisersListResponse;
}(SpeakeasyBase));
export { DfareportingAdvertisersListResponse };
