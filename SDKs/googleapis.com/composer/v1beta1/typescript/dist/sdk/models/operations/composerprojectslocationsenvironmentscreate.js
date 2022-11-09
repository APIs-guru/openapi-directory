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
var ComposerProjectsLocationsEnvironmentsCreatePathParams = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsCreatePathParams, _super);
    function ComposerProjectsLocationsEnvironmentsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsCreatePathParams.prototype, "parent", void 0);
    return ComposerProjectsLocationsEnvironmentsCreatePathParams;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsCreatePathParams };
var ComposerProjectsLocationsEnvironmentsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsCreateQueryParams, _super);
    function ComposerProjectsLocationsEnvironmentsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ComposerProjectsLocationsEnvironmentsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ComposerProjectsLocationsEnvironmentsCreateQueryParams;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsCreateQueryParams };
var ComposerProjectsLocationsEnvironmentsCreateSecurity = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsCreateSecurity, _super);
    function ComposerProjectsLocationsEnvironmentsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ComposerProjectsLocationsEnvironmentsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ComposerProjectsLocationsEnvironmentsCreateSecurity.prototype, "oauth2c", void 0);
    return ComposerProjectsLocationsEnvironmentsCreateSecurity;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsCreateSecurity };
var ComposerProjectsLocationsEnvironmentsCreateRequest = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsCreateRequest, _super);
    function ComposerProjectsLocationsEnvironmentsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ComposerProjectsLocationsEnvironmentsCreatePathParams)
    ], ComposerProjectsLocationsEnvironmentsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComposerProjectsLocationsEnvironmentsCreateQueryParams)
    ], ComposerProjectsLocationsEnvironmentsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Environment)
    ], ComposerProjectsLocationsEnvironmentsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComposerProjectsLocationsEnvironmentsCreateSecurity)
    ], ComposerProjectsLocationsEnvironmentsCreateRequest.prototype, "security", void 0);
    return ComposerProjectsLocationsEnvironmentsCreateRequest;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsCreateRequest };
var ComposerProjectsLocationsEnvironmentsCreateResponse = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsCreateResponse, _super);
    function ComposerProjectsLocationsEnvironmentsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], ComposerProjectsLocationsEnvironmentsCreateResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ComposerProjectsLocationsEnvironmentsCreateResponse.prototype, "statusCode", void 0);
    return ComposerProjectsLocationsEnvironmentsCreateResponse;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsCreateResponse };
