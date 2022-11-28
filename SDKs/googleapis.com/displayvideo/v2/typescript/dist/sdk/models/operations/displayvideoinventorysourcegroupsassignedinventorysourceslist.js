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
var DisplayvideoInventorySourceGroupsAssignedInventorySourcesListPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsAssignedInventorySourcesListPathParams, _super);
    function DisplayvideoInventorySourceGroupsAssignedInventorySourcesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=inventorySourceGroupId" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListPathParams.prototype, "inventorySourceGroupId", void 0);
    return DisplayvideoInventorySourceGroupsAssignedInventorySourcesListPathParams;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsAssignedInventorySourcesListPathParams };
var DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams, _super);
    function DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partnerId" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams };
var DisplayvideoInventorySourceGroupsAssignedInventorySourcesListSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsAssignedInventorySourcesListSecurity, _super);
    function DisplayvideoInventorySourceGroupsAssignedInventorySourcesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoInventorySourceGroupsAssignedInventorySourcesListSecurity;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsAssignedInventorySourcesListSecurity };
var DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest, _super);
    function DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoInventorySourceGroupsAssignedInventorySourcesListPathParams)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoInventorySourceGroupsAssignedInventorySourcesListSecurity)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest.prototype, "security", void 0);
    return DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest };
var DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse, _super);
    function DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAssignedInventorySourcesResponse)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse.prototype, "listAssignedInventorySourcesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse.prototype, "statusCode", void 0);
    return DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse };
