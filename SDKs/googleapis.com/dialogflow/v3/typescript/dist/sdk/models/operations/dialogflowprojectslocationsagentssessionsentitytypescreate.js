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
var DialogflowProjectsLocationsAgentsSessionsEntityTypesCreatePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsEntityTypesCreatePathParams, _super);
    function DialogflowProjectsLocationsAgentsSessionsEntityTypesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreatePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentsSessionsEntityTypesCreatePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsEntityTypesCreatePathParams };
var DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateQueryParams, _super);
    function DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateQueryParams.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateQueryParams };
var DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurityOption1 };
var DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurityOption2 };
var DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurity, _super);
    function DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurityOption1)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurityOption2)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurity };
var DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateRequest, _super);
    function DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsEntityTypesCreatePathParams)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateQueryParams)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3SessionEntityType)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurity)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateRequest };
var DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateResponse, _super);
    function DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3SessionEntityType)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateResponse.prototype, "googleCloudDialogflowCxV3SessionEntityType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateResponse };
