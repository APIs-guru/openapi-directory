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
var DialogflowProjectsLocationsAgentsSessionsFulfillIntentPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsFulfillIntentPathParams, _super);
    function DialogflowProjectsLocationsAgentsSessionsFulfillIntentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=session" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentPathParams.prototype, "session", void 0);
    return DialogflowProjectsLocationsAgentsSessionsFulfillIntentPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsFulfillIntentPathParams };
var DialogflowProjectsLocationsAgentsSessionsFulfillIntentQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsFulfillIntentQueryParams, _super);
    function DialogflowProjectsLocationsAgentsSessionsFulfillIntentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsSessionsFulfillIntentQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsFulfillIntentQueryParams };
var DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption1 };
var DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption2 };
var DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurity, _super);
    function DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption1)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption2)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurity };
var DialogflowProjectsLocationsAgentsSessionsFulfillIntentRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsFulfillIntentRequest, _super);
    function DialogflowProjectsLocationsAgentsSessionsFulfillIntentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsFulfillIntentPathParams)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsFulfillIntentQueryParams)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3beta1FulfillIntentRequest)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurity)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsSessionsFulfillIntentRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsFulfillIntentRequest };
var DialogflowProjectsLocationsAgentsSessionsFulfillIntentResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsFulfillIntentResponse, _super);
    function DialogflowProjectsLocationsAgentsSessionsFulfillIntentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3beta1FulfillIntentResponse)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentResponse.prototype, "googleCloudDialogflowCxV3beta1FulfillIntentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsSessionsFulfillIntentResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsSessionsFulfillIntentResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsFulfillIntentResponse };
