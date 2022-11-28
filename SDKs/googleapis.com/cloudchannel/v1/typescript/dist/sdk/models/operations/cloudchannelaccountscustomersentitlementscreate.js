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
var CloudchannelAccountsCustomersEntitlementsCreatePathParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersEntitlementsCreatePathParams, _super);
    function CloudchannelAccountsCustomersEntitlementsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsCreatePathParams.prototype, "parent", void 0);
    return CloudchannelAccountsCustomersEntitlementsCreatePathParams;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersEntitlementsCreatePathParams };
var CloudchannelAccountsCustomersEntitlementsCreateQueryParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersEntitlementsCreateQueryParams, _super);
    function CloudchannelAccountsCustomersEntitlementsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudchannelAccountsCustomersEntitlementsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CloudchannelAccountsCustomersEntitlementsCreateQueryParams;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersEntitlementsCreateQueryParams };
var CloudchannelAccountsCustomersEntitlementsCreateSecurity = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersEntitlementsCreateSecurity, _super);
    function CloudchannelAccountsCustomersEntitlementsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudchannelAccountsCustomersEntitlementsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudchannelAccountsCustomersEntitlementsCreateSecurity.prototype, "oauth2c", void 0);
    return CloudchannelAccountsCustomersEntitlementsCreateSecurity;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersEntitlementsCreateSecurity };
var CloudchannelAccountsCustomersEntitlementsCreateRequest = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersEntitlementsCreateRequest, _super);
    function CloudchannelAccountsCustomersEntitlementsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsCustomersEntitlementsCreatePathParams)
    ], CloudchannelAccountsCustomersEntitlementsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsCustomersEntitlementsCreateQueryParams)
    ], CloudchannelAccountsCustomersEntitlementsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudChannelV1CreateEntitlementRequestInput)
    ], CloudchannelAccountsCustomersEntitlementsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsCustomersEntitlementsCreateSecurity)
    ], CloudchannelAccountsCustomersEntitlementsCreateRequest.prototype, "security", void 0);
    return CloudchannelAccountsCustomersEntitlementsCreateRequest;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersEntitlementsCreateRequest };
var CloudchannelAccountsCustomersEntitlementsCreateResponse = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersEntitlementsCreateResponse, _super);
    function CloudchannelAccountsCustomersEntitlementsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], CloudchannelAccountsCustomersEntitlementsCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudchannelAccountsCustomersEntitlementsCreateResponse.prototype, "statusCode", void 0);
    return CloudchannelAccountsCustomersEntitlementsCreateResponse;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersEntitlementsCreateResponse };
