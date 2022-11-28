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
var DialogflowProjectsLocationsAgentsRestorePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsRestorePathParams, _super);
    function DialogflowProjectsLocationsAgentsRestorePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsRestorePathParams.prototype, "name", void 0);
    return DialogflowProjectsLocationsAgentsRestorePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsRestorePathParams };
var DialogflowProjectsLocationsAgentsRestoreQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsRestoreQueryParams, _super);
    function DialogflowProjectsLocationsAgentsRestoreQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsRestoreQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsRestoreQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsRestoreQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsRestoreQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsRestoreQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsRestoreQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsRestoreQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsRestoreQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsRestoreQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsRestoreQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsRestoreQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsRestoreQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsRestoreQueryParams };
var DialogflowProjectsLocationsAgentsRestoreSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsRestoreSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsRestoreSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsRestoreSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsRestoreSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsRestoreSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsRestoreSecurityOption1 };
var DialogflowProjectsLocationsAgentsRestoreSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsRestoreSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsRestoreSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsRestoreSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsRestoreSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsRestoreSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsRestoreSecurityOption2 };
var DialogflowProjectsLocationsAgentsRestoreSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsRestoreSecurity, _super);
    function DialogflowProjectsLocationsAgentsRestoreSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsRestoreSecurityOption1)
    ], DialogflowProjectsLocationsAgentsRestoreSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsRestoreSecurityOption2)
    ], DialogflowProjectsLocationsAgentsRestoreSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsRestoreSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsRestoreSecurity };
var DialogflowProjectsLocationsAgentsRestoreRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsRestoreRequest, _super);
    function DialogflowProjectsLocationsAgentsRestoreRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsRestorePathParams)
    ], DialogflowProjectsLocationsAgentsRestoreRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsRestoreQueryParams)
    ], DialogflowProjectsLocationsAgentsRestoreRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3beta1RestoreAgentRequest)
    ], DialogflowProjectsLocationsAgentsRestoreRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsRestoreSecurity)
    ], DialogflowProjectsLocationsAgentsRestoreRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsRestoreRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsRestoreRequest };
var DialogflowProjectsLocationsAgentsRestoreResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsRestoreResponse, _super);
    function DialogflowProjectsLocationsAgentsRestoreResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsRestoreResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsAgentsRestoreResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsRestoreResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsRestoreResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsRestoreResponse };
