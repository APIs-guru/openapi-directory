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
var DialogflowProjectsConversationsParticipantsSuggestionsListPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsConversationsParticipantsSuggestionsListPathParams, _super);
    function DialogflowProjectsConversationsParticipantsSuggestionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListPathParams.prototype, "parent", void 0);
    return DialogflowProjectsConversationsParticipantsSuggestionsListPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsConversationsParticipantsSuggestionsListPathParams };
var DialogflowProjectsConversationsParticipantsSuggestionsListQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsConversationsParticipantsSuggestionsListQueryParams, _super);
    function DialogflowProjectsConversationsParticipantsSuggestionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsConversationsParticipantsSuggestionsListQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsConversationsParticipantsSuggestionsListQueryParams };
var DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption1, _super);
    function DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption1 };
var DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption2, _super);
    function DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption2 };
var DialogflowProjectsConversationsParticipantsSuggestionsListSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsConversationsParticipantsSuggestionsListSecurity, _super);
    function DialogflowProjectsConversationsParticipantsSuggestionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption1)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption2)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListSecurity.prototype, "option2", void 0);
    return DialogflowProjectsConversationsParticipantsSuggestionsListSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsConversationsParticipantsSuggestionsListSecurity };
var DialogflowProjectsConversationsParticipantsSuggestionsListRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsConversationsParticipantsSuggestionsListRequest, _super);
    function DialogflowProjectsConversationsParticipantsSuggestionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsConversationsParticipantsSuggestionsListPathParams)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsConversationsParticipantsSuggestionsListQueryParams)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsConversationsParticipantsSuggestionsListSecurity)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListRequest.prototype, "security", void 0);
    return DialogflowProjectsConversationsParticipantsSuggestionsListRequest;
}(SpeakeasyBase));
export { DialogflowProjectsConversationsParticipantsSuggestionsListRequest };
var DialogflowProjectsConversationsParticipantsSuggestionsListResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsConversationsParticipantsSuggestionsListResponse, _super);
    function DialogflowProjectsConversationsParticipantsSuggestionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1ListSuggestionsResponse)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListResponse.prototype, "googleCloudDialogflowV2beta1ListSuggestionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsConversationsParticipantsSuggestionsListResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsConversationsParticipantsSuggestionsListResponse;
}(SpeakeasyBase));
export { DialogflowProjectsConversationsParticipantsSuggestionsListResponse };
