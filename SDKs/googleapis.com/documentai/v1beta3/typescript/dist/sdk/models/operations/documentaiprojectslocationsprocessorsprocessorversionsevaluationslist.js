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
var DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListPathParams = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListPathParams, _super);
    function DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListPathParams.prototype, "parent", void 0);
    return DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListPathParams;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListPathParams };
var DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListQueryParams = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListQueryParams, _super);
    function DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListQueryParams.prototype, "uploadProtocol", void 0);
    return DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListQueryParams;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListQueryParams };
var DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListSecurity = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListSecurity, _super);
    function DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListSecurity.prototype, "oauth2c", void 0);
    return DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListSecurity;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListSecurity };
var DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListRequest = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListRequest, _super);
    function DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListPathParams)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListQueryParams)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListSecurity)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListRequest.prototype, "security", void 0);
    return DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListRequest;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListRequest };
var DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListResponse = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListResponse, _super);
    function DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDocumentaiV1beta3ListEvaluationsResponse)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListResponse.prototype, "googleCloudDocumentaiV1beta3ListEvaluationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListResponse.prototype, "statusCode", void 0);
    return DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListResponse;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListResponse };
