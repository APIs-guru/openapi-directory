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
var DialogflowProjectsLocationsAgentRestorePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentRestorePathParams, _super);
    function DialogflowProjectsLocationsAgentRestorePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentRestorePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentRestorePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentRestorePathParams };
var DialogflowProjectsLocationsAgentRestoreQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentRestoreQueryParams, _super);
    function DialogflowProjectsLocationsAgentRestoreQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentRestoreQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentRestoreQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentRestoreQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentRestoreQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentRestoreQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentRestoreQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentRestoreQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentRestoreQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentRestoreQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentRestoreQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentRestoreQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentRestoreQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentRestoreQueryParams };
var DialogflowProjectsLocationsAgentRestoreSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentRestoreSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentRestoreSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentRestoreSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentRestoreSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentRestoreSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentRestoreSecurityOption1 };
var DialogflowProjectsLocationsAgentRestoreSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentRestoreSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentRestoreSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentRestoreSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentRestoreSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentRestoreSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentRestoreSecurityOption2 };
var DialogflowProjectsLocationsAgentRestoreSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentRestoreSecurity, _super);
    function DialogflowProjectsLocationsAgentRestoreSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentRestoreSecurityOption1)
    ], DialogflowProjectsLocationsAgentRestoreSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentRestoreSecurityOption2)
    ], DialogflowProjectsLocationsAgentRestoreSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentRestoreSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentRestoreSecurity };
var DialogflowProjectsLocationsAgentRestoreRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentRestoreRequest, _super);
    function DialogflowProjectsLocationsAgentRestoreRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentRestorePathParams)
    ], DialogflowProjectsLocationsAgentRestoreRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentRestoreQueryParams)
    ], DialogflowProjectsLocationsAgentRestoreRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2RestoreAgentRequest)
    ], DialogflowProjectsLocationsAgentRestoreRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentRestoreSecurity)
    ], DialogflowProjectsLocationsAgentRestoreRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentRestoreRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentRestoreRequest };
var DialogflowProjectsLocationsAgentRestoreResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentRestoreResponse, _super);
    function DialogflowProjectsLocationsAgentRestoreResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentRestoreResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsAgentRestoreResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentRestoreResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentRestoreResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentRestoreResponse };
