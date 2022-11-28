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
var DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersPathParams, _super);
    function DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersPathParams };
var DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersQueryParams, _super);
    function DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersQueryParams };
var DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption1, _super);
    function DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption1 };
var DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption2, _super);
    function DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption2 };
var DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurity, _super);
    function DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption1)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption2)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurity };
var DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersRequest, _super);
    function DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersPathParams)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersQueryParams)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2SuggestFaqAnswersRequest)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurity)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersRequest };
var DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersResponse, _super);
    function DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2SuggestFaqAnswersResponse)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersResponse.prototype, "googleCloudDialogflowV2SuggestFaqAnswersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersResponse };
