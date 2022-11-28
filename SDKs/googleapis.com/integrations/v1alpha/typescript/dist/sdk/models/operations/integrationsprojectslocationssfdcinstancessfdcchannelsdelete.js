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
var IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeletePathParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeletePathParams, _super);
    function IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeletePathParams.prototype, "name", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeletePathParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeletePathParams };
var IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteQueryParams, _super);
    function IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteQueryParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteQueryParams };
var IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteSecurity = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteSecurity, _super);
    function IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteSecurity.prototype, "oauth2c", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteSecurity;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteSecurity };
var IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteRequest = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteRequest, _super);
    function IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeletePathParams)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteQueryParams)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteSecurity)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteRequest.prototype, "security", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteRequest;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteRequest };
var IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteResponse = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteResponse, _super);
    function IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteResponse.prototype, "statusCode", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteResponse;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteResponse };
