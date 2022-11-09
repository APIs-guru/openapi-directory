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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var ClouderrorreportingProjectsEventsReportPathParams = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsEventsReportPathParams, _super);
    function ClouderrorreportingProjectsEventsReportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=projectName" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsReportPathParams.prototype, "projectName", void 0);
    return ClouderrorreportingProjectsEventsReportPathParams;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsEventsReportPathParams };
var ClouderrorreportingProjectsEventsReportQueryParams = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsEventsReportQueryParams, _super);
    function ClouderrorreportingProjectsEventsReportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsReportQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsReportQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsReportQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsReportQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsReportQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsReportQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsReportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClouderrorreportingProjectsEventsReportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsReportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsReportQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsReportQueryParams.prototype, "uploadProtocol", void 0);
    return ClouderrorreportingProjectsEventsReportQueryParams;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsEventsReportQueryParams };
var ClouderrorreportingProjectsEventsReportSecurity = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsEventsReportSecurity, _super);
    function ClouderrorreportingProjectsEventsReportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouderrorreportingProjectsEventsReportSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouderrorreportingProjectsEventsReportSecurity.prototype, "oauth2c", void 0);
    return ClouderrorreportingProjectsEventsReportSecurity;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsEventsReportSecurity };
var ClouderrorreportingProjectsEventsReportRequest = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsEventsReportRequest, _super);
    function ClouderrorreportingProjectsEventsReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ClouderrorreportingProjectsEventsReportPathParams)
    ], ClouderrorreportingProjectsEventsReportRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClouderrorreportingProjectsEventsReportQueryParams)
    ], ClouderrorreportingProjectsEventsReportRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReportedErrorEvent)
    ], ClouderrorreportingProjectsEventsReportRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClouderrorreportingProjectsEventsReportSecurity)
    ], ClouderrorreportingProjectsEventsReportRequest.prototype, "security", void 0);
    return ClouderrorreportingProjectsEventsReportRequest;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsEventsReportRequest };
var ClouderrorreportingProjectsEventsReportResponse = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsEventsReportResponse, _super);
    function ClouderrorreportingProjectsEventsReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsEventsReportResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], ClouderrorreportingProjectsEventsReportResponse.prototype, "reportErrorEventResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ClouderrorreportingProjectsEventsReportResponse.prototype, "statusCode", void 0);
    return ClouderrorreportingProjectsEventsReportResponse;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsEventsReportResponse };
