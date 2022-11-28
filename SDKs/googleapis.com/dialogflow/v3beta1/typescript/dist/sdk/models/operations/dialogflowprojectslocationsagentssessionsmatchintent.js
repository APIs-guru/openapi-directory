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
var DialogflowProjectsLocationsAgentsSessionsMatchIntentPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsMatchIntentPathParams, _super);
    function DialogflowProjectsLocationsAgentsSessionsMatchIntentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=session" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentPathParams.prototype, "session", void 0);
    return DialogflowProjectsLocationsAgentsSessionsMatchIntentPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsMatchIntentPathParams };
var DialogflowProjectsLocationsAgentsSessionsMatchIntentQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsMatchIntentQueryParams, _super);
    function DialogflowProjectsLocationsAgentsSessionsMatchIntentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsSessionsMatchIntentQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsMatchIntentQueryParams };
var DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption1 };
var DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption2 };
var DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurity, _super);
    function DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption1)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption2)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurity };
var DialogflowProjectsLocationsAgentsSessionsMatchIntentRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsMatchIntentRequest, _super);
    function DialogflowProjectsLocationsAgentsSessionsMatchIntentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsMatchIntentPathParams)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsMatchIntentQueryParams)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3beta1MatchIntentRequest)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurity)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsSessionsMatchIntentRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsMatchIntentRequest };
var DialogflowProjectsLocationsAgentsSessionsMatchIntentResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsMatchIntentResponse, _super);
    function DialogflowProjectsLocationsAgentsSessionsMatchIntentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3beta1MatchIntentResponse)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentResponse.prototype, "googleCloudDialogflowCxV3beta1MatchIntentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsSessionsMatchIntentResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsSessionsMatchIntentResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsMatchIntentResponse };
