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
var DfareportingFloodlightActivityGroupsListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivityGroupsListPathParams, _super);
    function DfareportingFloodlightActivityGroupsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsListPathParams.prototype, "profileId", void 0);
    return DfareportingFloodlightActivityGroupsListPathParams;
}(SpeakeasyBase));
export { DfareportingFloodlightActivityGroupsListPathParams };
export var DfareportingFloodlightActivityGroupsListSortFieldEnum;
(function (DfareportingFloodlightActivityGroupsListSortFieldEnum) {
    DfareportingFloodlightActivityGroupsListSortFieldEnum["Id"] = "ID";
    DfareportingFloodlightActivityGroupsListSortFieldEnum["Name"] = "NAME";
})(DfareportingFloodlightActivityGroupsListSortFieldEnum || (DfareportingFloodlightActivityGroupsListSortFieldEnum = {}));
export var DfareportingFloodlightActivityGroupsListSortOrderEnum;
(function (DfareportingFloodlightActivityGroupsListSortOrderEnum) {
    DfareportingFloodlightActivityGroupsListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingFloodlightActivityGroupsListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingFloodlightActivityGroupsListSortOrderEnum || (DfareportingFloodlightActivityGroupsListSortOrderEnum = {}));
export var DfareportingFloodlightActivityGroupsListTypeEnum;
(function (DfareportingFloodlightActivityGroupsListTypeEnum) {
    DfareportingFloodlightActivityGroupsListTypeEnum["Counter"] = "COUNTER";
    DfareportingFloodlightActivityGroupsListTypeEnum["Sale"] = "SALE";
})(DfareportingFloodlightActivityGroupsListTypeEnum || (DfareportingFloodlightActivityGroupsListTypeEnum = {}));
var DfareportingFloodlightActivityGroupsListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivityGroupsListQueryParams, _super);
    function DfareportingFloodlightActivityGroupsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsListQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=floodlightConfigurationId" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsListQueryParams.prototype, "floodlightConfigurationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingFloodlightActivityGroupsListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingFloodlightActivityGroupsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingFloodlightActivityGroupsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsListQueryParams.prototype, "searchString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsListQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingFloodlightActivityGroupsListQueryParams;
}(SpeakeasyBase));
export { DfareportingFloodlightActivityGroupsListQueryParams };
var DfareportingFloodlightActivityGroupsListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivityGroupsListSecurity, _super);
    function DfareportingFloodlightActivityGroupsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingFloodlightActivityGroupsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingFloodlightActivityGroupsListSecurity.prototype, "oauth2c", void 0);
    return DfareportingFloodlightActivityGroupsListSecurity;
}(SpeakeasyBase));
export { DfareportingFloodlightActivityGroupsListSecurity };
var DfareportingFloodlightActivityGroupsListRequest = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivityGroupsListRequest, _super);
    function DfareportingFloodlightActivityGroupsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingFloodlightActivityGroupsListPathParams)
    ], DfareportingFloodlightActivityGroupsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingFloodlightActivityGroupsListQueryParams)
    ], DfareportingFloodlightActivityGroupsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingFloodlightActivityGroupsListSecurity)
    ], DfareportingFloodlightActivityGroupsListRequest.prototype, "security", void 0);
    return DfareportingFloodlightActivityGroupsListRequest;
}(SpeakeasyBase));
export { DfareportingFloodlightActivityGroupsListRequest };
var DfareportingFloodlightActivityGroupsListResponse = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivityGroupsListResponse, _super);
    function DfareportingFloodlightActivityGroupsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivityGroupsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FloodlightActivityGroupsListResponse)
    ], DfareportingFloodlightActivityGroupsListResponse.prototype, "floodlightActivityGroupsListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingFloodlightActivityGroupsListResponse.prototype, "statusCode", void 0);
    return DfareportingFloodlightActivityGroupsListResponse;
}(SpeakeasyBase));
export { DfareportingFloodlightActivityGroupsListResponse };
