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
var DocumentaiProjectsLocationsFetchProcessorTypesPathParams = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsFetchProcessorTypesPathParams, _super);
    function DocumentaiProjectsLocationsFetchProcessorTypesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsFetchProcessorTypesPathParams.prototype, "parent", void 0);
    return DocumentaiProjectsLocationsFetchProcessorTypesPathParams;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsFetchProcessorTypesPathParams };
var DocumentaiProjectsLocationsFetchProcessorTypesQueryParams = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsFetchProcessorTypesQueryParams, _super);
    function DocumentaiProjectsLocationsFetchProcessorTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsFetchProcessorTypesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsFetchProcessorTypesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsFetchProcessorTypesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsFetchProcessorTypesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsFetchProcessorTypesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsFetchProcessorTypesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsFetchProcessorTypesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DocumentaiProjectsLocationsFetchProcessorTypesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsFetchProcessorTypesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsFetchProcessorTypesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsFetchProcessorTypesQueryParams.prototype, "uploadProtocol", void 0);
    return DocumentaiProjectsLocationsFetchProcessorTypesQueryParams;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsFetchProcessorTypesQueryParams };
var DocumentaiProjectsLocationsFetchProcessorTypesSecurity = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsFetchProcessorTypesSecurity, _super);
    function DocumentaiProjectsLocationsFetchProcessorTypesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DocumentaiProjectsLocationsFetchProcessorTypesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DocumentaiProjectsLocationsFetchProcessorTypesSecurity.prototype, "oauth2c", void 0);
    return DocumentaiProjectsLocationsFetchProcessorTypesSecurity;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsFetchProcessorTypesSecurity };
var DocumentaiProjectsLocationsFetchProcessorTypesRequest = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsFetchProcessorTypesRequest, _super);
    function DocumentaiProjectsLocationsFetchProcessorTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsFetchProcessorTypesPathParams)
    ], DocumentaiProjectsLocationsFetchProcessorTypesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsFetchProcessorTypesQueryParams)
    ], DocumentaiProjectsLocationsFetchProcessorTypesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsFetchProcessorTypesSecurity)
    ], DocumentaiProjectsLocationsFetchProcessorTypesRequest.prototype, "security", void 0);
    return DocumentaiProjectsLocationsFetchProcessorTypesRequest;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsFetchProcessorTypesRequest };
var DocumentaiProjectsLocationsFetchProcessorTypesResponse = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsFetchProcessorTypesResponse, _super);
    function DocumentaiProjectsLocationsFetchProcessorTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsFetchProcessorTypesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDocumentaiV1FetchProcessorTypesResponse)
    ], DocumentaiProjectsLocationsFetchProcessorTypesResponse.prototype, "googleCloudDocumentaiV1FetchProcessorTypesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DocumentaiProjectsLocationsFetchProcessorTypesResponse.prototype, "statusCode", void 0);
    return DocumentaiProjectsLocationsFetchProcessorTypesResponse;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsFetchProcessorTypesResponse };
