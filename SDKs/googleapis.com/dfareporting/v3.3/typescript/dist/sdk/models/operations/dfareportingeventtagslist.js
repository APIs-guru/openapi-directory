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
var DfareportingEventTagsListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingEventTagsListPathParams, _super);
    function DfareportingEventTagsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingEventTagsListPathParams.prototype, "profileId", void 0);
    return DfareportingEventTagsListPathParams;
}(SpeakeasyBase));
export { DfareportingEventTagsListPathParams };
export var DfareportingEventTagsListEventTagTypesEnum;
(function (DfareportingEventTagsListEventTagTypesEnum) {
    DfareportingEventTagsListEventTagTypesEnum["ImpressionImageEventTag"] = "IMPRESSION_IMAGE_EVENT_TAG";
    DfareportingEventTagsListEventTagTypesEnum["ImpressionJavascriptEventTag"] = "IMPRESSION_JAVASCRIPT_EVENT_TAG";
    DfareportingEventTagsListEventTagTypesEnum["ClickThroughEventTag"] = "CLICK_THROUGH_EVENT_TAG";
})(DfareportingEventTagsListEventTagTypesEnum || (DfareportingEventTagsListEventTagTypesEnum = {}));
export var DfareportingEventTagsListSortFieldEnum;
(function (DfareportingEventTagsListSortFieldEnum) {
    DfareportingEventTagsListSortFieldEnum["Id"] = "ID";
    DfareportingEventTagsListSortFieldEnum["Name"] = "NAME";
})(DfareportingEventTagsListSortFieldEnum || (DfareportingEventTagsListSortFieldEnum = {}));
export var DfareportingEventTagsListSortOrderEnum;
(function (DfareportingEventTagsListSortOrderEnum) {
    DfareportingEventTagsListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingEventTagsListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingEventTagsListSortOrderEnum || (DfareportingEventTagsListSortOrderEnum = {}));
var DfareportingEventTagsListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingEventTagsListQueryParams, _super);
    function DfareportingEventTagsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingEventTagsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingEventTagsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=adId" }),
        __metadata("design:type", String)
    ], DfareportingEventTagsListQueryParams.prototype, "adId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DfareportingEventTagsListQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingEventTagsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingEventTagsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=campaignId" }),
        __metadata("design:type", String)
    ], DfareportingEventTagsListQueryParams.prototype, "campaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=definitionsOnly" }),
        __metadata("design:type", Boolean)
    ], DfareportingEventTagsListQueryParams.prototype, "definitionsOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enabled" }),
        __metadata("design:type", Boolean)
    ], DfareportingEventTagsListQueryParams.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=eventTagTypes" }),
        __metadata("design:type", Array)
    ], DfareportingEventTagsListQueryParams.prototype, "eventTagTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingEventTagsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingEventTagsListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingEventTagsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingEventTagsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingEventTagsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingEventTagsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" }),
        __metadata("design:type", String)
    ], DfareportingEventTagsListQueryParams.prototype, "searchString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingEventTagsListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingEventTagsListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingEventTagsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingEventTagsListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingEventTagsListQueryParams;
}(SpeakeasyBase));
export { DfareportingEventTagsListQueryParams };
var DfareportingEventTagsListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingEventTagsListSecurity, _super);
    function DfareportingEventTagsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingEventTagsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingEventTagsListSecurity.prototype, "oauth2c", void 0);
    return DfareportingEventTagsListSecurity;
}(SpeakeasyBase));
export { DfareportingEventTagsListSecurity };
var DfareportingEventTagsListRequest = /** @class */ (function (_super) {
    __extends(DfareportingEventTagsListRequest, _super);
    function DfareportingEventTagsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingEventTagsListPathParams)
    ], DfareportingEventTagsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingEventTagsListQueryParams)
    ], DfareportingEventTagsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingEventTagsListSecurity)
    ], DfareportingEventTagsListRequest.prototype, "security", void 0);
    return DfareportingEventTagsListRequest;
}(SpeakeasyBase));
export { DfareportingEventTagsListRequest };
var DfareportingEventTagsListResponse = /** @class */ (function (_super) {
    __extends(DfareportingEventTagsListResponse, _super);
    function DfareportingEventTagsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingEventTagsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EventTagsListResponse)
    ], DfareportingEventTagsListResponse.prototype, "eventTagsListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingEventTagsListResponse.prototype, "statusCode", void 0);
    return DfareportingEventTagsListResponse;
}(SpeakeasyBase));
export { DfareportingEventTagsListResponse };
