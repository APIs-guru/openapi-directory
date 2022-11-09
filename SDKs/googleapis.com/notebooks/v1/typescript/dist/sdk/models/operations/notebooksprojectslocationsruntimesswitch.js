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
var NotebooksProjectsLocationsRuntimesSwitchPathParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesSwitchPathParams, _super);
    function NotebooksProjectsLocationsRuntimesSwitchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesSwitchPathParams.prototype, "name", void 0);
    return NotebooksProjectsLocationsRuntimesSwitchPathParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesSwitchPathParams };
var NotebooksProjectsLocationsRuntimesSwitchQueryParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesSwitchQueryParams, _super);
    function NotebooksProjectsLocationsRuntimesSwitchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesSwitchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesSwitchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesSwitchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesSwitchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesSwitchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesSwitchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesSwitchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NotebooksProjectsLocationsRuntimesSwitchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesSwitchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesSwitchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesSwitchQueryParams.prototype, "uploadProtocol", void 0);
    return NotebooksProjectsLocationsRuntimesSwitchQueryParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesSwitchQueryParams };
var NotebooksProjectsLocationsRuntimesSwitchSecurity = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesSwitchSecurity, _super);
    function NotebooksProjectsLocationsRuntimesSwitchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NotebooksProjectsLocationsRuntimesSwitchSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NotebooksProjectsLocationsRuntimesSwitchSecurity.prototype, "oauth2c", void 0);
    return NotebooksProjectsLocationsRuntimesSwitchSecurity;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesSwitchSecurity };
var NotebooksProjectsLocationsRuntimesSwitchRequest = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesSwitchRequest, _super);
    function NotebooksProjectsLocationsRuntimesSwitchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", NotebooksProjectsLocationsRuntimesSwitchPathParams)
    ], NotebooksProjectsLocationsRuntimesSwitchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NotebooksProjectsLocationsRuntimesSwitchQueryParams)
    ], NotebooksProjectsLocationsRuntimesSwitchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SwitchRuntimeRequest)
    ], NotebooksProjectsLocationsRuntimesSwitchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NotebooksProjectsLocationsRuntimesSwitchSecurity)
    ], NotebooksProjectsLocationsRuntimesSwitchRequest.prototype, "security", void 0);
    return NotebooksProjectsLocationsRuntimesSwitchRequest;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesSwitchRequest };
var NotebooksProjectsLocationsRuntimesSwitchResponse = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesSwitchResponse, _super);
    function NotebooksProjectsLocationsRuntimesSwitchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesSwitchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], NotebooksProjectsLocationsRuntimesSwitchResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], NotebooksProjectsLocationsRuntimesSwitchResponse.prototype, "statusCode", void 0);
    return NotebooksProjectsLocationsRuntimesSwitchResponse;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesSwitchResponse };
