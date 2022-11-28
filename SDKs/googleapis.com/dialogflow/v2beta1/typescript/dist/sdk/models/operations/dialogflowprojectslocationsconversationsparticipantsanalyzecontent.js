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
var DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentPathParams, _super);
    function DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=participant" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentPathParams.prototype, "participant", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentPathParams };
var DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentQueryParams, _super);
    function DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentQueryParams };
var DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption1, _super);
    function DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption1 };
var DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption2, _super);
    function DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption2 };
var DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurity, _super);
    function DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption1)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption2)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurity };
var DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentRequest, _super);
    function DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentPathParams)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentQueryParams)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1AnalyzeContentRequest)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurity)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentRequest };
var DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentResponse, _super);
    function DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1AnalyzeContentResponse)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentResponse.prototype, "googleCloudDialogflowV2beta1AnalyzeContentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentResponse };
