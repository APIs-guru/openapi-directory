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
var DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesPathParams, _super);
    function DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesPathParams };
var DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesQueryParams, _super);
    function DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesQueryParams };
var DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption1, _super);
    function DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption1 };
var DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption2, _super);
    function DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption2 };
var DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurity, _super);
    function DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption1)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption2)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurity };
var DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesRequest, _super);
    function DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesPathParams)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesQueryParams)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1SuggestArticlesRequest)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurity)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesRequest };
var DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesResponse, _super);
    function DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1SuggestArticlesResponse)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesResponse.prototype, "googleCloudDialogflowV2beta1SuggestArticlesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesResponse };
