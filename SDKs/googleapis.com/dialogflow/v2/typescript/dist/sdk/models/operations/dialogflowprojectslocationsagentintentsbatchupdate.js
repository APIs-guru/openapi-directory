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
var DialogflowProjectsLocationsAgentIntentsBatchUpdatePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentIntentsBatchUpdatePathParams, _super);
    function DialogflowProjectsLocationsAgentIntentsBatchUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdatePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentIntentsBatchUpdatePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentIntentsBatchUpdatePathParams };
var DialogflowProjectsLocationsAgentIntentsBatchUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentIntentsBatchUpdateQueryParams, _super);
    function DialogflowProjectsLocationsAgentIntentsBatchUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentIntentsBatchUpdateQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentIntentsBatchUpdateQueryParams };
var DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption1 };
var DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption2 };
var DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurity, _super);
    function DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption1)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption2)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurity };
var DialogflowProjectsLocationsAgentIntentsBatchUpdateRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentIntentsBatchUpdateRequest, _super);
    function DialogflowProjectsLocationsAgentIntentsBatchUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentIntentsBatchUpdatePathParams)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentIntentsBatchUpdateQueryParams)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2BatchUpdateIntentsRequestInput)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurity)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdateRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentIntentsBatchUpdateRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentIntentsBatchUpdateRequest };
var DialogflowProjectsLocationsAgentIntentsBatchUpdateResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentIntentsBatchUpdateResponse, _super);
    function DialogflowProjectsLocationsAgentIntentsBatchUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentIntentsBatchUpdateResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentIntentsBatchUpdateResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentIntentsBatchUpdateResponse };
