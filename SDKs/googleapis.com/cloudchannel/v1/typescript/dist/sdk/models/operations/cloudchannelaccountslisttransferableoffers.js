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
var CloudchannelAccountsListTransferableOffersPathParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsListTransferableOffersPathParams, _super);
    function CloudchannelAccountsListTransferableOffersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListTransferableOffersPathParams.prototype, "parent", void 0);
    return CloudchannelAccountsListTransferableOffersPathParams;
}(SpeakeasyBase));
export { CloudchannelAccountsListTransferableOffersPathParams };
var CloudchannelAccountsListTransferableOffersQueryParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsListTransferableOffersQueryParams, _super);
    function CloudchannelAccountsListTransferableOffersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListTransferableOffersQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListTransferableOffersQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListTransferableOffersQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListTransferableOffersQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListTransferableOffersQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListTransferableOffersQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListTransferableOffersQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudchannelAccountsListTransferableOffersQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListTransferableOffersQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListTransferableOffersQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsListTransferableOffersQueryParams.prototype, "uploadProtocol", void 0);
    return CloudchannelAccountsListTransferableOffersQueryParams;
}(SpeakeasyBase));
export { CloudchannelAccountsListTransferableOffersQueryParams };
var CloudchannelAccountsListTransferableOffersSecurity = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsListTransferableOffersSecurity, _super);
    function CloudchannelAccountsListTransferableOffersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudchannelAccountsListTransferableOffersSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudchannelAccountsListTransferableOffersSecurity.prototype, "oauth2c", void 0);
    return CloudchannelAccountsListTransferableOffersSecurity;
}(SpeakeasyBase));
export { CloudchannelAccountsListTransferableOffersSecurity };
var CloudchannelAccountsListTransferableOffersRequest = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsListTransferableOffersRequest, _super);
    function CloudchannelAccountsListTransferableOffersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsListTransferableOffersPathParams)
    ], CloudchannelAccountsListTransferableOffersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsListTransferableOffersQueryParams)
    ], CloudchannelAccountsListTransferableOffersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudChannelV1ListTransferableOffersRequest)
    ], CloudchannelAccountsListTransferableOffersRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsListTransferableOffersSecurity)
    ], CloudchannelAccountsListTransferableOffersRequest.prototype, "security", void 0);
    return CloudchannelAccountsListTransferableOffersRequest;
}(SpeakeasyBase));
export { CloudchannelAccountsListTransferableOffersRequest };
var CloudchannelAccountsListTransferableOffersResponse = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsListTransferableOffersResponse, _super);
    function CloudchannelAccountsListTransferableOffersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudchannelAccountsListTransferableOffersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudChannelV1ListTransferableOffersResponse)
    ], CloudchannelAccountsListTransferableOffersResponse.prototype, "googleCloudChannelV1ListTransferableOffersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudchannelAccountsListTransferableOffersResponse.prototype, "statusCode", void 0);
    return CloudchannelAccountsListTransferableOffersResponse;
}(SpeakeasyBase));
export { CloudchannelAccountsListTransferableOffersResponse };
