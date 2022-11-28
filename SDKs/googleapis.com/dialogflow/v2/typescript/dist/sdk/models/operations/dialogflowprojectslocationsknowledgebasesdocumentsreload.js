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
var DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadPathParams, _super);
    function DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadPathParams.prototype, "name", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadPathParams };
var DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadQueryParams, _super);
    function DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadQueryParams };
var DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption1, _super);
    function DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption1 };
var DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption2, _super);
    function DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption2 };
var DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurity, _super);
    function DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption1)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption2)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurity };
var DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadRequest, _super);
    function DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadPathParams)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadQueryParams)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2ReloadDocumentRequest)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurity)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadRequest };
var DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadResponse, _super);
    function DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadResponse };
