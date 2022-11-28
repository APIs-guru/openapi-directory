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
var DialogflowProjectsLocationsConversationModelsCreatePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsCreatePathParams, _super);
    function DialogflowProjectsLocationsConversationModelsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsCreatePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsConversationModelsCreatePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsCreatePathParams };
var DialogflowProjectsLocationsConversationModelsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsCreateQueryParams, _super);
    function DialogflowProjectsLocationsConversationModelsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsConversationModelsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsConversationModelsCreateQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsCreateQueryParams };
var DialogflowProjectsLocationsConversationModelsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsCreateSecurityOption1, _super);
    function DialogflowProjectsLocationsConversationModelsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationModelsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationModelsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationModelsCreateSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsCreateSecurityOption1 };
var DialogflowProjectsLocationsConversationModelsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsCreateSecurityOption2, _super);
    function DialogflowProjectsLocationsConversationModelsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationModelsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationModelsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationModelsCreateSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsCreateSecurityOption2 };
var DialogflowProjectsLocationsConversationModelsCreateSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsCreateSecurity, _super);
    function DialogflowProjectsLocationsConversationModelsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsCreateSecurityOption1)
    ], DialogflowProjectsLocationsConversationModelsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsCreateSecurityOption2)
    ], DialogflowProjectsLocationsConversationModelsCreateSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsConversationModelsCreateSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsCreateSecurity };
var DialogflowProjectsLocationsConversationModelsCreateRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsCreateRequest, _super);
    function DialogflowProjectsLocationsConversationModelsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsCreatePathParams)
    ], DialogflowProjectsLocationsConversationModelsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsCreateQueryParams)
    ], DialogflowProjectsLocationsConversationModelsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2ConversationModelInput)
    ], DialogflowProjectsLocationsConversationModelsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsCreateSecurity)
    ], DialogflowProjectsLocationsConversationModelsCreateRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsConversationModelsCreateRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsCreateRequest };
var DialogflowProjectsLocationsConversationModelsCreateResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsCreateResponse, _super);
    function DialogflowProjectsLocationsConversationModelsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsConversationModelsCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationModelsCreateResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsConversationModelsCreateResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsCreateResponse };
