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
var DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployPathParams = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployPathParams, _super);
    function DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployPathParams.prototype, "name", void 0);
    return DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployPathParams;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployPathParams };
var DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployQueryParams = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployQueryParams, _super);
    function DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployQueryParams.prototype, "uploadProtocol", void 0);
    return DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployQueryParams;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployQueryParams };
var DocumentaiProjectsLocationsProcessorsProcessorVersionsDeploySecurity = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsProcessorVersionsDeploySecurity, _super);
    function DocumentaiProjectsLocationsProcessorsProcessorVersionsDeploySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsDeploySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsDeploySecurity.prototype, "oauth2c", void 0);
    return DocumentaiProjectsLocationsProcessorsProcessorVersionsDeploySecurity;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsProcessorVersionsDeploySecurity };
var DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployRequest = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployRequest, _super);
    function DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployPathParams)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployQueryParams)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsProcessorsProcessorVersionsDeploySecurity)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployRequest.prototype, "security", void 0);
    return DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployRequest;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployRequest };
var DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployResponse = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployResponse, _super);
    function DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployResponse.prototype, "statusCode", void 0);
    return DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployResponse;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployResponse };
