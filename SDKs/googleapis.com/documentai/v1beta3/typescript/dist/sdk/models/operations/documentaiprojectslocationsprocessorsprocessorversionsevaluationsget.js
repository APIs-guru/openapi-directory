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
var DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetPathParams = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetPathParams, _super);
    function DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetPathParams.prototype, "name", void 0);
    return DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetPathParams;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetPathParams };
var DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetQueryParams = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetQueryParams, _super);
    function DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetQueryParams;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetQueryParams };
var DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetSecurity = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetSecurity, _super);
    function DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetSecurity.prototype, "oauth2c", void 0);
    return DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetSecurity;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetSecurity };
var DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetRequest = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetRequest, _super);
    function DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetPathParams)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetQueryParams)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetSecurity)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetRequest.prototype, "security", void 0);
    return DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetRequest;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetRequest };
var DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetResponse = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetResponse, _super);
    function DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDocumentaiV1beta3Evaluation)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetResponse.prototype, "googleCloudDocumentaiV1beta3Evaluation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetResponse.prototype, "statusCode", void 0);
    return DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetResponse;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetResponse };
