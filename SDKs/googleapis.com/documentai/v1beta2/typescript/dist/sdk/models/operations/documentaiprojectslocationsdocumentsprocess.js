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
var DocumentaiProjectsLocationsDocumentsProcessPathParams = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsDocumentsProcessPathParams, _super);
    function DocumentaiProjectsLocationsDocumentsProcessPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsDocumentsProcessPathParams.prototype, "parent", void 0);
    return DocumentaiProjectsLocationsDocumentsProcessPathParams;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsDocumentsProcessPathParams };
var DocumentaiProjectsLocationsDocumentsProcessQueryParams = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsDocumentsProcessQueryParams, _super);
    function DocumentaiProjectsLocationsDocumentsProcessQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsDocumentsProcessQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsDocumentsProcessQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsDocumentsProcessQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsDocumentsProcessQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsDocumentsProcessQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsDocumentsProcessQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsDocumentsProcessQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DocumentaiProjectsLocationsDocumentsProcessQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsDocumentsProcessQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsDocumentsProcessQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsDocumentsProcessQueryParams.prototype, "uploadProtocol", void 0);
    return DocumentaiProjectsLocationsDocumentsProcessQueryParams;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsDocumentsProcessQueryParams };
var DocumentaiProjectsLocationsDocumentsProcessSecurity = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsDocumentsProcessSecurity, _super);
    function DocumentaiProjectsLocationsDocumentsProcessSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DocumentaiProjectsLocationsDocumentsProcessSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DocumentaiProjectsLocationsDocumentsProcessSecurity.prototype, "oauth2c", void 0);
    return DocumentaiProjectsLocationsDocumentsProcessSecurity;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsDocumentsProcessSecurity };
var DocumentaiProjectsLocationsDocumentsProcessRequest = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsDocumentsProcessRequest, _super);
    function DocumentaiProjectsLocationsDocumentsProcessRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsDocumentsProcessPathParams)
    ], DocumentaiProjectsLocationsDocumentsProcessRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsDocumentsProcessQueryParams)
    ], DocumentaiProjectsLocationsDocumentsProcessRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest)
    ], DocumentaiProjectsLocationsDocumentsProcessRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsDocumentsProcessSecurity)
    ], DocumentaiProjectsLocationsDocumentsProcessRequest.prototype, "security", void 0);
    return DocumentaiProjectsLocationsDocumentsProcessRequest;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsDocumentsProcessRequest };
var DocumentaiProjectsLocationsDocumentsProcessResponse = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsDocumentsProcessResponse, _super);
    function DocumentaiProjectsLocationsDocumentsProcessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsDocumentsProcessResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDocumentaiV1beta2Document)
    ], DocumentaiProjectsLocationsDocumentsProcessResponse.prototype, "googleCloudDocumentaiV1beta2Document", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DocumentaiProjectsLocationsDocumentsProcessResponse.prototype, "statusCode", void 0);
    return DocumentaiProjectsLocationsDocumentsProcessResponse;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsDocumentsProcessResponse };
