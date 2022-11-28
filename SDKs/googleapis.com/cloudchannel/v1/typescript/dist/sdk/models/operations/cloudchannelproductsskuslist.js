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
var CloudchannelProductsSkusListPathParams = /** @class */ (function (_super) {
    __extends(CloudchannelProductsSkusListPathParams, _super);
    function CloudchannelProductsSkusListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudchannelProductsSkusListPathParams.prototype, "parent", void 0);
    return CloudchannelProductsSkusListPathParams;
}(SpeakeasyBase));
export { CloudchannelProductsSkusListPathParams };
var CloudchannelProductsSkusListQueryParams = /** @class */ (function (_super) {
    __extends(CloudchannelProductsSkusListQueryParams, _super);
    function CloudchannelProductsSkusListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudchannelProductsSkusListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudchannelProductsSkusListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=account" }),
        __metadata("design:type", String)
    ], CloudchannelProductsSkusListQueryParams.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudchannelProductsSkusListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudchannelProductsSkusListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudchannelProductsSkusListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudchannelProductsSkusListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" }),
        __metadata("design:type", String)
    ], CloudchannelProductsSkusListQueryParams.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudchannelProductsSkusListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudchannelProductsSkusListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudchannelProductsSkusListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudchannelProductsSkusListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudchannelProductsSkusListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudchannelProductsSkusListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudchannelProductsSkusListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudchannelProductsSkusListQueryParams;
}(SpeakeasyBase));
export { CloudchannelProductsSkusListQueryParams };
var CloudchannelProductsSkusListSecurity = /** @class */ (function (_super) {
    __extends(CloudchannelProductsSkusListSecurity, _super);
    function CloudchannelProductsSkusListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudchannelProductsSkusListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudchannelProductsSkusListSecurity.prototype, "oauth2c", void 0);
    return CloudchannelProductsSkusListSecurity;
}(SpeakeasyBase));
export { CloudchannelProductsSkusListSecurity };
var CloudchannelProductsSkusListRequest = /** @class */ (function (_super) {
    __extends(CloudchannelProductsSkusListRequest, _super);
    function CloudchannelProductsSkusListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelProductsSkusListPathParams)
    ], CloudchannelProductsSkusListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelProductsSkusListQueryParams)
    ], CloudchannelProductsSkusListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelProductsSkusListSecurity)
    ], CloudchannelProductsSkusListRequest.prototype, "security", void 0);
    return CloudchannelProductsSkusListRequest;
}(SpeakeasyBase));
export { CloudchannelProductsSkusListRequest };
var CloudchannelProductsSkusListResponse = /** @class */ (function (_super) {
    __extends(CloudchannelProductsSkusListResponse, _super);
    function CloudchannelProductsSkusListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudchannelProductsSkusListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudChannelV1ListSkusResponse)
    ], CloudchannelProductsSkusListResponse.prototype, "googleCloudChannelV1ListSkusResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudchannelProductsSkusListResponse.prototype, "statusCode", void 0);
    return CloudchannelProductsSkusListResponse;
}(SpeakeasyBase));
export { CloudchannelProductsSkusListResponse };
