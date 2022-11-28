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
var DfareportingUserRolesListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingUserRolesListPathParams, _super);
    function DfareportingUserRolesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingUserRolesListPathParams.prototype, "profileId", void 0);
    return DfareportingUserRolesListPathParams;
}(SpeakeasyBase));
export { DfareportingUserRolesListPathParams };
export var DfareportingUserRolesListSortFieldEnum;
(function (DfareportingUserRolesListSortFieldEnum) {
    DfareportingUserRolesListSortFieldEnum["Id"] = "ID";
    DfareportingUserRolesListSortFieldEnum["Name"] = "NAME";
})(DfareportingUserRolesListSortFieldEnum || (DfareportingUserRolesListSortFieldEnum = {}));
export var DfareportingUserRolesListSortOrderEnum;
(function (DfareportingUserRolesListSortOrderEnum) {
    DfareportingUserRolesListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingUserRolesListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingUserRolesListSortOrderEnum || (DfareportingUserRolesListSortOrderEnum = {}));
var DfareportingUserRolesListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingUserRolesListQueryParams, _super);
    function DfareportingUserRolesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingUserRolesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingUserRolesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accountUserRoleOnly" }),
        __metadata("design:type", Boolean)
    ], DfareportingUserRolesListQueryParams.prototype, "accountUserRoleOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingUserRolesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingUserRolesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingUserRolesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingUserRolesListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingUserRolesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingUserRolesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingUserRolesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingUserRolesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingUserRolesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingUserRolesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" }),
        __metadata("design:type", String)
    ], DfareportingUserRolesListQueryParams.prototype, "searchString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingUserRolesListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingUserRolesListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subaccountId" }),
        __metadata("design:type", String)
    ], DfareportingUserRolesListQueryParams.prototype, "subaccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingUserRolesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingUserRolesListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingUserRolesListQueryParams;
}(SpeakeasyBase));
export { DfareportingUserRolesListQueryParams };
var DfareportingUserRolesListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingUserRolesListSecurity, _super);
    function DfareportingUserRolesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingUserRolesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingUserRolesListSecurity.prototype, "oauth2c", void 0);
    return DfareportingUserRolesListSecurity;
}(SpeakeasyBase));
export { DfareportingUserRolesListSecurity };
var DfareportingUserRolesListRequest = /** @class */ (function (_super) {
    __extends(DfareportingUserRolesListRequest, _super);
    function DfareportingUserRolesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingUserRolesListPathParams)
    ], DfareportingUserRolesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingUserRolesListQueryParams)
    ], DfareportingUserRolesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingUserRolesListSecurity)
    ], DfareportingUserRolesListRequest.prototype, "security", void 0);
    return DfareportingUserRolesListRequest;
}(SpeakeasyBase));
export { DfareportingUserRolesListRequest };
var DfareportingUserRolesListResponse = /** @class */ (function (_super) {
    __extends(DfareportingUserRolesListResponse, _super);
    function DfareportingUserRolesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingUserRolesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingUserRolesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserRolesListResponse)
    ], DfareportingUserRolesListResponse.prototype, "userRolesListResponse", void 0);
    return DfareportingUserRolesListResponse;
}(SpeakeasyBase));
export { DfareportingUserRolesListResponse };
