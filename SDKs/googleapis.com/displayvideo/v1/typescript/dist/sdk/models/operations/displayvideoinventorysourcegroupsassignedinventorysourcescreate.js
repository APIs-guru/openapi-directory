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
var DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreatePathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreatePathParams, _super);
    function DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=inventorySourceGroupId" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreatePathParams.prototype, "inventorySourceGroupId", void 0);
    return DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreatePathParams;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreatePathParams };
var DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateQueryParams, _super);
    function DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partnerId" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateQueryParams.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateQueryParams;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateQueryParams };
var DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateSecurity, _super);
    function DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateSecurity;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateSecurity };
var DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest, _super);
    function DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreatePathParams)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateQueryParams)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AssignedInventorySourceInput)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateSecurity)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest.prototype, "security", void 0);
    return DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest };
var DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse, _super);
    function DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AssignedInventorySource)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse.prototype, "assignedInventorySource", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse.prototype, "statusCode", void 0);
    return DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse };
