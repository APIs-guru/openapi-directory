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
var ContaineranalysisProjectsOccurrencesGetNotesPathParams = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsOccurrencesGetNotesPathParams, _super);
    function ContaineranalysisProjectsOccurrencesGetNotesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesGetNotesPathParams.prototype, "name", void 0);
    return ContaineranalysisProjectsOccurrencesGetNotesPathParams;
}(SpeakeasyBase));
export { ContaineranalysisProjectsOccurrencesGetNotesPathParams };
var ContaineranalysisProjectsOccurrencesGetNotesQueryParams = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsOccurrencesGetNotesQueryParams, _super);
    function ContaineranalysisProjectsOccurrencesGetNotesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesGetNotesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesGetNotesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesGetNotesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesGetNotesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesGetNotesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesGetNotesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesGetNotesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContaineranalysisProjectsOccurrencesGetNotesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesGetNotesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesGetNotesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesGetNotesQueryParams.prototype, "uploadProtocol", void 0);
    return ContaineranalysisProjectsOccurrencesGetNotesQueryParams;
}(SpeakeasyBase));
export { ContaineranalysisProjectsOccurrencesGetNotesQueryParams };
var ContaineranalysisProjectsOccurrencesGetNotesSecurity = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsOccurrencesGetNotesSecurity, _super);
    function ContaineranalysisProjectsOccurrencesGetNotesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContaineranalysisProjectsOccurrencesGetNotesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContaineranalysisProjectsOccurrencesGetNotesSecurity.prototype, "oauth2c", void 0);
    return ContaineranalysisProjectsOccurrencesGetNotesSecurity;
}(SpeakeasyBase));
export { ContaineranalysisProjectsOccurrencesGetNotesSecurity };
var ContaineranalysisProjectsOccurrencesGetNotesRequest = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsOccurrencesGetNotesRequest, _super);
    function ContaineranalysisProjectsOccurrencesGetNotesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContaineranalysisProjectsOccurrencesGetNotesPathParams)
    ], ContaineranalysisProjectsOccurrencesGetNotesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContaineranalysisProjectsOccurrencesGetNotesQueryParams)
    ], ContaineranalysisProjectsOccurrencesGetNotesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContaineranalysisProjectsOccurrencesGetNotesSecurity)
    ], ContaineranalysisProjectsOccurrencesGetNotesRequest.prototype, "security", void 0);
    return ContaineranalysisProjectsOccurrencesGetNotesRequest;
}(SpeakeasyBase));
export { ContaineranalysisProjectsOccurrencesGetNotesRequest };
var ContaineranalysisProjectsOccurrencesGetNotesResponse = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsOccurrencesGetNotesResponse, _super);
    function ContaineranalysisProjectsOccurrencesGetNotesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesGetNotesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Note)
    ], ContaineranalysisProjectsOccurrencesGetNotesResponse.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContaineranalysisProjectsOccurrencesGetNotesResponse.prototype, "statusCode", void 0);
    return ContaineranalysisProjectsOccurrencesGetNotesResponse;
}(SpeakeasyBase));
export { ContaineranalysisProjectsOccurrencesGetNotesResponse };
