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
var DisplayvideoInventorySourcesGetPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourcesGetPathParams, _super);
    function DisplayvideoInventorySourcesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=inventorySourceId" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourcesGetPathParams.prototype, "inventorySourceId", void 0);
    return DisplayvideoInventorySourcesGetPathParams;
}(SpeakeasyBase));
export { DisplayvideoInventorySourcesGetPathParams };
var DisplayvideoInventorySourcesGetQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourcesGetQueryParams, _super);
    function DisplayvideoInventorySourcesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourcesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourcesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourcesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourcesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourcesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourcesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourcesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partnerId" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourcesGetQueryParams.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoInventorySourcesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourcesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourcesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourcesGetQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoInventorySourcesGetQueryParams;
}(SpeakeasyBase));
export { DisplayvideoInventorySourcesGetQueryParams };
var DisplayvideoInventorySourcesGetSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourcesGetSecurity, _super);
    function DisplayvideoInventorySourcesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoInventorySourcesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoInventorySourcesGetSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoInventorySourcesGetSecurity;
}(SpeakeasyBase));
export { DisplayvideoInventorySourcesGetSecurity };
var DisplayvideoInventorySourcesGetRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourcesGetRequest, _super);
    function DisplayvideoInventorySourcesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoInventorySourcesGetPathParams)
    ], DisplayvideoInventorySourcesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoInventorySourcesGetQueryParams)
    ], DisplayvideoInventorySourcesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoInventorySourcesGetSecurity)
    ], DisplayvideoInventorySourcesGetRequest.prototype, "security", void 0);
    return DisplayvideoInventorySourcesGetRequest;
}(SpeakeasyBase));
export { DisplayvideoInventorySourcesGetRequest };
var DisplayvideoInventorySourcesGetResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoInventorySourcesGetResponse, _super);
    function DisplayvideoInventorySourcesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoInventorySourcesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InventorySource)
    ], DisplayvideoInventorySourcesGetResponse.prototype, "inventorySource", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoInventorySourcesGetResponse.prototype, "statusCode", void 0);
    return DisplayvideoInventorySourcesGetResponse;
}(SpeakeasyBase));
export { DisplayvideoInventorySourcesGetResponse };
