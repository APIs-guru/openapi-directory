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
var SpeechProjectsLocationsPhraseSetsCreatePathParams = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsPhraseSetsCreatePathParams, _super);
    function SpeechProjectsLocationsPhraseSetsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsCreatePathParams.prototype, "parent", void 0);
    return SpeechProjectsLocationsPhraseSetsCreatePathParams;
}(SpeakeasyBase));
export { SpeechProjectsLocationsPhraseSetsCreatePathParams };
var SpeechProjectsLocationsPhraseSetsCreateQueryParams = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsPhraseSetsCreateQueryParams, _super);
    function SpeechProjectsLocationsPhraseSetsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpeechProjectsLocationsPhraseSetsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return SpeechProjectsLocationsPhraseSetsCreateQueryParams;
}(SpeakeasyBase));
export { SpeechProjectsLocationsPhraseSetsCreateQueryParams };
var SpeechProjectsLocationsPhraseSetsCreateSecurity = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsPhraseSetsCreateSecurity, _super);
    function SpeechProjectsLocationsPhraseSetsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpeechProjectsLocationsPhraseSetsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpeechProjectsLocationsPhraseSetsCreateSecurity.prototype, "oauth2c", void 0);
    return SpeechProjectsLocationsPhraseSetsCreateSecurity;
}(SpeakeasyBase));
export { SpeechProjectsLocationsPhraseSetsCreateSecurity };
var SpeechProjectsLocationsPhraseSetsCreateRequest = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsPhraseSetsCreateRequest, _super);
    function SpeechProjectsLocationsPhraseSetsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SpeechProjectsLocationsPhraseSetsCreatePathParams)
    ], SpeechProjectsLocationsPhraseSetsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SpeechProjectsLocationsPhraseSetsCreateQueryParams)
    ], SpeechProjectsLocationsPhraseSetsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreatePhraseSetRequest)
    ], SpeechProjectsLocationsPhraseSetsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SpeechProjectsLocationsPhraseSetsCreateSecurity)
    ], SpeechProjectsLocationsPhraseSetsCreateRequest.prototype, "security", void 0);
    return SpeechProjectsLocationsPhraseSetsCreateRequest;
}(SpeakeasyBase));
export { SpeechProjectsLocationsPhraseSetsCreateRequest };
var SpeechProjectsLocationsPhraseSetsCreateResponse = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsPhraseSetsCreateResponse, _super);
    function SpeechProjectsLocationsPhraseSetsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PhraseSet)
    ], SpeechProjectsLocationsPhraseSetsCreateResponse.prototype, "phraseSet", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SpeechProjectsLocationsPhraseSetsCreateResponse.prototype, "statusCode", void 0);
    return SpeechProjectsLocationsPhraseSetsCreateResponse;
}(SpeakeasyBase));
export { SpeechProjectsLocationsPhraseSetsCreateResponse };
