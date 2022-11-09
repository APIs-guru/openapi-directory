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
var SpeechProjectsLocationsCustomClassesListPathParams = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsCustomClassesListPathParams, _super);
    function SpeechProjectsLocationsCustomClassesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsCustomClassesListPathParams.prototype, "parent", void 0);
    return SpeechProjectsLocationsCustomClassesListPathParams;
}(SpeakeasyBase));
export { SpeechProjectsLocationsCustomClassesListPathParams };
var SpeechProjectsLocationsCustomClassesListQueryParams = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsCustomClassesListQueryParams, _super);
    function SpeechProjectsLocationsCustomClassesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsCustomClassesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsCustomClassesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsCustomClassesListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsCustomClassesListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsCustomClassesListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsCustomClassesListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsCustomClassesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], SpeechProjectsLocationsCustomClassesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsCustomClassesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpeechProjectsLocationsCustomClassesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsCustomClassesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsCustomClassesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsCustomClassesListQueryParams.prototype, "uploadProtocol", void 0);
    return SpeechProjectsLocationsCustomClassesListQueryParams;
}(SpeakeasyBase));
export { SpeechProjectsLocationsCustomClassesListQueryParams };
var SpeechProjectsLocationsCustomClassesListSecurity = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsCustomClassesListSecurity, _super);
    function SpeechProjectsLocationsCustomClassesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpeechProjectsLocationsCustomClassesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpeechProjectsLocationsCustomClassesListSecurity.prototype, "oauth2c", void 0);
    return SpeechProjectsLocationsCustomClassesListSecurity;
}(SpeakeasyBase));
export { SpeechProjectsLocationsCustomClassesListSecurity };
var SpeechProjectsLocationsCustomClassesListRequest = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsCustomClassesListRequest, _super);
    function SpeechProjectsLocationsCustomClassesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SpeechProjectsLocationsCustomClassesListPathParams)
    ], SpeechProjectsLocationsCustomClassesListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SpeechProjectsLocationsCustomClassesListQueryParams)
    ], SpeechProjectsLocationsCustomClassesListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SpeechProjectsLocationsCustomClassesListSecurity)
    ], SpeechProjectsLocationsCustomClassesListRequest.prototype, "security", void 0);
    return SpeechProjectsLocationsCustomClassesListRequest;
}(SpeakeasyBase));
export { SpeechProjectsLocationsCustomClassesListRequest };
var SpeechProjectsLocationsCustomClassesListResponse = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsCustomClassesListResponse, _super);
    function SpeechProjectsLocationsCustomClassesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsCustomClassesListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListCustomClassesResponse)
    ], SpeechProjectsLocationsCustomClassesListResponse.prototype, "listCustomClassesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SpeechProjectsLocationsCustomClassesListResponse.prototype, "statusCode", void 0);
    return SpeechProjectsLocationsCustomClassesListResponse;
}(SpeakeasyBase));
export { SpeechProjectsLocationsCustomClassesListResponse };
