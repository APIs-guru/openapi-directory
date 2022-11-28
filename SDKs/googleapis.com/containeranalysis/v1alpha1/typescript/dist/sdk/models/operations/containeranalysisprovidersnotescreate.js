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
var ContaineranalysisProvidersNotesCreatePathParams = /** @class */ (function (_super) {
    __extends(ContaineranalysisProvidersNotesCreatePathParams, _super);
    function ContaineranalysisProvidersNotesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesCreatePathParams.prototype, "name", void 0);
    return ContaineranalysisProvidersNotesCreatePathParams;
}(SpeakeasyBase));
export { ContaineranalysisProvidersNotesCreatePathParams };
var ContaineranalysisProvidersNotesCreateQueryParams = /** @class */ (function (_super) {
    __extends(ContaineranalysisProvidersNotesCreateQueryParams, _super);
    function ContaineranalysisProvidersNotesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=noteId" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesCreateQueryParams.prototype, "noteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesCreateQueryParams.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContaineranalysisProvidersNotesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ContaineranalysisProvidersNotesCreateQueryParams;
}(SpeakeasyBase));
export { ContaineranalysisProvidersNotesCreateQueryParams };
var ContaineranalysisProvidersNotesCreateSecurity = /** @class */ (function (_super) {
    __extends(ContaineranalysisProvidersNotesCreateSecurity, _super);
    function ContaineranalysisProvidersNotesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContaineranalysisProvidersNotesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContaineranalysisProvidersNotesCreateSecurity.prototype, "oauth2c", void 0);
    return ContaineranalysisProvidersNotesCreateSecurity;
}(SpeakeasyBase));
export { ContaineranalysisProvidersNotesCreateSecurity };
var ContaineranalysisProvidersNotesCreateRequest = /** @class */ (function (_super) {
    __extends(ContaineranalysisProvidersNotesCreateRequest, _super);
    function ContaineranalysisProvidersNotesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContaineranalysisProvidersNotesCreatePathParams)
    ], ContaineranalysisProvidersNotesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContaineranalysisProvidersNotesCreateQueryParams)
    ], ContaineranalysisProvidersNotesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Note)
    ], ContaineranalysisProvidersNotesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContaineranalysisProvidersNotesCreateSecurity)
    ], ContaineranalysisProvidersNotesCreateRequest.prototype, "security", void 0);
    return ContaineranalysisProvidersNotesCreateRequest;
}(SpeakeasyBase));
export { ContaineranalysisProvidersNotesCreateRequest };
var ContaineranalysisProvidersNotesCreateResponse = /** @class */ (function (_super) {
    __extends(ContaineranalysisProvidersNotesCreateResponse, _super);
    function ContaineranalysisProvidersNotesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Note)
    ], ContaineranalysisProvidersNotesCreateResponse.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContaineranalysisProvidersNotesCreateResponse.prototype, "statusCode", void 0);
    return ContaineranalysisProvidersNotesCreateResponse;
}(SpeakeasyBase));
export { ContaineranalysisProvidersNotesCreateResponse };
