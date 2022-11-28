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
var DfareportingTargetableRemarketingListsListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingTargetableRemarketingListsListPathParams, _super);
    function DfareportingTargetableRemarketingListsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsListPathParams.prototype, "profileId", void 0);
    return DfareportingTargetableRemarketingListsListPathParams;
}(SpeakeasyBase));
export { DfareportingTargetableRemarketingListsListPathParams };
export var DfareportingTargetableRemarketingListsListSortFieldEnum;
(function (DfareportingTargetableRemarketingListsListSortFieldEnum) {
    DfareportingTargetableRemarketingListsListSortFieldEnum["Id"] = "ID";
    DfareportingTargetableRemarketingListsListSortFieldEnum["Name"] = "NAME";
})(DfareportingTargetableRemarketingListsListSortFieldEnum || (DfareportingTargetableRemarketingListsListSortFieldEnum = {}));
export var DfareportingTargetableRemarketingListsListSortOrderEnum;
(function (DfareportingTargetableRemarketingListsListSortOrderEnum) {
    DfareportingTargetableRemarketingListsListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingTargetableRemarketingListsListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingTargetableRemarketingListsListSortOrderEnum || (DfareportingTargetableRemarketingListsListSortOrderEnum = {}));
var DfareportingTargetableRemarketingListsListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingTargetableRemarketingListsListQueryParams, _super);
    function DfareportingTargetableRemarketingListsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=active" }),
        __metadata("design:type", Boolean)
    ], DfareportingTargetableRemarketingListsListQueryParams.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsListQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingTargetableRemarketingListsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingTargetableRemarketingListsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingTargetableRemarketingListsListQueryParams;
}(SpeakeasyBase));
export { DfareportingTargetableRemarketingListsListQueryParams };
var DfareportingTargetableRemarketingListsListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingTargetableRemarketingListsListSecurity, _super);
    function DfareportingTargetableRemarketingListsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingTargetableRemarketingListsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingTargetableRemarketingListsListSecurity.prototype, "oauth2c", void 0);
    return DfareportingTargetableRemarketingListsListSecurity;
}(SpeakeasyBase));
export { DfareportingTargetableRemarketingListsListSecurity };
var DfareportingTargetableRemarketingListsListRequest = /** @class */ (function (_super) {
    __extends(DfareportingTargetableRemarketingListsListRequest, _super);
    function DfareportingTargetableRemarketingListsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingTargetableRemarketingListsListPathParams)
    ], DfareportingTargetableRemarketingListsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingTargetableRemarketingListsListQueryParams)
    ], DfareportingTargetableRemarketingListsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingTargetableRemarketingListsListSecurity)
    ], DfareportingTargetableRemarketingListsListRequest.prototype, "security", void 0);
    return DfareportingTargetableRemarketingListsListRequest;
}(SpeakeasyBase));
export { DfareportingTargetableRemarketingListsListRequest };
var DfareportingTargetableRemarketingListsListResponse = /** @class */ (function (_super) {
    __extends(DfareportingTargetableRemarketingListsListResponse, _super);
    function DfareportingTargetableRemarketingListsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingTargetableRemarketingListsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingTargetableRemarketingListsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TargetableRemarketingListsListResponse)
    ], DfareportingTargetableRemarketingListsListResponse.prototype, "targetableRemarketingListsListResponse", void 0);
    return DfareportingTargetableRemarketingListsListResponse;
}(SpeakeasyBase));
export { DfareportingTargetableRemarketingListsListResponse };
