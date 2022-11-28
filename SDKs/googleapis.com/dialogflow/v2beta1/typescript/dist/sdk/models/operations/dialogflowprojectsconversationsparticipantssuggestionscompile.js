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
var DialogflowProjectsConversationsParticipantsSuggestionsCompilePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsConversationsParticipantsSuggestionsCompilePathParams, _super);
    function DialogflowProjectsConversationsParticipantsSuggestionsCompilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompilePathParams.prototype, "parent", void 0);
    return DialogflowProjectsConversationsParticipantsSuggestionsCompilePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsConversationsParticipantsSuggestionsCompilePathParams };
var DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams, _super);
    function DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams };
var DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption1, _super);
    function DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption1 };
var DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption2, _super);
    function DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption2 };
var DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity, _super);
    function DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption1)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption2)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity.prototype, "option2", void 0);
    return DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity };
var DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest, _super);
    function DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsConversationsParticipantsSuggestionsCompilePathParams)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1CompileSuggestionRequest)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest.prototype, "security", void 0);
    return DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest;
}(SpeakeasyBase));
export { DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest };
var DialogflowProjectsConversationsParticipantsSuggestionsCompileResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsConversationsParticipantsSuggestionsCompileResponse, _super);
    function DialogflowProjectsConversationsParticipantsSuggestionsCompileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1CompileSuggestionResponse)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompileResponse.prototype, "googleCloudDialogflowV2beta1CompileSuggestionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsConversationsParticipantsSuggestionsCompileResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsConversationsParticipantsSuggestionsCompileResponse;
}(SpeakeasyBase));
export { DialogflowProjectsConversationsParticipantsSuggestionsCompileResponse };
