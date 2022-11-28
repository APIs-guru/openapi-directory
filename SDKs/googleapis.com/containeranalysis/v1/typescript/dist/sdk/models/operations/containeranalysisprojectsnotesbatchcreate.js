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
var ContaineranalysisProjectsNotesBatchCreatePathParams = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsNotesBatchCreatePathParams, _super);
    function ContaineranalysisProjectsNotesBatchCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesBatchCreatePathParams.prototype, "parent", void 0);
    return ContaineranalysisProjectsNotesBatchCreatePathParams;
}(SpeakeasyBase));
export { ContaineranalysisProjectsNotesBatchCreatePathParams };
var ContaineranalysisProjectsNotesBatchCreateQueryParams = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsNotesBatchCreateQueryParams, _super);
    function ContaineranalysisProjectsNotesBatchCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesBatchCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesBatchCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesBatchCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesBatchCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesBatchCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesBatchCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesBatchCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContaineranalysisProjectsNotesBatchCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesBatchCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesBatchCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesBatchCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ContaineranalysisProjectsNotesBatchCreateQueryParams;
}(SpeakeasyBase));
export { ContaineranalysisProjectsNotesBatchCreateQueryParams };
var ContaineranalysisProjectsNotesBatchCreateSecurity = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsNotesBatchCreateSecurity, _super);
    function ContaineranalysisProjectsNotesBatchCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContaineranalysisProjectsNotesBatchCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContaineranalysisProjectsNotesBatchCreateSecurity.prototype, "oauth2c", void 0);
    return ContaineranalysisProjectsNotesBatchCreateSecurity;
}(SpeakeasyBase));
export { ContaineranalysisProjectsNotesBatchCreateSecurity };
var ContaineranalysisProjectsNotesBatchCreateRequest = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsNotesBatchCreateRequest, _super);
    function ContaineranalysisProjectsNotesBatchCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContaineranalysisProjectsNotesBatchCreatePathParams)
    ], ContaineranalysisProjectsNotesBatchCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContaineranalysisProjectsNotesBatchCreateQueryParams)
    ], ContaineranalysisProjectsNotesBatchCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchCreateNotesRequest)
    ], ContaineranalysisProjectsNotesBatchCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContaineranalysisProjectsNotesBatchCreateSecurity)
    ], ContaineranalysisProjectsNotesBatchCreateRequest.prototype, "security", void 0);
    return ContaineranalysisProjectsNotesBatchCreateRequest;
}(SpeakeasyBase));
export { ContaineranalysisProjectsNotesBatchCreateRequest };
var ContaineranalysisProjectsNotesBatchCreateResponse = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsNotesBatchCreateResponse, _super);
    function ContaineranalysisProjectsNotesBatchCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchCreateNotesResponse)
    ], ContaineranalysisProjectsNotesBatchCreateResponse.prototype, "batchCreateNotesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesBatchCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContaineranalysisProjectsNotesBatchCreateResponse.prototype, "statusCode", void 0);
    return ContaineranalysisProjectsNotesBatchCreateResponse;
}(SpeakeasyBase));
export { ContaineranalysisProjectsNotesBatchCreateResponse };
