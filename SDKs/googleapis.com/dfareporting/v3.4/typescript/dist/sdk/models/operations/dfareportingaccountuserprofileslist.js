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
var DfareportingAccountUserProfilesListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingAccountUserProfilesListPathParams, _super);
    function DfareportingAccountUserProfilesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesListPathParams.prototype, "profileId", void 0);
    return DfareportingAccountUserProfilesListPathParams;
}(SpeakeasyBase));
export { DfareportingAccountUserProfilesListPathParams };
export var DfareportingAccountUserProfilesListSortFieldEnum;
(function (DfareportingAccountUserProfilesListSortFieldEnum) {
    DfareportingAccountUserProfilesListSortFieldEnum["Id"] = "ID";
    DfareportingAccountUserProfilesListSortFieldEnum["Name"] = "NAME";
})(DfareportingAccountUserProfilesListSortFieldEnum || (DfareportingAccountUserProfilesListSortFieldEnum = {}));
export var DfareportingAccountUserProfilesListSortOrderEnum;
(function (DfareportingAccountUserProfilesListSortOrderEnum) {
    DfareportingAccountUserProfilesListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingAccountUserProfilesListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingAccountUserProfilesListSortOrderEnum || (DfareportingAccountUserProfilesListSortOrderEnum = {}));
var DfareportingAccountUserProfilesListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingAccountUserProfilesListQueryParams, _super);
    function DfareportingAccountUserProfilesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=active" }),
        __metadata("design:type", Boolean)
    ], DfareportingAccountUserProfilesListQueryParams.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingAccountUserProfilesListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingAccountUserProfilesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingAccountUserProfilesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesListQueryParams.prototype, "searchString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subaccountId" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesListQueryParams.prototype, "subaccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userRoleId" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesListQueryParams.prototype, "userRoleId", void 0);
    return DfareportingAccountUserProfilesListQueryParams;
}(SpeakeasyBase));
export { DfareportingAccountUserProfilesListQueryParams };
var DfareportingAccountUserProfilesListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingAccountUserProfilesListSecurity, _super);
    function DfareportingAccountUserProfilesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingAccountUserProfilesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingAccountUserProfilesListSecurity.prototype, "oauth2c", void 0);
    return DfareportingAccountUserProfilesListSecurity;
}(SpeakeasyBase));
export { DfareportingAccountUserProfilesListSecurity };
var DfareportingAccountUserProfilesListRequest = /** @class */ (function (_super) {
    __extends(DfareportingAccountUserProfilesListRequest, _super);
    function DfareportingAccountUserProfilesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAccountUserProfilesListPathParams)
    ], DfareportingAccountUserProfilesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAccountUserProfilesListQueryParams)
    ], DfareportingAccountUserProfilesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAccountUserProfilesListSecurity)
    ], DfareportingAccountUserProfilesListRequest.prototype, "security", void 0);
    return DfareportingAccountUserProfilesListRequest;
}(SpeakeasyBase));
export { DfareportingAccountUserProfilesListRequest };
var DfareportingAccountUserProfilesListResponse = /** @class */ (function (_super) {
    __extends(DfareportingAccountUserProfilesListResponse, _super);
    function DfareportingAccountUserProfilesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccountUserProfilesListResponse)
    ], DfareportingAccountUserProfilesListResponse.prototype, "accountUserProfilesListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingAccountUserProfilesListResponse.prototype, "statusCode", void 0);
    return DfareportingAccountUserProfilesListResponse;
}(SpeakeasyBase));
export { DfareportingAccountUserProfilesListResponse };
