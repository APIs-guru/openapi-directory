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
var DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditPathParams, _super);
    function DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=inventorySourceGroupId" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditPathParams.prototype, "inventorySourceGroupId", void 0);
    return DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditPathParams;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditPathParams };
var DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditQueryParams, _super);
    function DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditQueryParams;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditQueryParams };
var DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditSecurity, _super);
    function DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditSecurity;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditSecurity };
var DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest, _super);
    function DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditPathParams)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditQueryParams)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BulkEditAssignedInventorySourcesRequestInput)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditSecurity)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest.prototype, "security", void 0);
    return DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest };
var DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse, _super);
    function DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BulkEditAssignedInventorySourcesResponse)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse.prototype, "bulkEditAssignedInventorySourcesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse.prototype, "statusCode", void 0);
    return DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse };
