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
var DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessPathParams = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessPathParams, _super);
    function DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessPathParams.prototype, "name", void 0);
    return DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessPathParams;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessPathParams };
var DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessQueryParams = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessQueryParams, _super);
    function DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessQueryParams.prototype, "uploadProtocol", void 0);
    return DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessQueryParams;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessQueryParams };
var DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessSecurity = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessSecurity, _super);
    function DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessSecurity.prototype, "oauth2c", void 0);
    return DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessSecurity;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessSecurity };
var DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessRequest = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessRequest, _super);
    function DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessPathParams)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessQueryParams)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDocumentaiV1ProcessRequest)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessSecurity)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessRequest.prototype, "security", void 0);
    return DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessRequest;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessRequest };
var DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessResponse = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessResponse, _super);
    function DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDocumentaiV1ProcessResponse)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessResponse.prototype, "googleCloudDocumentaiV1ProcessResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessResponse.prototype, "statusCode", void 0);
    return DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessResponse;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessResponse };
