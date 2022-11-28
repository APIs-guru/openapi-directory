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
var DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentPathParams = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentPathParams, _super);
    function DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=humanReviewConfig" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentPathParams.prototype, "humanReviewConfig", void 0);
    return DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentPathParams;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentPathParams };
var DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentQueryParams = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentQueryParams, _super);
    function DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentQueryParams.prototype, "uploadProtocol", void 0);
    return DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentQueryParams;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentQueryParams };
var DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentSecurity = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentSecurity, _super);
    function DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentSecurity.prototype, "oauth2c", void 0);
    return DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentSecurity;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentSecurity };
var DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentRequest = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentRequest, _super);
    function DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentPathParams)
    ], DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentQueryParams)
    ], DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDocumentaiV1ReviewDocumentRequest)
    ], DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentSecurity)
    ], DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentRequest.prototype, "security", void 0);
    return DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentRequest;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentRequest };
var DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentResponse = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentResponse, _super);
    function DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentResponse.prototype, "statusCode", void 0);
    return DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentResponse;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentResponse };
