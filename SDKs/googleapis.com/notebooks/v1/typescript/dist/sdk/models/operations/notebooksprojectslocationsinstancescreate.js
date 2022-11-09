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
var NotebooksProjectsLocationsInstancesCreatePathParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesCreatePathParams, _super);
    function NotebooksProjectsLocationsInstancesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesCreatePathParams.prototype, "parent", void 0);
    return NotebooksProjectsLocationsInstancesCreatePathParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesCreatePathParams };
var NotebooksProjectsLocationsInstancesCreateQueryParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesCreateQueryParams, _super);
    function NotebooksProjectsLocationsInstancesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=instanceId" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesCreateQueryParams.prototype, "instanceId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NotebooksProjectsLocationsInstancesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return NotebooksProjectsLocationsInstancesCreateQueryParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesCreateQueryParams };
var NotebooksProjectsLocationsInstancesCreateSecurity = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesCreateSecurity, _super);
    function NotebooksProjectsLocationsInstancesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NotebooksProjectsLocationsInstancesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NotebooksProjectsLocationsInstancesCreateSecurity.prototype, "oauth2c", void 0);
    return NotebooksProjectsLocationsInstancesCreateSecurity;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesCreateSecurity };
var NotebooksProjectsLocationsInstancesCreateRequest = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesCreateRequest, _super);
    function NotebooksProjectsLocationsInstancesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", NotebooksProjectsLocationsInstancesCreatePathParams)
    ], NotebooksProjectsLocationsInstancesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NotebooksProjectsLocationsInstancesCreateQueryParams)
    ], NotebooksProjectsLocationsInstancesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Instance)
    ], NotebooksProjectsLocationsInstancesCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NotebooksProjectsLocationsInstancesCreateSecurity)
    ], NotebooksProjectsLocationsInstancesCreateRequest.prototype, "security", void 0);
    return NotebooksProjectsLocationsInstancesCreateRequest;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesCreateRequest };
var NotebooksProjectsLocationsInstancesCreateResponse = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsInstancesCreateResponse, _super);
    function NotebooksProjectsLocationsInstancesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsInstancesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], NotebooksProjectsLocationsInstancesCreateResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], NotebooksProjectsLocationsInstancesCreateResponse.prototype, "statusCode", void 0);
    return NotebooksProjectsLocationsInstancesCreateResponse;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsInstancesCreateResponse };
