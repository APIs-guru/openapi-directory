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
var ComposerProjectsLocationsEnvironmentsRestartWebServerPathParams = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsRestartWebServerPathParams, _super);
    function ComposerProjectsLocationsEnvironmentsRestartWebServerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsRestartWebServerPathParams.prototype, "name", void 0);
    return ComposerProjectsLocationsEnvironmentsRestartWebServerPathParams;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsRestartWebServerPathParams };
var ComposerProjectsLocationsEnvironmentsRestartWebServerQueryParams = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsRestartWebServerQueryParams, _super);
    function ComposerProjectsLocationsEnvironmentsRestartWebServerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsRestartWebServerQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsRestartWebServerQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsRestartWebServerQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsRestartWebServerQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsRestartWebServerQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsRestartWebServerQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsRestartWebServerQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ComposerProjectsLocationsEnvironmentsRestartWebServerQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsRestartWebServerQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsRestartWebServerQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsRestartWebServerQueryParams.prototype, "uploadProtocol", void 0);
    return ComposerProjectsLocationsEnvironmentsRestartWebServerQueryParams;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsRestartWebServerQueryParams };
var ComposerProjectsLocationsEnvironmentsRestartWebServerSecurity = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsRestartWebServerSecurity, _super);
    function ComposerProjectsLocationsEnvironmentsRestartWebServerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ComposerProjectsLocationsEnvironmentsRestartWebServerSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ComposerProjectsLocationsEnvironmentsRestartWebServerSecurity.prototype, "oauth2c", void 0);
    return ComposerProjectsLocationsEnvironmentsRestartWebServerSecurity;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsRestartWebServerSecurity };
var ComposerProjectsLocationsEnvironmentsRestartWebServerRequest = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsRestartWebServerRequest, _super);
    function ComposerProjectsLocationsEnvironmentsRestartWebServerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ComposerProjectsLocationsEnvironmentsRestartWebServerPathParams)
    ], ComposerProjectsLocationsEnvironmentsRestartWebServerRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComposerProjectsLocationsEnvironmentsRestartWebServerQueryParams)
    ], ComposerProjectsLocationsEnvironmentsRestartWebServerRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], ComposerProjectsLocationsEnvironmentsRestartWebServerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComposerProjectsLocationsEnvironmentsRestartWebServerSecurity)
    ], ComposerProjectsLocationsEnvironmentsRestartWebServerRequest.prototype, "security", void 0);
    return ComposerProjectsLocationsEnvironmentsRestartWebServerRequest;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsRestartWebServerRequest };
var ComposerProjectsLocationsEnvironmentsRestartWebServerResponse = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsRestartWebServerResponse, _super);
    function ComposerProjectsLocationsEnvironmentsRestartWebServerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsRestartWebServerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], ComposerProjectsLocationsEnvironmentsRestartWebServerResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ComposerProjectsLocationsEnvironmentsRestartWebServerResponse.prototype, "statusCode", void 0);
    return ComposerProjectsLocationsEnvironmentsRestartWebServerResponse;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsRestartWebServerResponse };
