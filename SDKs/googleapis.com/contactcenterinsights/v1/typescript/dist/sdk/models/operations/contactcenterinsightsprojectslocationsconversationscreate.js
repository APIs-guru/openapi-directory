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
var ContactcenterinsightsProjectsLocationsConversationsCreatePathParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsConversationsCreatePathParams, _super);
    function ContactcenterinsightsProjectsLocationsConversationsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCreatePathParams.prototype, "parent", void 0);
    return ContactcenterinsightsProjectsLocationsConversationsCreatePathParams;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsConversationsCreatePathParams };
var ContactcenterinsightsProjectsLocationsConversationsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsConversationsCreateQueryParams, _super);
    function ContactcenterinsightsProjectsLocationsConversationsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conversationId" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCreateQueryParams.prototype, "conversationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContactcenterinsightsProjectsLocationsConversationsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ContactcenterinsightsProjectsLocationsConversationsCreateQueryParams;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsConversationsCreateQueryParams };
var ContactcenterinsightsProjectsLocationsConversationsCreateSecurity = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsConversationsCreateSecurity, _super);
    function ContactcenterinsightsProjectsLocationsConversationsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContactcenterinsightsProjectsLocationsConversationsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContactcenterinsightsProjectsLocationsConversationsCreateSecurity.prototype, "oauth2c", void 0);
    return ContactcenterinsightsProjectsLocationsConversationsCreateSecurity;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsConversationsCreateSecurity };
var ContactcenterinsightsProjectsLocationsConversationsCreateRequest = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsConversationsCreateRequest, _super);
    function ContactcenterinsightsProjectsLocationsConversationsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsConversationsCreatePathParams)
    ], ContactcenterinsightsProjectsLocationsConversationsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsConversationsCreateQueryParams)
    ], ContactcenterinsightsProjectsLocationsConversationsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudContactcenterinsightsV1ConversationInput)
    ], ContactcenterinsightsProjectsLocationsConversationsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsConversationsCreateSecurity)
    ], ContactcenterinsightsProjectsLocationsConversationsCreateRequest.prototype, "security", void 0);
    return ContactcenterinsightsProjectsLocationsConversationsCreateRequest;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsConversationsCreateRequest };
var ContactcenterinsightsProjectsLocationsConversationsCreateResponse = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsConversationsCreateResponse, _super);
    function ContactcenterinsightsProjectsLocationsConversationsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsConversationsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudContactcenterinsightsV1Conversation)
    ], ContactcenterinsightsProjectsLocationsConversationsCreateResponse.prototype, "googleCloudContactcenterinsightsV1Conversation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContactcenterinsightsProjectsLocationsConversationsCreateResponse.prototype, "statusCode", void 0);
    return ContactcenterinsightsProjectsLocationsConversationsCreateResponse;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsConversationsCreateResponse };
