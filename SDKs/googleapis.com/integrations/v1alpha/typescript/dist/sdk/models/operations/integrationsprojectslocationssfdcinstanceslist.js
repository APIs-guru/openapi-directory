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
var IntegrationsProjectsLocationsSfdcInstancesListPathParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesListPathParams, _super);
    function IntegrationsProjectsLocationsSfdcInstancesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesListPathParams.prototype, "parent", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesListPathParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesListPathParams };
var IntegrationsProjectsLocationsSfdcInstancesListQueryParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesListQueryParams, _super);
    function IntegrationsProjectsLocationsSfdcInstancesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], IntegrationsProjectsLocationsSfdcInstancesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IntegrationsProjectsLocationsSfdcInstancesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readMask" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesListQueryParams.prototype, "readMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesListQueryParams.prototype, "uploadProtocol", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesListQueryParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesListQueryParams };
var IntegrationsProjectsLocationsSfdcInstancesListSecurity = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesListSecurity, _super);
    function IntegrationsProjectsLocationsSfdcInstancesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IntegrationsProjectsLocationsSfdcInstancesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IntegrationsProjectsLocationsSfdcInstancesListSecurity.prototype, "oauth2c", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesListSecurity;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesListSecurity };
var IntegrationsProjectsLocationsSfdcInstancesListRequest = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesListRequest, _super);
    function IntegrationsProjectsLocationsSfdcInstancesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsSfdcInstancesListPathParams)
    ], IntegrationsProjectsLocationsSfdcInstancesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsSfdcInstancesListQueryParams)
    ], IntegrationsProjectsLocationsSfdcInstancesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsSfdcInstancesListSecurity)
    ], IntegrationsProjectsLocationsSfdcInstancesListRequest.prototype, "security", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesListRequest;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesListRequest };
var IntegrationsProjectsLocationsSfdcInstancesListResponse = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesListResponse, _super);
    function IntegrationsProjectsLocationsSfdcInstancesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse)
    ], IntegrationsProjectsLocationsSfdcInstancesListResponse.prototype, "googleCloudIntegrationsV1alphaListSfdcInstancesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IntegrationsProjectsLocationsSfdcInstancesListResponse.prototype, "statusCode", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesListResponse;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesListResponse };
