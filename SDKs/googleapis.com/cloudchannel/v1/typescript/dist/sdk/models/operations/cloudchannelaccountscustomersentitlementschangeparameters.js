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
var CloudchannelAccountsCustomersEntitlementsChangeParametersPathParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersEntitlementsChangeParametersPathParams, _super);
    function CloudchannelAccountsCustomersEntitlementsChangeParametersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsChangeParametersPathParams.prototype, "name", void 0);
    return CloudchannelAccountsCustomersEntitlementsChangeParametersPathParams;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersEntitlementsChangeParametersPathParams };
var CloudchannelAccountsCustomersEntitlementsChangeParametersQueryParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersEntitlementsChangeParametersQueryParams, _super);
    function CloudchannelAccountsCustomersEntitlementsChangeParametersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsChangeParametersQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsChangeParametersQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsChangeParametersQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsChangeParametersQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsChangeParametersQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsChangeParametersQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsChangeParametersQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudchannelAccountsCustomersEntitlementsChangeParametersQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsChangeParametersQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsChangeParametersQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsChangeParametersQueryParams.prototype, "uploadProtocol", void 0);
    return CloudchannelAccountsCustomersEntitlementsChangeParametersQueryParams;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersEntitlementsChangeParametersQueryParams };
var CloudchannelAccountsCustomersEntitlementsChangeParametersSecurity = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersEntitlementsChangeParametersSecurity, _super);
    function CloudchannelAccountsCustomersEntitlementsChangeParametersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudchannelAccountsCustomersEntitlementsChangeParametersSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudchannelAccountsCustomersEntitlementsChangeParametersSecurity.prototype, "oauth2c", void 0);
    return CloudchannelAccountsCustomersEntitlementsChangeParametersSecurity;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersEntitlementsChangeParametersSecurity };
var CloudchannelAccountsCustomersEntitlementsChangeParametersRequest = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersEntitlementsChangeParametersRequest, _super);
    function CloudchannelAccountsCustomersEntitlementsChangeParametersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsCustomersEntitlementsChangeParametersPathParams)
    ], CloudchannelAccountsCustomersEntitlementsChangeParametersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsCustomersEntitlementsChangeParametersQueryParams)
    ], CloudchannelAccountsCustomersEntitlementsChangeParametersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudChannelV1ChangeParametersRequestInput)
    ], CloudchannelAccountsCustomersEntitlementsChangeParametersRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsCustomersEntitlementsChangeParametersSecurity)
    ], CloudchannelAccountsCustomersEntitlementsChangeParametersRequest.prototype, "security", void 0);
    return CloudchannelAccountsCustomersEntitlementsChangeParametersRequest;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersEntitlementsChangeParametersRequest };
var CloudchannelAccountsCustomersEntitlementsChangeParametersResponse = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersEntitlementsChangeParametersResponse, _super);
    function CloudchannelAccountsCustomersEntitlementsChangeParametersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsChangeParametersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], CloudchannelAccountsCustomersEntitlementsChangeParametersResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudchannelAccountsCustomersEntitlementsChangeParametersResponse.prototype, "statusCode", void 0);
    return CloudchannelAccountsCustomersEntitlementsChangeParametersResponse;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersEntitlementsChangeParametersResponse };
