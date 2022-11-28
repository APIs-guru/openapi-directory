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
var DialogflowProjectsLocationsAgentIntentsCreatePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentIntentsCreatePathParams, _super);
    function DialogflowProjectsLocationsAgentIntentsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsCreatePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentIntentsCreatePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentIntentsCreatePathParams };
export var DialogflowProjectsLocationsAgentIntentsCreateIntentViewEnum;
(function (DialogflowProjectsLocationsAgentIntentsCreateIntentViewEnum) {
    DialogflowProjectsLocationsAgentIntentsCreateIntentViewEnum["IntentViewUnspecified"] = "INTENT_VIEW_UNSPECIFIED";
    DialogflowProjectsLocationsAgentIntentsCreateIntentViewEnum["IntentViewFull"] = "INTENT_VIEW_FULL";
})(DialogflowProjectsLocationsAgentIntentsCreateIntentViewEnum || (DialogflowProjectsLocationsAgentIntentsCreateIntentViewEnum = {}));
var DialogflowProjectsLocationsAgentIntentsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentIntentsCreateQueryParams, _super);
    function DialogflowProjectsLocationsAgentIntentsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=intentView" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsCreateQueryParams.prototype, "intentView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsCreateQueryParams.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentIntentsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentIntentsCreateQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentIntentsCreateQueryParams };
var DialogflowProjectsLocationsAgentIntentsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentIntentsCreateSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentIntentsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentIntentsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentIntentsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentIntentsCreateSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentIntentsCreateSecurityOption1 };
var DialogflowProjectsLocationsAgentIntentsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentIntentsCreateSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentIntentsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentIntentsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentIntentsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentIntentsCreateSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentIntentsCreateSecurityOption2 };
var DialogflowProjectsLocationsAgentIntentsCreateSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentIntentsCreateSecurity, _super);
    function DialogflowProjectsLocationsAgentIntentsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentIntentsCreateSecurityOption1)
    ], DialogflowProjectsLocationsAgentIntentsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentIntentsCreateSecurityOption2)
    ], DialogflowProjectsLocationsAgentIntentsCreateSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentIntentsCreateSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentIntentsCreateSecurity };
var DialogflowProjectsLocationsAgentIntentsCreateRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentIntentsCreateRequest, _super);
    function DialogflowProjectsLocationsAgentIntentsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentIntentsCreatePathParams)
    ], DialogflowProjectsLocationsAgentIntentsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentIntentsCreateQueryParams)
    ], DialogflowProjectsLocationsAgentIntentsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1IntentInput)
    ], DialogflowProjectsLocationsAgentIntentsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentIntentsCreateSecurity)
    ], DialogflowProjectsLocationsAgentIntentsCreateRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentIntentsCreateRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentIntentsCreateRequest };
var DialogflowProjectsLocationsAgentIntentsCreateResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentIntentsCreateResponse, _super);
    function DialogflowProjectsLocationsAgentIntentsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1Intent)
    ], DialogflowProjectsLocationsAgentIntentsCreateResponse.prototype, "googleCloudDialogflowV2beta1Intent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentIntentsCreateResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentIntentsCreateResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentIntentsCreateResponse };
