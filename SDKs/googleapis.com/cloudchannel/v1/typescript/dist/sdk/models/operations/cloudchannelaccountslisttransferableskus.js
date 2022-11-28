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
var CloudchannelAccountsListTransferableSkusPathParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsListTransferableSkusPathParams, _super);
    function CloudchannelAccountsListTransferableSkusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListTransferableSkusPathParams.prototype, "parent", void 0);
    return CloudchannelAccountsListTransferableSkusPathParams;
}(SpeakeasyBase));
export { CloudchannelAccountsListTransferableSkusPathParams };
var CloudchannelAccountsListTransferableSkusQueryParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsListTransferableSkusQueryParams, _super);
    function CloudchannelAccountsListTransferableSkusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListTransferableSkusQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListTransferableSkusQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListTransferableSkusQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListTransferableSkusQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListTransferableSkusQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListTransferableSkusQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListTransferableSkusQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudchannelAccountsListTransferableSkusQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListTransferableSkusQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListTransferableSkusQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListTransferableSkusQueryParams.prototype, "uploadProtocol", void 0);
    return CloudchannelAccountsListTransferableSkusQueryParams;
}(SpeakeasyBase));
export { CloudchannelAccountsListTransferableSkusQueryParams };
var CloudchannelAccountsListTransferableSkusSecurity = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsListTransferableSkusSecurity, _super);
    function CloudchannelAccountsListTransferableSkusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudchannelAccountsListTransferableSkusSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudchannelAccountsListTransferableSkusSecurity.prototype, "oauth2c", void 0);
    return CloudchannelAccountsListTransferableSkusSecurity;
}(SpeakeasyBase));
export { CloudchannelAccountsListTransferableSkusSecurity };
var CloudchannelAccountsListTransferableSkusRequest = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsListTransferableSkusRequest, _super);
    function CloudchannelAccountsListTransferableSkusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsListTransferableSkusPathParams)
    ], CloudchannelAccountsListTransferableSkusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsListTransferableSkusQueryParams)
    ], CloudchannelAccountsListTransferableSkusRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudChannelV1ListTransferableSkusRequest)
    ], CloudchannelAccountsListTransferableSkusRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsListTransferableSkusSecurity)
    ], CloudchannelAccountsListTransferableSkusRequest.prototype, "security", void 0);
    return CloudchannelAccountsListTransferableSkusRequest;
}(SpeakeasyBase));
export { CloudchannelAccountsListTransferableSkusRequest };
var CloudchannelAccountsListTransferableSkusResponse = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsListTransferableSkusResponse, _super);
    function CloudchannelAccountsListTransferableSkusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudchannelAccountsListTransferableSkusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudChannelV1ListTransferableSkusResponse)
    ], CloudchannelAccountsListTransferableSkusResponse.prototype, "googleCloudChannelV1ListTransferableSkusResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudchannelAccountsListTransferableSkusResponse.prototype, "statusCode", void 0);
    return CloudchannelAccountsListTransferableSkusResponse;
}(SpeakeasyBase));
export { CloudchannelAccountsListTransferableSkusResponse };
