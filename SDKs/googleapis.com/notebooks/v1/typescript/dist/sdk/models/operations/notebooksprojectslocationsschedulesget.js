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
var NotebooksProjectsLocationsSchedulesGetPathParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsSchedulesGetPathParams, _super);
    function NotebooksProjectsLocationsSchedulesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesGetPathParams.prototype, "name", void 0);
    return NotebooksProjectsLocationsSchedulesGetPathParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsSchedulesGetPathParams };
var NotebooksProjectsLocationsSchedulesGetQueryParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsSchedulesGetQueryParams, _super);
    function NotebooksProjectsLocationsSchedulesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NotebooksProjectsLocationsSchedulesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesGetQueryParams.prototype, "uploadProtocol", void 0);
    return NotebooksProjectsLocationsSchedulesGetQueryParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsSchedulesGetQueryParams };
var NotebooksProjectsLocationsSchedulesGetSecurity = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsSchedulesGetSecurity, _super);
    function NotebooksProjectsLocationsSchedulesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NotebooksProjectsLocationsSchedulesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NotebooksProjectsLocationsSchedulesGetSecurity.prototype, "oauth2c", void 0);
    return NotebooksProjectsLocationsSchedulesGetSecurity;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsSchedulesGetSecurity };
var NotebooksProjectsLocationsSchedulesGetRequest = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsSchedulesGetRequest, _super);
    function NotebooksProjectsLocationsSchedulesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", NotebooksProjectsLocationsSchedulesGetPathParams)
    ], NotebooksProjectsLocationsSchedulesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NotebooksProjectsLocationsSchedulesGetQueryParams)
    ], NotebooksProjectsLocationsSchedulesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NotebooksProjectsLocationsSchedulesGetSecurity)
    ], NotebooksProjectsLocationsSchedulesGetRequest.prototype, "security", void 0);
    return NotebooksProjectsLocationsSchedulesGetRequest;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsSchedulesGetRequest };
var NotebooksProjectsLocationsSchedulesGetResponse = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsSchedulesGetResponse, _super);
    function NotebooksProjectsLocationsSchedulesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsSchedulesGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Schedule)
    ], NotebooksProjectsLocationsSchedulesGetResponse.prototype, "schedule", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], NotebooksProjectsLocationsSchedulesGetResponse.prototype, "statusCode", void 0);
    return NotebooksProjectsLocationsSchedulesGetResponse;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsSchedulesGetResponse };
