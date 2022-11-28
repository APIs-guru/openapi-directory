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
var DialogflowProjectsLocationsAgentSessionsEntityTypesCreatePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsEntityTypesCreatePathParams, _super);
    function DialogflowProjectsLocationsAgentSessionsEntityTypesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreatePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentSessionsEntityTypesCreatePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsEntityTypesCreatePathParams };
var DialogflowProjectsLocationsAgentSessionsEntityTypesCreateQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsEntityTypesCreateQueryParams, _super);
    function DialogflowProjectsLocationsAgentSessionsEntityTypesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateQueryParams.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentSessionsEntityTypesCreateQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsEntityTypesCreateQueryParams };
var DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption1 };
var DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption2 };
var DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurity, _super);
    function DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption1)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption2)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurity };
var DialogflowProjectsLocationsAgentSessionsEntityTypesCreateRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsEntityTypesCreateRequest, _super);
    function DialogflowProjectsLocationsAgentSessionsEntityTypesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsEntityTypesCreatePathParams)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsEntityTypesCreateQueryParams)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2SessionEntityType)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurity)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentSessionsEntityTypesCreateRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsEntityTypesCreateRequest };
var DialogflowProjectsLocationsAgentSessionsEntityTypesCreateResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsEntityTypesCreateResponse, _super);
    function DialogflowProjectsLocationsAgentSessionsEntityTypesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2SessionEntityType)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateResponse.prototype, "googleCloudDialogflowV2SessionEntityType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesCreateResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentSessionsEntityTypesCreateResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsEntityTypesCreateResponse };
