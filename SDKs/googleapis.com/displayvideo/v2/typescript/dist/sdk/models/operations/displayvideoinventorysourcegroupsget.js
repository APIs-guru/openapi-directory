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
var DisplayvideoInventorySourceGroupsGetPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsGetPathParams, _super);
    function DisplayvideoInventorySourceGroupsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=inventorySourceGroupId" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsGetPathParams.prototype, "inventorySourceGroupId", void 0);
    return DisplayvideoInventorySourceGroupsGetPathParams;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsGetPathParams };
var DisplayvideoInventorySourceGroupsGetQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsGetQueryParams, _super);
    function DisplayvideoInventorySourceGroupsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsGetQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partnerId" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsGetQueryParams.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoInventorySourceGroupsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoInventorySourceGroupsGetQueryParams;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsGetQueryParams };
var DisplayvideoInventorySourceGroupsGetSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsGetSecurity, _super);
    function DisplayvideoInventorySourceGroupsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoInventorySourceGroupsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoInventorySourceGroupsGetSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoInventorySourceGroupsGetSecurity;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsGetSecurity };
var DisplayvideoInventorySourceGroupsGetRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsGetRequest, _super);
    function DisplayvideoInventorySourceGroupsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoInventorySourceGroupsGetPathParams)
    ], DisplayvideoInventorySourceGroupsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoInventorySourceGroupsGetQueryParams)
    ], DisplayvideoInventorySourceGroupsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoInventorySourceGroupsGetSecurity)
    ], DisplayvideoInventorySourceGroupsGetRequest.prototype, "security", void 0);
    return DisplayvideoInventorySourceGroupsGetRequest;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsGetRequest };
var DisplayvideoInventorySourceGroupsGetResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourceGroupsGetResponse, _super);
    function DisplayvideoInventorySourceGroupsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourceGroupsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InventorySourceGroup)
    ], DisplayvideoInventorySourceGroupsGetResponse.prototype, "inventorySourceGroup", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoInventorySourceGroupsGetResponse.prototype, "statusCode", void 0);
    return DisplayvideoInventorySourceGroupsGetResponse;
}(SpeakeasyBase));
export { DisplayvideoInventorySourceGroupsGetResponse };
