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
var DialogflowProjectsLocationsConversationsCreatePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsCreatePathParams, _super);
    function DialogflowProjectsLocationsConversationsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCreatePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsConversationsCreatePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsCreatePathParams };
var DialogflowProjectsLocationsConversationsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsCreateQueryParams, _super);
    function DialogflowProjectsLocationsConversationsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conversationId" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCreateQueryParams.prototype, "conversationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsConversationsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsConversationsCreateQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsCreateQueryParams };
var DialogflowProjectsLocationsConversationsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsCreateSecurityOption1, _super);
    function DialogflowProjectsLocationsConversationsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationsCreateSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsCreateSecurityOption1 };
var DialogflowProjectsLocationsConversationsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsCreateSecurityOption2, _super);
    function DialogflowProjectsLocationsConversationsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationsCreateSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsCreateSecurityOption2 };
var DialogflowProjectsLocationsConversationsCreateSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsCreateSecurity, _super);
    function DialogflowProjectsLocationsConversationsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationsCreateSecurityOption1)
    ], DialogflowProjectsLocationsConversationsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationsCreateSecurityOption2)
    ], DialogflowProjectsLocationsConversationsCreateSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsConversationsCreateSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsCreateSecurity };
var DialogflowProjectsLocationsConversationsCreateRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsCreateRequest, _super);
    function DialogflowProjectsLocationsConversationsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsCreatePathParams)
    ], DialogflowProjectsLocationsConversationsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsCreateQueryParams)
    ], DialogflowProjectsLocationsConversationsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1ConversationInput)
    ], DialogflowProjectsLocationsConversationsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsCreateSecurity)
    ], DialogflowProjectsLocationsConversationsCreateRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsConversationsCreateRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsCreateRequest };
var DialogflowProjectsLocationsConversationsCreateResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsCreateResponse, _super);
    function DialogflowProjectsLocationsConversationsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1Conversation)
    ], DialogflowProjectsLocationsConversationsCreateResponse.prototype, "googleCloudDialogflowV2beta1Conversation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationsCreateResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsConversationsCreateResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsCreateResponse };
