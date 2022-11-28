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
var DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchPathParams, _super);
    function DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchPathParams.prototype, "name", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchPathParams };
export var DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchUpdateMaskEnum;
(function (DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchUpdateMaskEnum) {
    DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchUpdateMaskEnum["IntentViewUnspecified"] = "INTENT_VIEW_UNSPECIFIED";
    DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchUpdateMaskEnum["IntentViewFull"] = "INTENT_VIEW_FULL";
})(DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchUpdateMaskEnum || (DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchUpdateMaskEnum = {}));
var DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchQueryParams, _super);
    function DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchQueryParams.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchQueryParams };
var DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption1, _super);
    function DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption1 };
var DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption2, _super);
    function DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption2 };
var DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurity, _super);
    function DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption1)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption2)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurity };
var DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchRequest, _super);
    function DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchPathParams)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchQueryParams)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1DocumentInput)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurity)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchRequest };
var DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchResponse, _super);
    function DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchResponse };
