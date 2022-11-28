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
var DialogflowProjectsLocationsKnowledgeBasesDocumentsCreatePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesDocumentsCreatePathParams, _super);
    function DialogflowProjectsLocationsKnowledgeBasesDocumentsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreatePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesDocumentsCreatePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesDocumentsCreatePathParams };
var DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateQueryParams, _super);
    function DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateQueryParams };
var DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurityOption1, _super);
    function DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurityOption1 };
var DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurityOption2, _super);
    function DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurityOption2 };
var DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurity, _super);
    function DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurityOption1)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurityOption2)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurity };
var DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateRequest, _super);
    function DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesDocumentsCreatePathParams)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateQueryParams)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2DocumentInput)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurity)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateRequest };
var DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateResponse, _super);
    function DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateResponse };
