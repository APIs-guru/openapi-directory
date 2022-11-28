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
var DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryPathParams, _super);
    function DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryPathParams.prototype, "conversation", void 0);
    return DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryPathParams };
var DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryQueryParams, _super);
    function DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryQueryParams };
var DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption1, _super);
    function DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption1 };
var DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption2, _super);
    function DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption2 };
var DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurity, _super);
    function DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption1)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption2)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurity };
var DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryRequest, _super);
    function DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryPathParams)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryQueryParams)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1SuggestConversationSummaryRequest)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurity)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryRequest };
var DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryResponse, _super);
    function DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryResponse.prototype, "googleCloudDialogflowV2beta1SuggestConversationSummaryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryResponse };
