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
var DialogflowProjectsLocationsAgentsSessionsDetectIntentPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsDetectIntentPathParams, _super);
    function DialogflowProjectsLocationsAgentsSessionsDetectIntentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=session" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentPathParams.prototype, "session", void 0);
    return DialogflowProjectsLocationsAgentsSessionsDetectIntentPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsDetectIntentPathParams };
var DialogflowProjectsLocationsAgentsSessionsDetectIntentQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsDetectIntentQueryParams, _super);
    function DialogflowProjectsLocationsAgentsSessionsDetectIntentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsSessionsDetectIntentQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsDetectIntentQueryParams };
var DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurityOption1 };
var DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurityOption2 };
var DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurity, _super);
    function DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurityOption1)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurityOption2)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurity };
var DialogflowProjectsLocationsAgentsSessionsDetectIntentRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsDetectIntentRequest, _super);
    function DialogflowProjectsLocationsAgentsSessionsDetectIntentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsDetectIntentPathParams)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsDetectIntentQueryParams)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3DetectIntentRequest)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurity)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsSessionsDetectIntentRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsDetectIntentRequest };
var DialogflowProjectsLocationsAgentsSessionsDetectIntentResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsDetectIntentResponse, _super);
    function DialogflowProjectsLocationsAgentsSessionsDetectIntentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3DetectIntentResponse)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentResponse.prototype, "googleCloudDialogflowCxV3DetectIntentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsSessionsDetectIntentResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsSessionsDetectIntentResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsDetectIntentResponse };
