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
var DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeletePathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeletePathParams, _super);
    function DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assignedInventorySourceId" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeletePathParams.prototype, "assignedInventorySourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=inventorySourceGroupId" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeletePathParams.prototype, "inventorySourceGroupId", void 0);
    return DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeletePathParams;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeletePathParams };
var DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteQueryParams, _super);
    function DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partnerId" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteQueryParams.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteQueryParams;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteQueryParams };
var DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteSecurity, _super);
    function DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteSecurity;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteSecurity };
var DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest, _super);
    function DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeletePathParams)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteQueryParams)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteSecurity)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest.prototype, "security", void 0);
    return DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest };
var DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse, _super);
    function DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse.prototype, "statusCode", void 0);
    return DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse };
