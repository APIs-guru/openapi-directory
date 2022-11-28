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
var IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListPathParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListPathParams, _super);
    function IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListPathParams.prototype, "parent", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListPathParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListPathParams };
var IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListQueryParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListQueryParams, _super);
    function IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readMask" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListQueryParams.prototype, "readMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListQueryParams.prototype, "uploadProtocol", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListQueryParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListQueryParams };
var IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListSecurity = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListSecurity, _super);
    function IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListSecurity.prototype, "oauth2c", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListSecurity;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListSecurity };
var IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListRequest = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListRequest, _super);
    function IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListPathParams)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListQueryParams)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListSecurity)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListRequest.prototype, "security", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListRequest;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListRequest };
var IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListResponse = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListResponse, _super);
    function IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListResponse.prototype, "googleCloudIntegrationsV1alphaListSfdcChannelsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListResponse.prototype, "statusCode", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListResponse;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListResponse };
