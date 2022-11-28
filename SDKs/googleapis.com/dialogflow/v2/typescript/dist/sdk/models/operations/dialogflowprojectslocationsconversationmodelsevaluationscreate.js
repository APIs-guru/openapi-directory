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
var DialogflowProjectsLocationsConversationModelsEvaluationsCreatePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsEvaluationsCreatePathParams, _super);
    function DialogflowProjectsLocationsConversationModelsEvaluationsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreatePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsConversationModelsEvaluationsCreatePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsEvaluationsCreatePathParams };
var DialogflowProjectsLocationsConversationModelsEvaluationsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsEvaluationsCreateQueryParams, _super);
    function DialogflowProjectsLocationsConversationModelsEvaluationsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsConversationModelsEvaluationsCreateQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsEvaluationsCreateQueryParams };
var DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption1, _super);
    function DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption1 };
var DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption2, _super);
    function DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption2 };
var DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurity, _super);
    function DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption1)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption2)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurity };
var DialogflowProjectsLocationsConversationModelsEvaluationsCreateRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsEvaluationsCreateRequest, _super);
    function DialogflowProjectsLocationsConversationModelsEvaluationsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsEvaluationsCreatePathParams)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsEvaluationsCreateQueryParams)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2CreateConversationModelEvaluationRequestInput)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurity)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreateRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsConversationModelsEvaluationsCreateRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsEvaluationsCreateRequest };
var DialogflowProjectsLocationsConversationModelsEvaluationsCreateResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsEvaluationsCreateResponse, _super);
    function DialogflowProjectsLocationsConversationModelsEvaluationsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsCreateResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsConversationModelsEvaluationsCreateResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsEvaluationsCreateResponse };
