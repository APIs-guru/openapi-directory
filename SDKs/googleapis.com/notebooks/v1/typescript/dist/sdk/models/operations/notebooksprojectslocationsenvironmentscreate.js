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
var NotebooksProjectsLocationsEnvironmentsCreatePathParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsEnvironmentsCreatePathParams, _super);
    function NotebooksProjectsLocationsEnvironmentsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsEnvironmentsCreatePathParams.prototype, "parent", void 0);
    return NotebooksProjectsLocationsEnvironmentsCreatePathParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsEnvironmentsCreatePathParams };
var NotebooksProjectsLocationsEnvironmentsCreateQueryParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsEnvironmentsCreateQueryParams, _super);
    function NotebooksProjectsLocationsEnvironmentsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsEnvironmentsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsEnvironmentsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsEnvironmentsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsEnvironmentsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=environmentId" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsEnvironmentsCreateQueryParams.prototype, "environmentId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsEnvironmentsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsEnvironmentsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsEnvironmentsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NotebooksProjectsLocationsEnvironmentsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsEnvironmentsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsEnvironmentsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsEnvironmentsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return NotebooksProjectsLocationsEnvironmentsCreateQueryParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsEnvironmentsCreateQueryParams };
var NotebooksProjectsLocationsEnvironmentsCreateSecurity = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsEnvironmentsCreateSecurity, _super);
    function NotebooksProjectsLocationsEnvironmentsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NotebooksProjectsLocationsEnvironmentsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NotebooksProjectsLocationsEnvironmentsCreateSecurity.prototype, "oauth2c", void 0);
    return NotebooksProjectsLocationsEnvironmentsCreateSecurity;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsEnvironmentsCreateSecurity };
var NotebooksProjectsLocationsEnvironmentsCreateRequest = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsEnvironmentsCreateRequest, _super);
    function NotebooksProjectsLocationsEnvironmentsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", NotebooksProjectsLocationsEnvironmentsCreatePathParams)
    ], NotebooksProjectsLocationsEnvironmentsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NotebooksProjectsLocationsEnvironmentsCreateQueryParams)
    ], NotebooksProjectsLocationsEnvironmentsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Environment)
    ], NotebooksProjectsLocationsEnvironmentsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NotebooksProjectsLocationsEnvironmentsCreateSecurity)
    ], NotebooksProjectsLocationsEnvironmentsCreateRequest.prototype, "security", void 0);
    return NotebooksProjectsLocationsEnvironmentsCreateRequest;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsEnvironmentsCreateRequest };
var NotebooksProjectsLocationsEnvironmentsCreateResponse = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsEnvironmentsCreateResponse, _super);
    function NotebooksProjectsLocationsEnvironmentsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsEnvironmentsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], NotebooksProjectsLocationsEnvironmentsCreateResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], NotebooksProjectsLocationsEnvironmentsCreateResponse.prototype, "statusCode", void 0);
    return NotebooksProjectsLocationsEnvironmentsCreateResponse;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsEnvironmentsCreateResponse };
