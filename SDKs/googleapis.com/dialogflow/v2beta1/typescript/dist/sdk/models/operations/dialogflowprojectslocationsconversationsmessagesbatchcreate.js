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
var DialogflowProjectsLocationsConversationsMessagesBatchCreatePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsMessagesBatchCreatePathParams, _super);
    function DialogflowProjectsLocationsConversationsMessagesBatchCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreatePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsConversationsMessagesBatchCreatePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsMessagesBatchCreatePathParams };
var DialogflowProjectsLocationsConversationsMessagesBatchCreateQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsMessagesBatchCreateQueryParams, _super);
    function DialogflowProjectsLocationsConversationsMessagesBatchCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsConversationsMessagesBatchCreateQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsMessagesBatchCreateQueryParams };
var DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption1, _super);
    function DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption1 };
var DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption2, _super);
    function DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption2 };
var DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurity, _super);
    function DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption1)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption2)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurity };
var DialogflowProjectsLocationsConversationsMessagesBatchCreateRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsMessagesBatchCreateRequest, _super);
    function DialogflowProjectsLocationsConversationsMessagesBatchCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsMessagesBatchCreatePathParams)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsMessagesBatchCreateQueryParams)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1BatchCreateMessagesRequestInput)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurity)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreateRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsConversationsMessagesBatchCreateRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsMessagesBatchCreateRequest };
var DialogflowProjectsLocationsConversationsMessagesBatchCreateResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsMessagesBatchCreateResponse, _super);
    function DialogflowProjectsLocationsConversationsMessagesBatchCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreateResponse.prototype, "googleCloudDialogflowV2beta1BatchCreateMessagesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationsMessagesBatchCreateResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsConversationsMessagesBatchCreateResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsMessagesBatchCreateResponse };
