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
var DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigPathParams, _super);
    function DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversationProfile" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigPathParams.prototype, "conversationProfile", void 0);
    return DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigPathParams };
var DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigQueryParams, _super);
    function DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigQueryParams };
var DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption1, _super);
    function DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption1 };
var DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption2, _super);
    function DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption2 };
var DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurity, _super);
    function DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption1)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption2)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurity };
var DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigRequest, _super);
    function DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigPathParams)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigQueryParams)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurity)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigRequest };
var DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigResponse, _super);
    function DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigResponse };
