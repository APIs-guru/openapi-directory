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
var DialogflowProjectsLocationsConversationProfilesCreatePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesCreatePathParams, _super);
    function DialogflowProjectsLocationsConversationProfilesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesCreatePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsConversationProfilesCreatePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesCreatePathParams };
var DialogflowProjectsLocationsConversationProfilesCreateQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesCreateQueryParams, _super);
    function DialogflowProjectsLocationsConversationProfilesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsConversationProfilesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsConversationProfilesCreateQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesCreateQueryParams };
var DialogflowProjectsLocationsConversationProfilesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesCreateSecurityOption1, _super);
    function DialogflowProjectsLocationsConversationProfilesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationProfilesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationProfilesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationProfilesCreateSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesCreateSecurityOption1 };
var DialogflowProjectsLocationsConversationProfilesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesCreateSecurityOption2, _super);
    function DialogflowProjectsLocationsConversationProfilesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationProfilesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationProfilesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationProfilesCreateSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesCreateSecurityOption2 };
var DialogflowProjectsLocationsConversationProfilesCreateSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesCreateSecurity, _super);
    function DialogflowProjectsLocationsConversationProfilesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationProfilesCreateSecurityOption1)
    ], DialogflowProjectsLocationsConversationProfilesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationProfilesCreateSecurityOption2)
    ], DialogflowProjectsLocationsConversationProfilesCreateSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsConversationProfilesCreateSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesCreateSecurity };
var DialogflowProjectsLocationsConversationProfilesCreateRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesCreateRequest, _super);
    function DialogflowProjectsLocationsConversationProfilesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationProfilesCreatePathParams)
    ], DialogflowProjectsLocationsConversationProfilesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationProfilesCreateQueryParams)
    ], DialogflowProjectsLocationsConversationProfilesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1ConversationProfileInput)
    ], DialogflowProjectsLocationsConversationProfilesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationProfilesCreateSecurity)
    ], DialogflowProjectsLocationsConversationProfilesCreateRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsConversationProfilesCreateRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesCreateRequest };
var DialogflowProjectsLocationsConversationProfilesCreateResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesCreateResponse, _super);
    function DialogflowProjectsLocationsConversationProfilesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1ConversationProfile)
    ], DialogflowProjectsLocationsConversationProfilesCreateResponse.prototype, "googleCloudDialogflowV2beta1ConversationProfile", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationProfilesCreateResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsConversationProfilesCreateResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesCreateResponse };
