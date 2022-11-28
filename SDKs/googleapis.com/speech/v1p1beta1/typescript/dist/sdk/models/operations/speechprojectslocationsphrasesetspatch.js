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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var SpeechProjectsLocationsPhraseSetsPatchPathParams = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsPhraseSetsPatchPathParams, _super);
    function SpeechProjectsLocationsPhraseSetsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsPatchPathParams.prototype, "name", void 0);
    return SpeechProjectsLocationsPhraseSetsPatchPathParams;
}(SpeakeasyBase));
export { SpeechProjectsLocationsPhraseSetsPatchPathParams };
var SpeechProjectsLocationsPhraseSetsPatchQueryParams = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsPhraseSetsPatchQueryParams, _super);
    function SpeechProjectsLocationsPhraseSetsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpeechProjectsLocationsPhraseSetsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return SpeechProjectsLocationsPhraseSetsPatchQueryParams;
}(SpeakeasyBase));
export { SpeechProjectsLocationsPhraseSetsPatchQueryParams };
var SpeechProjectsLocationsPhraseSetsPatchSecurity = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsPhraseSetsPatchSecurity, _super);
    function SpeechProjectsLocationsPhraseSetsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpeechProjectsLocationsPhraseSetsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpeechProjectsLocationsPhraseSetsPatchSecurity.prototype, "oauth2c", void 0);
    return SpeechProjectsLocationsPhraseSetsPatchSecurity;
}(SpeakeasyBase));
export { SpeechProjectsLocationsPhraseSetsPatchSecurity };
var SpeechProjectsLocationsPhraseSetsPatchRequest = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsPhraseSetsPatchRequest, _super);
    function SpeechProjectsLocationsPhraseSetsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpeechProjectsLocationsPhraseSetsPatchPathParams)
    ], SpeechProjectsLocationsPhraseSetsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpeechProjectsLocationsPhraseSetsPatchQueryParams)
    ], SpeechProjectsLocationsPhraseSetsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PhraseSet)
    ], SpeechProjectsLocationsPhraseSetsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpeechProjectsLocationsPhraseSetsPatchSecurity)
    ], SpeechProjectsLocationsPhraseSetsPatchRequest.prototype, "security", void 0);
    return SpeechProjectsLocationsPhraseSetsPatchRequest;
}(SpeakeasyBase));
export { SpeechProjectsLocationsPhraseSetsPatchRequest };
var SpeechProjectsLocationsPhraseSetsPatchResponse = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsPhraseSetsPatchResponse, _super);
    function SpeechProjectsLocationsPhraseSetsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PhraseSet)
    ], SpeechProjectsLocationsPhraseSetsPatchResponse.prototype, "phraseSet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpeechProjectsLocationsPhraseSetsPatchResponse.prototype, "statusCode", void 0);
    return SpeechProjectsLocationsPhraseSetsPatchResponse;
}(SpeakeasyBase));
export { SpeechProjectsLocationsPhraseSetsPatchResponse };
