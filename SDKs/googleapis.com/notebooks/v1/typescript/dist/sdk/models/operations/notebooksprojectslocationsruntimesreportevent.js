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
var NotebooksProjectsLocationsRuntimesReportEventPathParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesReportEventPathParams, _super);
    function NotebooksProjectsLocationsRuntimesReportEventPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesReportEventPathParams.prototype, "name", void 0);
    return NotebooksProjectsLocationsRuntimesReportEventPathParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesReportEventPathParams };
var NotebooksProjectsLocationsRuntimesReportEventQueryParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesReportEventQueryParams, _super);
    function NotebooksProjectsLocationsRuntimesReportEventQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesReportEventQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesReportEventQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesReportEventQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesReportEventQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesReportEventQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesReportEventQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesReportEventQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NotebooksProjectsLocationsRuntimesReportEventQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesReportEventQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesReportEventQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesReportEventQueryParams.prototype, "uploadProtocol", void 0);
    return NotebooksProjectsLocationsRuntimesReportEventQueryParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesReportEventQueryParams };
var NotebooksProjectsLocationsRuntimesReportEventSecurity = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesReportEventSecurity, _super);
    function NotebooksProjectsLocationsRuntimesReportEventSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NotebooksProjectsLocationsRuntimesReportEventSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NotebooksProjectsLocationsRuntimesReportEventSecurity.prototype, "oauth2c", void 0);
    return NotebooksProjectsLocationsRuntimesReportEventSecurity;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesReportEventSecurity };
var NotebooksProjectsLocationsRuntimesReportEventRequest = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesReportEventRequest, _super);
    function NotebooksProjectsLocationsRuntimesReportEventRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", NotebooksProjectsLocationsRuntimesReportEventPathParams)
    ], NotebooksProjectsLocationsRuntimesReportEventRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NotebooksProjectsLocationsRuntimesReportEventQueryParams)
    ], NotebooksProjectsLocationsRuntimesReportEventRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReportRuntimeEventRequest)
    ], NotebooksProjectsLocationsRuntimesReportEventRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NotebooksProjectsLocationsRuntimesReportEventSecurity)
    ], NotebooksProjectsLocationsRuntimesReportEventRequest.prototype, "security", void 0);
    return NotebooksProjectsLocationsRuntimesReportEventRequest;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesReportEventRequest };
var NotebooksProjectsLocationsRuntimesReportEventResponse = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesReportEventResponse, _super);
    function NotebooksProjectsLocationsRuntimesReportEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesReportEventResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], NotebooksProjectsLocationsRuntimesReportEventResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], NotebooksProjectsLocationsRuntimesReportEventResponse.prototype, "statusCode", void 0);
    return NotebooksProjectsLocationsRuntimesReportEventResponse;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesReportEventResponse };
