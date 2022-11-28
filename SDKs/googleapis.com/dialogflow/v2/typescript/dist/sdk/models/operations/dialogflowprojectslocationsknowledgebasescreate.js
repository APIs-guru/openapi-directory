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
var DialogflowProjectsLocationsKnowledgeBasesCreatePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesCreatePathParams, _super);
    function DialogflowProjectsLocationsKnowledgeBasesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesCreatePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesCreatePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesCreatePathParams };
var DialogflowProjectsLocationsKnowledgeBasesCreateQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesCreateQueryParams, _super);
    function DialogflowProjectsLocationsKnowledgeBasesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsKnowledgeBasesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesCreateQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesCreateQueryParams };
var DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption1, _super);
    function DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption1 };
var DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption2, _super);
    function DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption2 };
var DialogflowProjectsLocationsKnowledgeBasesCreateSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesCreateSecurity, _super);
    function DialogflowProjectsLocationsKnowledgeBasesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption1)
    ], DialogflowProjectsLocationsKnowledgeBasesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption2)
    ], DialogflowProjectsLocationsKnowledgeBasesCreateSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesCreateSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesCreateSecurity };
var DialogflowProjectsLocationsKnowledgeBasesCreateRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesCreateRequest, _super);
    function DialogflowProjectsLocationsKnowledgeBasesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesCreatePathParams)
    ], DialogflowProjectsLocationsKnowledgeBasesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesCreateQueryParams)
    ], DialogflowProjectsLocationsKnowledgeBasesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2KnowledgeBase)
    ], DialogflowProjectsLocationsKnowledgeBasesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesCreateSecurity)
    ], DialogflowProjectsLocationsKnowledgeBasesCreateRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesCreateRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesCreateRequest };
var DialogflowProjectsLocationsKnowledgeBasesCreateResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesCreateResponse, _super);
    function DialogflowProjectsLocationsKnowledgeBasesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2KnowledgeBase)
    ], DialogflowProjectsLocationsKnowledgeBasesCreateResponse.prototype, "googleCloudDialogflowV2KnowledgeBase", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsKnowledgeBasesCreateResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesCreateResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesCreateResponse };
