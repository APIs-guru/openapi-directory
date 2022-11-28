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
var ContaineranalysisProjectsOccurrencesBatchCreatePathParams = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsOccurrencesBatchCreatePathParams, _super);
    function ContaineranalysisProjectsOccurrencesBatchCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesBatchCreatePathParams.prototype, "parent", void 0);
    return ContaineranalysisProjectsOccurrencesBatchCreatePathParams;
}(SpeakeasyBase));
export { ContaineranalysisProjectsOccurrencesBatchCreatePathParams };
var ContaineranalysisProjectsOccurrencesBatchCreateQueryParams = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsOccurrencesBatchCreateQueryParams, _super);
    function ContaineranalysisProjectsOccurrencesBatchCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesBatchCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesBatchCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesBatchCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesBatchCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesBatchCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesBatchCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesBatchCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContaineranalysisProjectsOccurrencesBatchCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesBatchCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesBatchCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesBatchCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ContaineranalysisProjectsOccurrencesBatchCreateQueryParams;
}(SpeakeasyBase));
export { ContaineranalysisProjectsOccurrencesBatchCreateQueryParams };
var ContaineranalysisProjectsOccurrencesBatchCreateSecurity = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsOccurrencesBatchCreateSecurity, _super);
    function ContaineranalysisProjectsOccurrencesBatchCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContaineranalysisProjectsOccurrencesBatchCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContaineranalysisProjectsOccurrencesBatchCreateSecurity.prototype, "oauth2c", void 0);
    return ContaineranalysisProjectsOccurrencesBatchCreateSecurity;
}(SpeakeasyBase));
export { ContaineranalysisProjectsOccurrencesBatchCreateSecurity };
var ContaineranalysisProjectsOccurrencesBatchCreateRequest = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsOccurrencesBatchCreateRequest, _super);
    function ContaineranalysisProjectsOccurrencesBatchCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContaineranalysisProjectsOccurrencesBatchCreatePathParams)
    ], ContaineranalysisProjectsOccurrencesBatchCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContaineranalysisProjectsOccurrencesBatchCreateQueryParams)
    ], ContaineranalysisProjectsOccurrencesBatchCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchCreateOccurrencesRequestInput)
    ], ContaineranalysisProjectsOccurrencesBatchCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContaineranalysisProjectsOccurrencesBatchCreateSecurity)
    ], ContaineranalysisProjectsOccurrencesBatchCreateRequest.prototype, "security", void 0);
    return ContaineranalysisProjectsOccurrencesBatchCreateRequest;
}(SpeakeasyBase));
export { ContaineranalysisProjectsOccurrencesBatchCreateRequest };
var ContaineranalysisProjectsOccurrencesBatchCreateResponse = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsOccurrencesBatchCreateResponse, _super);
    function ContaineranalysisProjectsOccurrencesBatchCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchCreateOccurrencesResponse)
    ], ContaineranalysisProjectsOccurrencesBatchCreateResponse.prototype, "batchCreateOccurrencesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesBatchCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContaineranalysisProjectsOccurrencesBatchCreateResponse.prototype, "statusCode", void 0);
    return ContaineranalysisProjectsOccurrencesBatchCreateResponse;
}(SpeakeasyBase));
export { ContaineranalysisProjectsOccurrencesBatchCreateResponse };
