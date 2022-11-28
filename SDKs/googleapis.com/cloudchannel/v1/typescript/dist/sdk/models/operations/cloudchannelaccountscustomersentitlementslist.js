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
var CloudchannelAccountsCustomersEntitlementsListPathParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersEntitlementsListPathParams, _super);
    function CloudchannelAccountsCustomersEntitlementsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsListPathParams.prototype, "parent", void 0);
    return CloudchannelAccountsCustomersEntitlementsListPathParams;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersEntitlementsListPathParams };
var CloudchannelAccountsCustomersEntitlementsListQueryParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersEntitlementsListQueryParams, _super);
    function CloudchannelAccountsCustomersEntitlementsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudchannelAccountsCustomersEntitlementsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudchannelAccountsCustomersEntitlementsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudchannelAccountsCustomersEntitlementsListQueryParams;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersEntitlementsListQueryParams };
var CloudchannelAccountsCustomersEntitlementsListSecurity = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersEntitlementsListSecurity, _super);
    function CloudchannelAccountsCustomersEntitlementsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudchannelAccountsCustomersEntitlementsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudchannelAccountsCustomersEntitlementsListSecurity.prototype, "oauth2c", void 0);
    return CloudchannelAccountsCustomersEntitlementsListSecurity;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersEntitlementsListSecurity };
var CloudchannelAccountsCustomersEntitlementsListRequest = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersEntitlementsListRequest, _super);
    function CloudchannelAccountsCustomersEntitlementsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsCustomersEntitlementsListPathParams)
    ], CloudchannelAccountsCustomersEntitlementsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsCustomersEntitlementsListQueryParams)
    ], CloudchannelAccountsCustomersEntitlementsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsCustomersEntitlementsListSecurity)
    ], CloudchannelAccountsCustomersEntitlementsListRequest.prototype, "security", void 0);
    return CloudchannelAccountsCustomersEntitlementsListRequest;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersEntitlementsListRequest };
var CloudchannelAccountsCustomersEntitlementsListResponse = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsCustomersEntitlementsListResponse, _super);
    function CloudchannelAccountsCustomersEntitlementsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudchannelAccountsCustomersEntitlementsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudChannelV1ListEntitlementsResponse)
    ], CloudchannelAccountsCustomersEntitlementsListResponse.prototype, "googleCloudChannelV1ListEntitlementsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudchannelAccountsCustomersEntitlementsListResponse.prototype, "statusCode", void 0);
    return CloudchannelAccountsCustomersEntitlementsListResponse;
}(SpeakeasyBase));
export { CloudchannelAccountsCustomersEntitlementsListResponse };
