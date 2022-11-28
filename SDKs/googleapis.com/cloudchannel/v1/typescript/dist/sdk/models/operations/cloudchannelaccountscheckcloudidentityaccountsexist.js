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
var CloudchannelAccountsCheckCloudIdentityAccountsExistPathParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCheckCloudIdentityAccountsExistPathParams, _super);
    function CloudchannelAccountsCheckCloudIdentityAccountsExistPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCheckCloudIdentityAccountsExistPathParams.prototype, "parent", void 0);
    return CloudchannelAccountsCheckCloudIdentityAccountsExistPathParams;
}(SpeakeasyBase));
export { CloudchannelAccountsCheckCloudIdentityAccountsExistPathParams };
var CloudchannelAccountsCheckCloudIdentityAccountsExistQueryParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCheckCloudIdentityAccountsExistQueryParams, _super);
    function CloudchannelAccountsCheckCloudIdentityAccountsExistQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCheckCloudIdentityAccountsExistQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCheckCloudIdentityAccountsExistQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCheckCloudIdentityAccountsExistQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCheckCloudIdentityAccountsExistQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCheckCloudIdentityAccountsExistQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCheckCloudIdentityAccountsExistQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCheckCloudIdentityAccountsExistQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudchannelAccountsCheckCloudIdentityAccountsExistQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCheckCloudIdentityAccountsExistQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCheckCloudIdentityAccountsExistQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCheckCloudIdentityAccountsExistQueryParams.prototype, "uploadProtocol", void 0);
    return CloudchannelAccountsCheckCloudIdentityAccountsExistQueryParams;
}(SpeakeasyBase));
export { CloudchannelAccountsCheckCloudIdentityAccountsExistQueryParams };
var CloudchannelAccountsCheckCloudIdentityAccountsExistSecurity = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCheckCloudIdentityAccountsExistSecurity, _super);
    function CloudchannelAccountsCheckCloudIdentityAccountsExistSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudchannelAccountsCheckCloudIdentityAccountsExistSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudchannelAccountsCheckCloudIdentityAccountsExistSecurity.prototype, "oauth2c", void 0);
    return CloudchannelAccountsCheckCloudIdentityAccountsExistSecurity;
}(SpeakeasyBase));
export { CloudchannelAccountsCheckCloudIdentityAccountsExistSecurity };
var CloudchannelAccountsCheckCloudIdentityAccountsExistRequest = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCheckCloudIdentityAccountsExistRequest, _super);
    function CloudchannelAccountsCheckCloudIdentityAccountsExistRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsCheckCloudIdentityAccountsExistPathParams)
    ], CloudchannelAccountsCheckCloudIdentityAccountsExistRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsCheckCloudIdentityAccountsExistQueryParams)
    ], CloudchannelAccountsCheckCloudIdentityAccountsExistRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest)
    ], CloudchannelAccountsCheckCloudIdentityAccountsExistRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsCheckCloudIdentityAccountsExistSecurity)
    ], CloudchannelAccountsCheckCloudIdentityAccountsExistRequest.prototype, "security", void 0);
    return CloudchannelAccountsCheckCloudIdentityAccountsExistRequest;
}(SpeakeasyBase));
export { CloudchannelAccountsCheckCloudIdentityAccountsExistRequest };
var CloudchannelAccountsCheckCloudIdentityAccountsExistResponse = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCheckCloudIdentityAccountsExistResponse, _super);
    function CloudchannelAccountsCheckCloudIdentityAccountsExistResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudchannelAccountsCheckCloudIdentityAccountsExistResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse)
    ], CloudchannelAccountsCheckCloudIdentityAccountsExistResponse.prototype, "googleCloudChannelV1CheckCloudIdentityAccountsExistResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudchannelAccountsCheckCloudIdentityAccountsExistResponse.prototype, "statusCode", void 0);
    return CloudchannelAccountsCheckCloudIdentityAccountsExistResponse;
}(SpeakeasyBase));
export { CloudchannelAccountsCheckCloudIdentityAccountsExistResponse };
