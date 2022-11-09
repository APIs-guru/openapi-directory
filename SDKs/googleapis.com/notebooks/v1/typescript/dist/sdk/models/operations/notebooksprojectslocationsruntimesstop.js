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
var NotebooksProjectsLocationsRuntimesStopPathParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesStopPathParams, _super);
    function NotebooksProjectsLocationsRuntimesStopPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesStopPathParams.prototype, "name", void 0);
    return NotebooksProjectsLocationsRuntimesStopPathParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesStopPathParams };
var NotebooksProjectsLocationsRuntimesStopQueryParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesStopQueryParams, _super);
    function NotebooksProjectsLocationsRuntimesStopQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesStopQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesStopQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesStopQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesStopQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesStopQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesStopQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesStopQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NotebooksProjectsLocationsRuntimesStopQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesStopQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesStopQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesStopQueryParams.prototype, "uploadProtocol", void 0);
    return NotebooksProjectsLocationsRuntimesStopQueryParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesStopQueryParams };
var NotebooksProjectsLocationsRuntimesStopSecurity = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesStopSecurity, _super);
    function NotebooksProjectsLocationsRuntimesStopSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NotebooksProjectsLocationsRuntimesStopSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NotebooksProjectsLocationsRuntimesStopSecurity.prototype, "oauth2c", void 0);
    return NotebooksProjectsLocationsRuntimesStopSecurity;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesStopSecurity };
var NotebooksProjectsLocationsRuntimesStopRequest = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesStopRequest, _super);
    function NotebooksProjectsLocationsRuntimesStopRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", NotebooksProjectsLocationsRuntimesStopPathParams)
    ], NotebooksProjectsLocationsRuntimesStopRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NotebooksProjectsLocationsRuntimesStopQueryParams)
    ], NotebooksProjectsLocationsRuntimesStopRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StopRuntimeRequest)
    ], NotebooksProjectsLocationsRuntimesStopRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NotebooksProjectsLocationsRuntimesStopSecurity)
    ], NotebooksProjectsLocationsRuntimesStopRequest.prototype, "security", void 0);
    return NotebooksProjectsLocationsRuntimesStopRequest;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesStopRequest };
var NotebooksProjectsLocationsRuntimesStopResponse = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesStopResponse, _super);
    function NotebooksProjectsLocationsRuntimesStopResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesStopResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], NotebooksProjectsLocationsRuntimesStopResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], NotebooksProjectsLocationsRuntimesStopResponse.prototype, "statusCode", void 0);
    return NotebooksProjectsLocationsRuntimesStopResponse;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesStopResponse };
