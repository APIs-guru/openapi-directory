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
var DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesPathParams, _super);
    function DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesPathParams };
var DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesQueryParams, _super);
    function DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesQueryParams };
var DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption1, _super);
    function DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption1 };
var DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption2, _super);
    function DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption2 };
var DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurity, _super);
    function DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption1)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption2)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurity };
var DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesRequest, _super);
    function DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesPathParams)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesQueryParams)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1SuggestSmartRepliesRequest)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurity)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesRequest };
var DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesResponse, _super);
    function DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesResponse.prototype, "googleCloudDialogflowV2beta1SuggestSmartRepliesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesResponse };
