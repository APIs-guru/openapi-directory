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
var ContainerProjectsLocationsClustersSetLegacyAbacPathParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersSetLegacyAbacPathParams, _super);
    function ContainerProjectsLocationsClustersSetLegacyAbacPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetLegacyAbacPathParams.prototype, "name", void 0);
    return ContainerProjectsLocationsClustersSetLegacyAbacPathParams;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersSetLegacyAbacPathParams };
var ContainerProjectsLocationsClustersSetLegacyAbacQueryParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersSetLegacyAbacQueryParams, _super);
    function ContainerProjectsLocationsClustersSetLegacyAbacQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetLegacyAbacQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetLegacyAbacQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetLegacyAbacQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetLegacyAbacQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetLegacyAbacQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetLegacyAbacQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetLegacyAbacQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContainerProjectsLocationsClustersSetLegacyAbacQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetLegacyAbacQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetLegacyAbacQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetLegacyAbacQueryParams.prototype, "uploadProtocol", void 0);
    return ContainerProjectsLocationsClustersSetLegacyAbacQueryParams;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersSetLegacyAbacQueryParams };
var ContainerProjectsLocationsClustersSetLegacyAbacSecurity = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersSetLegacyAbacSecurity, _super);
    function ContainerProjectsLocationsClustersSetLegacyAbacSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContainerProjectsLocationsClustersSetLegacyAbacSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContainerProjectsLocationsClustersSetLegacyAbacSecurity.prototype, "oauth2c", void 0);
    return ContainerProjectsLocationsClustersSetLegacyAbacSecurity;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersSetLegacyAbacSecurity };
var ContainerProjectsLocationsClustersSetLegacyAbacRequest = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersSetLegacyAbacRequest, _super);
    function ContainerProjectsLocationsClustersSetLegacyAbacRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersSetLegacyAbacPathParams)
    ], ContainerProjectsLocationsClustersSetLegacyAbacRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersSetLegacyAbacQueryParams)
    ], ContainerProjectsLocationsClustersSetLegacyAbacRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetLegacyAbacRequest)
    ], ContainerProjectsLocationsClustersSetLegacyAbacRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsLocationsClustersSetLegacyAbacSecurity)
    ], ContainerProjectsLocationsClustersSetLegacyAbacRequest.prototype, "security", void 0);
    return ContainerProjectsLocationsClustersSetLegacyAbacRequest;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersSetLegacyAbacRequest };
var ContainerProjectsLocationsClustersSetLegacyAbacResponse = /** @class */ (function (_super) {
    __extends(ContainerProjectsLocationsClustersSetLegacyAbacResponse, _super);
    function ContainerProjectsLocationsClustersSetLegacyAbacResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContainerProjectsLocationsClustersSetLegacyAbacResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ContainerProjectsLocationsClustersSetLegacyAbacResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContainerProjectsLocationsClustersSetLegacyAbacResponse.prototype, "statusCode", void 0);
    return ContainerProjectsLocationsClustersSetLegacyAbacResponse;
}(SpeakeasyBase));
export { ContainerProjectsLocationsClustersSetLegacyAbacResponse };
