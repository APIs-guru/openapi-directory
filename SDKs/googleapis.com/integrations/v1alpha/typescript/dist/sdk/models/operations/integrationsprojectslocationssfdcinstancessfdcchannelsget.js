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
var IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetPathParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetPathParams, _super);
    function IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetPathParams.prototype, "name", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetPathParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetPathParams };
var IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetQueryParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetQueryParams, _super);
    function IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetQueryParams.prototype, "uploadProtocol", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetQueryParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetQueryParams };
var IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetSecurity = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetSecurity, _super);
    function IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetSecurity.prototype, "oauth2c", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetSecurity;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetSecurity };
var IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetRequest = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetRequest, _super);
    function IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetPathParams)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetQueryParams)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetSecurity)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetRequest.prototype, "security", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetRequest;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetRequest };
var IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetResponse = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetResponse, _super);
    function IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudIntegrationsV1alphaSfdcChannel)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetResponse.prototype, "googleCloudIntegrationsV1alphaSfdcChannel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetResponse.prototype, "statusCode", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetResponse;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetResponse };
