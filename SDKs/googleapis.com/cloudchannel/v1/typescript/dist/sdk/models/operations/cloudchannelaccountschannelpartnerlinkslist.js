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
var CloudchannelAccountsChannelPartnerLinksListPathParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsChannelPartnerLinksListPathParams, _super);
    function CloudchannelAccountsChannelPartnerLinksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListPathParams.prototype, "parent", void 0);
    return CloudchannelAccountsChannelPartnerLinksListPathParams;
}(SpeakeasyBase));
export { CloudchannelAccountsChannelPartnerLinksListPathParams };
export var CloudchannelAccountsChannelPartnerLinksListViewEnum;
(function (CloudchannelAccountsChannelPartnerLinksListViewEnum) {
    CloudchannelAccountsChannelPartnerLinksListViewEnum["Unspecified"] = "UNSPECIFIED";
    CloudchannelAccountsChannelPartnerLinksListViewEnum["Basic"] = "BASIC";
    CloudchannelAccountsChannelPartnerLinksListViewEnum["Full"] = "FULL";
})(CloudchannelAccountsChannelPartnerLinksListViewEnum || (CloudchannelAccountsChannelPartnerLinksListViewEnum = {}));
var CloudchannelAccountsChannelPartnerLinksListQueryParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsChannelPartnerLinksListQueryParams, _super);
    function CloudchannelAccountsChannelPartnerLinksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListQueryParams.prototype, "view", void 0);
    return CloudchannelAccountsChannelPartnerLinksListQueryParams;
}(SpeakeasyBase));
export { CloudchannelAccountsChannelPartnerLinksListQueryParams };
var CloudchannelAccountsChannelPartnerLinksListSecurity = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsChannelPartnerLinksListSecurity, _super);
    function CloudchannelAccountsChannelPartnerLinksListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudchannelAccountsChannelPartnerLinksListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudchannelAccountsChannelPartnerLinksListSecurity.prototype, "oauth2c", void 0);
    return CloudchannelAccountsChannelPartnerLinksListSecurity;
}(SpeakeasyBase));
export { CloudchannelAccountsChannelPartnerLinksListSecurity };
var CloudchannelAccountsChannelPartnerLinksListRequest = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsChannelPartnerLinksListRequest, _super);
    function CloudchannelAccountsChannelPartnerLinksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsChannelPartnerLinksListPathParams)
    ], CloudchannelAccountsChannelPartnerLinksListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsChannelPartnerLinksListQueryParams)
    ], CloudchannelAccountsChannelPartnerLinksListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsChannelPartnerLinksListSecurity)
    ], CloudchannelAccountsChannelPartnerLinksListRequest.prototype, "security", void 0);
    return CloudchannelAccountsChannelPartnerLinksListRequest;
}(SpeakeasyBase));
export { CloudchannelAccountsChannelPartnerLinksListRequest };
var CloudchannelAccountsChannelPartnerLinksListResponse = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsChannelPartnerLinksListResponse, _super);
    function CloudchannelAccountsChannelPartnerLinksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudchannelAccountsChannelPartnerLinksListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudChannelV1ListChannelPartnerLinksResponse)
    ], CloudchannelAccountsChannelPartnerLinksListResponse.prototype, "googleCloudChannelV1ListChannelPartnerLinksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudchannelAccountsChannelPartnerLinksListResponse.prototype, "statusCode", void 0);
    return CloudchannelAccountsChannelPartnerLinksListResponse;
}(SpeakeasyBase));
export { CloudchannelAccountsChannelPartnerLinksListResponse };
