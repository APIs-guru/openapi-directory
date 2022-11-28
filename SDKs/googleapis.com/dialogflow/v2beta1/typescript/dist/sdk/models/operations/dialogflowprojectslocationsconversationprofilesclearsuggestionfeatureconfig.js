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
var DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigPathParams, _super);
    function DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversationProfile" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigPathParams.prototype, "conversationProfile", void 0);
    return DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigPathParams };
var DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigQueryParams, _super);
    function DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigQueryParams };
var DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption1, _super);
    function DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption1 };
var DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption2, _super);
    function DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption2 };
var DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurity, _super);
    function DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption1)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption2)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurity };
var DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigRequest, _super);
    function DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigPathParams)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigQueryParams)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequest)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurity)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigRequest };
var DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigResponse, _super);
    function DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigResponse };
