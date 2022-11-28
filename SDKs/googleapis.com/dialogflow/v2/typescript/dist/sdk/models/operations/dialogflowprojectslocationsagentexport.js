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
var DialogflowProjectsLocationsAgentExportPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentExportPathParams, _super);
    function DialogflowProjectsLocationsAgentExportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentExportPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentExportPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentExportPathParams };
var DialogflowProjectsLocationsAgentExportQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentExportQueryParams, _super);
    function DialogflowProjectsLocationsAgentExportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentExportQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentExportQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentExportQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentExportQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentExportQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentExportQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentExportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentExportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentExportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentExportQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentExportQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentExportQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentExportQueryParams };
var DialogflowProjectsLocationsAgentExportSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentExportSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentExportSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentExportSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentExportSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentExportSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentExportSecurityOption1 };
var DialogflowProjectsLocationsAgentExportSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentExportSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentExportSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentExportSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentExportSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentExportSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentExportSecurityOption2 };
var DialogflowProjectsLocationsAgentExportSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentExportSecurity, _super);
    function DialogflowProjectsLocationsAgentExportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentExportSecurityOption1)
    ], DialogflowProjectsLocationsAgentExportSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentExportSecurityOption2)
    ], DialogflowProjectsLocationsAgentExportSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentExportSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentExportSecurity };
var DialogflowProjectsLocationsAgentExportRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentExportRequest, _super);
    function DialogflowProjectsLocationsAgentExportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentExportPathParams)
    ], DialogflowProjectsLocationsAgentExportRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentExportQueryParams)
    ], DialogflowProjectsLocationsAgentExportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2ExportAgentRequest)
    ], DialogflowProjectsLocationsAgentExportRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentExportSecurity)
    ], DialogflowProjectsLocationsAgentExportRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentExportRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentExportRequest };
var DialogflowProjectsLocationsAgentExportResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentExportResponse, _super);
    function DialogflowProjectsLocationsAgentExportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentExportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsAgentExportResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentExportResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentExportResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentExportResponse };
