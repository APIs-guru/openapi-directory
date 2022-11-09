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
var SpeechProjectsLocationsPhraseSetsDeletePathParams = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsPhraseSetsDeletePathParams, _super);
    function SpeechProjectsLocationsPhraseSetsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsDeletePathParams.prototype, "name", void 0);
    return SpeechProjectsLocationsPhraseSetsDeletePathParams;
}(SpeakeasyBase));
export { SpeechProjectsLocationsPhraseSetsDeletePathParams };
var SpeechProjectsLocationsPhraseSetsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsPhraseSetsDeleteQueryParams, _super);
    function SpeechProjectsLocationsPhraseSetsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpeechProjectsLocationsPhraseSetsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return SpeechProjectsLocationsPhraseSetsDeleteQueryParams;
}(SpeakeasyBase));
export { SpeechProjectsLocationsPhraseSetsDeleteQueryParams };
var SpeechProjectsLocationsPhraseSetsDeleteSecurity = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsPhraseSetsDeleteSecurity, _super);
    function SpeechProjectsLocationsPhraseSetsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpeechProjectsLocationsPhraseSetsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpeechProjectsLocationsPhraseSetsDeleteSecurity.prototype, "oauth2c", void 0);
    return SpeechProjectsLocationsPhraseSetsDeleteSecurity;
}(SpeakeasyBase));
export { SpeechProjectsLocationsPhraseSetsDeleteSecurity };
var SpeechProjectsLocationsPhraseSetsDeleteRequest = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsPhraseSetsDeleteRequest, _super);
    function SpeechProjectsLocationsPhraseSetsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SpeechProjectsLocationsPhraseSetsDeletePathParams)
    ], SpeechProjectsLocationsPhraseSetsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SpeechProjectsLocationsPhraseSetsDeleteQueryParams)
    ], SpeechProjectsLocationsPhraseSetsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SpeechProjectsLocationsPhraseSetsDeleteSecurity)
    ], SpeechProjectsLocationsPhraseSetsDeleteRequest.prototype, "security", void 0);
    return SpeechProjectsLocationsPhraseSetsDeleteRequest;
}(SpeakeasyBase));
export { SpeechProjectsLocationsPhraseSetsDeleteRequest };
var SpeechProjectsLocationsPhraseSetsDeleteResponse = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsPhraseSetsDeleteResponse, _super);
    function SpeechProjectsLocationsPhraseSetsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], SpeechProjectsLocationsPhraseSetsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SpeechProjectsLocationsPhraseSetsDeleteResponse.prototype, "statusCode", void 0);
    return SpeechProjectsLocationsPhraseSetsDeleteResponse;
}(SpeakeasyBase));
export { SpeechProjectsLocationsPhraseSetsDeleteResponse };
