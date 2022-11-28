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
var DialogflowProjectsLocationsAgentsFlowsExportPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsExportPathParams, _super);
    function DialogflowProjectsLocationsAgentsFlowsExportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsExportPathParams.prototype, "name", void 0);
    return DialogflowProjectsLocationsAgentsFlowsExportPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsExportPathParams };
var DialogflowProjectsLocationsAgentsFlowsExportQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsExportQueryParams, _super);
    function DialogflowProjectsLocationsAgentsFlowsExportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsExportQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsExportQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsExportQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsExportQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsExportQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsExportQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsExportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsFlowsExportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsExportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsExportQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsExportQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsFlowsExportQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsExportQueryParams };
var DialogflowProjectsLocationsAgentsFlowsExportSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsExportSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsFlowsExportSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsFlowsExportSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsFlowsExportSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsFlowsExportSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsExportSecurityOption1 };
var DialogflowProjectsLocationsAgentsFlowsExportSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsExportSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsFlowsExportSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsFlowsExportSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsFlowsExportSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsFlowsExportSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsExportSecurityOption2 };
var DialogflowProjectsLocationsAgentsFlowsExportSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsExportSecurity, _super);
    function DialogflowProjectsLocationsAgentsFlowsExportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsExportSecurityOption1)
    ], DialogflowProjectsLocationsAgentsFlowsExportSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsExportSecurityOption2)
    ], DialogflowProjectsLocationsAgentsFlowsExportSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsFlowsExportSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsExportSecurity };
var DialogflowProjectsLocationsAgentsFlowsExportRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsExportRequest, _super);
    function DialogflowProjectsLocationsAgentsFlowsExportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsExportPathParams)
    ], DialogflowProjectsLocationsAgentsFlowsExportRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsExportQueryParams)
    ], DialogflowProjectsLocationsAgentsFlowsExportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3beta1ExportFlowRequest)
    ], DialogflowProjectsLocationsAgentsFlowsExportRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsExportSecurity)
    ], DialogflowProjectsLocationsAgentsFlowsExportRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsFlowsExportRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsExportRequest };
var DialogflowProjectsLocationsAgentsFlowsExportResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsExportResponse, _super);
    function DialogflowProjectsLocationsAgentsFlowsExportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsExportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsAgentsFlowsExportResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsFlowsExportResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsFlowsExportResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsExportResponse };
