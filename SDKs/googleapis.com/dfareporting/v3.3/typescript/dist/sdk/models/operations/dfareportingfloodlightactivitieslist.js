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
var DfareportingFloodlightActivitiesListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivitiesListPathParams, _super);
    function DfareportingFloodlightActivitiesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesListPathParams.prototype, "profileId", void 0);
    return DfareportingFloodlightActivitiesListPathParams;
}(SpeakeasyBase));
export { DfareportingFloodlightActivitiesListPathParams };
export var DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum;
(function (DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum) {
    DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum["Counter"] = "COUNTER";
    DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum["Sale"] = "SALE";
})(DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum || (DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum = {}));
export var DfareportingFloodlightActivitiesListSortFieldEnum;
(function (DfareportingFloodlightActivitiesListSortFieldEnum) {
    DfareportingFloodlightActivitiesListSortFieldEnum["Id"] = "ID";
    DfareportingFloodlightActivitiesListSortFieldEnum["Name"] = "NAME";
})(DfareportingFloodlightActivitiesListSortFieldEnum || (DfareportingFloodlightActivitiesListSortFieldEnum = {}));
export var DfareportingFloodlightActivitiesListSortOrderEnum;
(function (DfareportingFloodlightActivitiesListSortOrderEnum) {
    DfareportingFloodlightActivitiesListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingFloodlightActivitiesListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingFloodlightActivitiesListSortOrderEnum || (DfareportingFloodlightActivitiesListSortOrderEnum = {}));
var DfareportingFloodlightActivitiesListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivitiesListQueryParams, _super);
    function DfareportingFloodlightActivitiesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesListQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=floodlightActivityGroupIds" }),
        __metadata("design:type", Array)
    ], DfareportingFloodlightActivitiesListQueryParams.prototype, "floodlightActivityGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=floodlightActivityGroupName" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesListQueryParams.prototype, "floodlightActivityGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=floodlightActivityGroupTagString" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesListQueryParams.prototype, "floodlightActivityGroupTagString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=floodlightActivityGroupType" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesListQueryParams.prototype, "floodlightActivityGroupType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=floodlightConfigurationId" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesListQueryParams.prototype, "floodlightConfigurationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingFloodlightActivitiesListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingFloodlightActivitiesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingFloodlightActivitiesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesListQueryParams.prototype, "searchString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagString" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesListQueryParams.prototype, "tagString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingFloodlightActivitiesListQueryParams;
}(SpeakeasyBase));
export { DfareportingFloodlightActivitiesListQueryParams };
var DfareportingFloodlightActivitiesListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivitiesListSecurity, _super);
    function DfareportingFloodlightActivitiesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingFloodlightActivitiesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingFloodlightActivitiesListSecurity.prototype, "oauth2c", void 0);
    return DfareportingFloodlightActivitiesListSecurity;
}(SpeakeasyBase));
export { DfareportingFloodlightActivitiesListSecurity };
var DfareportingFloodlightActivitiesListRequest = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivitiesListRequest, _super);
    function DfareportingFloodlightActivitiesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingFloodlightActivitiesListPathParams)
    ], DfareportingFloodlightActivitiesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingFloodlightActivitiesListQueryParams)
    ], DfareportingFloodlightActivitiesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingFloodlightActivitiesListSecurity)
    ], DfareportingFloodlightActivitiesListRequest.prototype, "security", void 0);
    return DfareportingFloodlightActivitiesListRequest;
}(SpeakeasyBase));
export { DfareportingFloodlightActivitiesListRequest };
var DfareportingFloodlightActivitiesListResponse = /** @class */ (function (_super) {
    __extends(DfareportingFloodlightActivitiesListResponse, _super);
    function DfareportingFloodlightActivitiesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingFloodlightActivitiesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FloodlightActivitiesListResponse)
    ], DfareportingFloodlightActivitiesListResponse.prototype, "floodlightActivitiesListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingFloodlightActivitiesListResponse.prototype, "statusCode", void 0);
    return DfareportingFloodlightActivitiesListResponse;
}(SpeakeasyBase));
export { DfareportingFloodlightActivitiesListResponse };
