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
var DialogflowProjectsLocationsAgentSessionsDetectIntentPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsDetectIntentPathParams, _super);
    function DialogflowProjectsLocationsAgentSessionsDetectIntentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=session" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentPathParams.prototype, "session", void 0);
    return DialogflowProjectsLocationsAgentSessionsDetectIntentPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsDetectIntentPathParams };
var DialogflowProjectsLocationsAgentSessionsDetectIntentQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsDetectIntentQueryParams, _super);
    function DialogflowProjectsLocationsAgentSessionsDetectIntentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentSessionsDetectIntentQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsDetectIntentQueryParams };
var DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption1 };
var DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption2 };
var DialogflowProjectsLocationsAgentSessionsDetectIntentSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsDetectIntentSecurity, _super);
    function DialogflowProjectsLocationsAgentSessionsDetectIntentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption1)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption2)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentSessionsDetectIntentSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsDetectIntentSecurity };
var DialogflowProjectsLocationsAgentSessionsDetectIntentRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsDetectIntentRequest, _super);
    function DialogflowProjectsLocationsAgentSessionsDetectIntentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsDetectIntentPathParams)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsDetectIntentQueryParams)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2DetectIntentRequest)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsDetectIntentSecurity)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentSessionsDetectIntentRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsDetectIntentRequest };
var DialogflowProjectsLocationsAgentSessionsDetectIntentResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsDetectIntentResponse, _super);
    function DialogflowProjectsLocationsAgentSessionsDetectIntentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2DetectIntentResponse)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentResponse.prototype, "googleCloudDialogflowV2DetectIntentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentSessionsDetectIntentResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentSessionsDetectIntentResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsDetectIntentResponse };
