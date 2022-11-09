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
var NotebooksProjectsLocationsInstancesUpdateConfigPathParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesUpdateConfigPathParams, _super);
    function NotebooksProjectsLocationsInstancesUpdateConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesUpdateConfigPathParams.prototype, "name", void 0);
    return NotebooksProjectsLocationsInstancesUpdateConfigPathParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesUpdateConfigPathParams };
var NotebooksProjectsLocationsInstancesUpdateConfigQueryParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesUpdateConfigQueryParams, _super);
    function NotebooksProjectsLocationsInstancesUpdateConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesUpdateConfigQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesUpdateConfigQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesUpdateConfigQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesUpdateConfigQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesUpdateConfigQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesUpdateConfigQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesUpdateConfigQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NotebooksProjectsLocationsInstancesUpdateConfigQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesUpdateConfigQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesUpdateConfigQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesUpdateConfigQueryParams.prototype, "uploadProtocol", void 0);
    return NotebooksProjectsLocationsInstancesUpdateConfigQueryParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesUpdateConfigQueryParams };
var NotebooksProjectsLocationsInstancesUpdateConfigSecurity = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesUpdateConfigSecurity, _super);
    function NotebooksProjectsLocationsInstancesUpdateConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NotebooksProjectsLocationsInstancesUpdateConfigSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NotebooksProjectsLocationsInstancesUpdateConfigSecurity.prototype, "oauth2c", void 0);
    return NotebooksProjectsLocationsInstancesUpdateConfigSecurity;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesUpdateConfigSecurity };
var NotebooksProjectsLocationsInstancesUpdateConfigRequest = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesUpdateConfigRequest, _super);
    function NotebooksProjectsLocationsInstancesUpdateConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", NotebooksProjectsLocationsInstancesUpdateConfigPathParams)
    ], NotebooksProjectsLocationsInstancesUpdateConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NotebooksProjectsLocationsInstancesUpdateConfigQueryParams)
    ], NotebooksProjectsLocationsInstancesUpdateConfigRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateInstanceConfigRequest)
    ], NotebooksProjectsLocationsInstancesUpdateConfigRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NotebooksProjectsLocationsInstancesUpdateConfigSecurity)
    ], NotebooksProjectsLocationsInstancesUpdateConfigRequest.prototype, "security", void 0);
    return NotebooksProjectsLocationsInstancesUpdateConfigRequest;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesUpdateConfigRequest };
var NotebooksProjectsLocationsInstancesUpdateConfigResponse = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesUpdateConfigResponse, _super);
    function NotebooksProjectsLocationsInstancesUpdateConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesUpdateConfigResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], NotebooksProjectsLocationsInstancesUpdateConfigResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], NotebooksProjectsLocationsInstancesUpdateConfigResponse.prototype, "statusCode", void 0);
    return NotebooksProjectsLocationsInstancesUpdateConfigResponse;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesUpdateConfigResponse };
