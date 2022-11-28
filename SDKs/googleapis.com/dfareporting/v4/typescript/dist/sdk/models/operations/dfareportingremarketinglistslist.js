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
var DfareportingRemarketingListsListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingRemarketingListsListPathParams, _super);
    function DfareportingRemarketingListsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListsListPathParams.prototype, "profileId", void 0);
    return DfareportingRemarketingListsListPathParams;
}(SpeakeasyBase));
export { DfareportingRemarketingListsListPathParams };
export var DfareportingRemarketingListsListSortFieldEnum;
(function (DfareportingRemarketingListsListSortFieldEnum) {
    DfareportingRemarketingListsListSortFieldEnum["Id"] = "ID";
    DfareportingRemarketingListsListSortFieldEnum["Name"] = "NAME";
})(DfareportingRemarketingListsListSortFieldEnum || (DfareportingRemarketingListsListSortFieldEnum = {}));
export var DfareportingRemarketingListsListSortOrderEnum;
(function (DfareportingRemarketingListsListSortOrderEnum) {
    DfareportingRemarketingListsListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingRemarketingListsListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingRemarketingListsListSortOrderEnum || (DfareportingRemarketingListsListSortOrderEnum = {}));
var DfareportingRemarketingListsListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingRemarketingListsListQueryParams, _super);
    function DfareportingRemarketingListsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=active" }),
        __metadata("design:type", Boolean)
    ], DfareportingRemarketingListsListQueryParams.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListsListQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=floodlightActivityId" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListsListQueryParams.prototype, "floodlightActivityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingRemarketingListsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListsListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingRemarketingListsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListsListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListsListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingRemarketingListsListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingRemarketingListsListQueryParams;
}(SpeakeasyBase));
export { DfareportingRemarketingListsListQueryParams };
var DfareportingRemarketingListsListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingRemarketingListsListSecurity, _super);
    function DfareportingRemarketingListsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingRemarketingListsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingRemarketingListsListSecurity.prototype, "oauth2c", void 0);
    return DfareportingRemarketingListsListSecurity;
}(SpeakeasyBase));
export { DfareportingRemarketingListsListSecurity };
var DfareportingRemarketingListsListRequest = /** @class */ (function (_super) {
    __extends(DfareportingRemarketingListsListRequest, _super);
    function DfareportingRemarketingListsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingRemarketingListsListPathParams)
    ], DfareportingRemarketingListsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingRemarketingListsListQueryParams)
    ], DfareportingRemarketingListsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingRemarketingListsListSecurity)
    ], DfareportingRemarketingListsListRequest.prototype, "security", void 0);
    return DfareportingRemarketingListsListRequest;
}(SpeakeasyBase));
export { DfareportingRemarketingListsListRequest };
var DfareportingRemarketingListsListResponse = /** @class */ (function (_super) {
    __extends(DfareportingRemarketingListsListResponse, _super);
    function DfareportingRemarketingListsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingRemarketingListsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RemarketingListsListResponse)
    ], DfareportingRemarketingListsListResponse.prototype, "remarketingListsListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingRemarketingListsListResponse.prototype, "statusCode", void 0);
    return DfareportingRemarketingListsListResponse;
}(SpeakeasyBase));
export { DfareportingRemarketingListsListResponse };
