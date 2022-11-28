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
var DialogflowProjectsLocationsAgentImportPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentImportPathParams, _super);
    function DialogflowProjectsLocationsAgentImportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentImportPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentImportPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentImportPathParams };
var DialogflowProjectsLocationsAgentImportQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentImportQueryParams, _super);
    function DialogflowProjectsLocationsAgentImportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentImportQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentImportQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentImportQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentImportQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentImportQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentImportQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentImportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentImportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentImportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentImportQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentImportQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentImportQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentImportQueryParams };
var DialogflowProjectsLocationsAgentImportSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentImportSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentImportSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentImportSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentImportSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentImportSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentImportSecurityOption1 };
var DialogflowProjectsLocationsAgentImportSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentImportSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentImportSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentImportSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentImportSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentImportSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentImportSecurityOption2 };
var DialogflowProjectsLocationsAgentImportSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentImportSecurity, _super);
    function DialogflowProjectsLocationsAgentImportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentImportSecurityOption1)
    ], DialogflowProjectsLocationsAgentImportSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentImportSecurityOption2)
    ], DialogflowProjectsLocationsAgentImportSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentImportSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentImportSecurity };
var DialogflowProjectsLocationsAgentImportRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentImportRequest, _super);
    function DialogflowProjectsLocationsAgentImportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentImportPathParams)
    ], DialogflowProjectsLocationsAgentImportRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentImportQueryParams)
    ], DialogflowProjectsLocationsAgentImportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1ImportAgentRequest)
    ], DialogflowProjectsLocationsAgentImportRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentImportSecurity)
    ], DialogflowProjectsLocationsAgentImportRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentImportRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentImportRequest };
var DialogflowProjectsLocationsAgentImportResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentImportResponse, _super);
    function DialogflowProjectsLocationsAgentImportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentImportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsAgentImportResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentImportResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentImportResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentImportResponse };
