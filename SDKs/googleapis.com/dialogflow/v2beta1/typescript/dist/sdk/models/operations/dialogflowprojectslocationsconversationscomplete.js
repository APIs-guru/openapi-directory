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
var DialogflowProjectsLocationsConversationsCompletePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsCompletePathParams, _super);
    function DialogflowProjectsLocationsConversationsCompletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCompletePathParams.prototype, "name", void 0);
    return DialogflowProjectsLocationsConversationsCompletePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsCompletePathParams };
var DialogflowProjectsLocationsConversationsCompleteQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsCompleteQueryParams, _super);
    function DialogflowProjectsLocationsConversationsCompleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCompleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCompleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCompleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCompleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCompleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCompleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCompleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsConversationsCompleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCompleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCompleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCompleteQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsConversationsCompleteQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsCompleteQueryParams };
var DialogflowProjectsLocationsConversationsCompleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsCompleteSecurityOption1, _super);
    function DialogflowProjectsLocationsConversationsCompleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationsCompleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationsCompleteSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationsCompleteSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsCompleteSecurityOption1 };
var DialogflowProjectsLocationsConversationsCompleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsCompleteSecurityOption2, _super);
    function DialogflowProjectsLocationsConversationsCompleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationsCompleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationsCompleteSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationsCompleteSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsCompleteSecurityOption2 };
var DialogflowProjectsLocationsConversationsCompleteSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsCompleteSecurity, _super);
    function DialogflowProjectsLocationsConversationsCompleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationsCompleteSecurityOption1)
    ], DialogflowProjectsLocationsConversationsCompleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationsCompleteSecurityOption2)
    ], DialogflowProjectsLocationsConversationsCompleteSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsConversationsCompleteSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsCompleteSecurity };
var DialogflowProjectsLocationsConversationsCompleteRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsCompleteRequest, _super);
    function DialogflowProjectsLocationsConversationsCompleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsCompletePathParams)
    ], DialogflowProjectsLocationsConversationsCompleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsCompleteQueryParams)
    ], DialogflowProjectsLocationsConversationsCompleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], DialogflowProjectsLocationsConversationsCompleteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsCompleteSecurity)
    ], DialogflowProjectsLocationsConversationsCompleteRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsConversationsCompleteRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsCompleteRequest };
var DialogflowProjectsLocationsConversationsCompleteResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsCompleteResponse, _super);
    function DialogflowProjectsLocationsConversationsCompleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsCompleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1Conversation)
    ], DialogflowProjectsLocationsConversationsCompleteResponse.prototype, "googleCloudDialogflowV2beta1Conversation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationsCompleteResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsConversationsCompleteResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsCompleteResponse };
