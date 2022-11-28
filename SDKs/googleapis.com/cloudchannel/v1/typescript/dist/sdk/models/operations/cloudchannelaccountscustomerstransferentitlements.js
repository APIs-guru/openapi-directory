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
var CloudchannelAccountsCustomersTransferEntitlementsPathParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersTransferEntitlementsPathParams, _super);
    function CloudchannelAccountsCustomersTransferEntitlementsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersTransferEntitlementsPathParams.prototype, "parent", void 0);
    return CloudchannelAccountsCustomersTransferEntitlementsPathParams;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersTransferEntitlementsPathParams };
var CloudchannelAccountsCustomersTransferEntitlementsQueryParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersTransferEntitlementsQueryParams, _super);
    function CloudchannelAccountsCustomersTransferEntitlementsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersTransferEntitlementsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersTransferEntitlementsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersTransferEntitlementsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersTransferEntitlementsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersTransferEntitlementsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersTransferEntitlementsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersTransferEntitlementsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudchannelAccountsCustomersTransferEntitlementsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersTransferEntitlementsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersTransferEntitlementsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersTransferEntitlementsQueryParams.prototype, "uploadProtocol", void 0);
    return CloudchannelAccountsCustomersTransferEntitlementsQueryParams;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersTransferEntitlementsQueryParams };
var CloudchannelAccountsCustomersTransferEntitlementsSecurity = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersTransferEntitlementsSecurity, _super);
    function CloudchannelAccountsCustomersTransferEntitlementsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudchannelAccountsCustomersTransferEntitlementsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudchannelAccountsCustomersTransferEntitlementsSecurity.prototype, "oauth2c", void 0);
    return CloudchannelAccountsCustomersTransferEntitlementsSecurity;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersTransferEntitlementsSecurity };
var CloudchannelAccountsCustomersTransferEntitlementsRequest = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersTransferEntitlementsRequest, _super);
    function CloudchannelAccountsCustomersTransferEntitlementsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsCustomersTransferEntitlementsPathParams)
    ], CloudchannelAccountsCustomersTransferEntitlementsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsCustomersTransferEntitlementsQueryParams)
    ], CloudchannelAccountsCustomersTransferEntitlementsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudChannelV1TransferEntitlementsRequestInput)
    ], CloudchannelAccountsCustomersTransferEntitlementsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsCustomersTransferEntitlementsSecurity)
    ], CloudchannelAccountsCustomersTransferEntitlementsRequest.prototype, "security", void 0);
    return CloudchannelAccountsCustomersTransferEntitlementsRequest;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersTransferEntitlementsRequest };
var CloudchannelAccountsCustomersTransferEntitlementsResponse = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersTransferEntitlementsResponse, _super);
    function CloudchannelAccountsCustomersTransferEntitlementsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersTransferEntitlementsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], CloudchannelAccountsCustomersTransferEntitlementsResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudchannelAccountsCustomersTransferEntitlementsResponse.prototype, "statusCode", void 0);
    return CloudchannelAccountsCustomersTransferEntitlementsResponse;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersTransferEntitlementsResponse };
