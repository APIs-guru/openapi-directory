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
var DialogflowProjectsLocationsAgentGetValidationResultPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentGetValidationResultPathParams, _super);
    function DialogflowProjectsLocationsAgentGetValidationResultPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentGetValidationResultPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentGetValidationResultPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentGetValidationResultPathParams };
var DialogflowProjectsLocationsAgentGetValidationResultQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentGetValidationResultQueryParams, _super);
    function DialogflowProjectsLocationsAgentGetValidationResultQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentGetValidationResultQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentGetValidationResultQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentGetValidationResultQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentGetValidationResultQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentGetValidationResultQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentGetValidationResultQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentGetValidationResultQueryParams.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentGetValidationResultQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentGetValidationResultQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentGetValidationResultQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentGetValidationResultQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentGetValidationResultQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentGetValidationResultQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentGetValidationResultQueryParams };
var DialogflowProjectsLocationsAgentGetValidationResultSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentGetValidationResultSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentGetValidationResultSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentGetValidationResultSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentGetValidationResultSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentGetValidationResultSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentGetValidationResultSecurityOption1 };
var DialogflowProjectsLocationsAgentGetValidationResultSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentGetValidationResultSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentGetValidationResultSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentGetValidationResultSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentGetValidationResultSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentGetValidationResultSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentGetValidationResultSecurityOption2 };
var DialogflowProjectsLocationsAgentGetValidationResultSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentGetValidationResultSecurity, _super);
    function DialogflowProjectsLocationsAgentGetValidationResultSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentGetValidationResultSecurityOption1)
    ], DialogflowProjectsLocationsAgentGetValidationResultSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentGetValidationResultSecurityOption2)
    ], DialogflowProjectsLocationsAgentGetValidationResultSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentGetValidationResultSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentGetValidationResultSecurity };
var DialogflowProjectsLocationsAgentGetValidationResultRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentGetValidationResultRequest, _super);
    function DialogflowProjectsLocationsAgentGetValidationResultRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentGetValidationResultPathParams)
    ], DialogflowProjectsLocationsAgentGetValidationResultRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentGetValidationResultQueryParams)
    ], DialogflowProjectsLocationsAgentGetValidationResultRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentGetValidationResultSecurity)
    ], DialogflowProjectsLocationsAgentGetValidationResultRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentGetValidationResultRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentGetValidationResultRequest };
var DialogflowProjectsLocationsAgentGetValidationResultResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentGetValidationResultResponse, _super);
    function DialogflowProjectsLocationsAgentGetValidationResultResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentGetValidationResultResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2ValidationResult)
    ], DialogflowProjectsLocationsAgentGetValidationResultResponse.prototype, "googleCloudDialogflowV2ValidationResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentGetValidationResultResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentGetValidationResultResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentGetValidationResultResponse };
