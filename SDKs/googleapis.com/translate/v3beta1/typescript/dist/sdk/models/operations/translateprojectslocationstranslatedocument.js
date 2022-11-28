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
var TranslateProjectsLocationsTranslateDocumentPathParams = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsTranslateDocumentPathParams, _super);
    function TranslateProjectsLocationsTranslateDocumentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsTranslateDocumentPathParams.prototype, "parent", void 0);
    return TranslateProjectsLocationsTranslateDocumentPathParams;
}(SpeakeasyBase));
export { TranslateProjectsLocationsTranslateDocumentPathParams };
var TranslateProjectsLocationsTranslateDocumentQueryParams = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsTranslateDocumentQueryParams, _super);
    function TranslateProjectsLocationsTranslateDocumentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsTranslateDocumentQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsTranslateDocumentQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsTranslateDocumentQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsTranslateDocumentQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsTranslateDocumentQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsTranslateDocumentQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsTranslateDocumentQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TranslateProjectsLocationsTranslateDocumentQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsTranslateDocumentQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsTranslateDocumentQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsTranslateDocumentQueryParams.prototype, "uploadProtocol", void 0);
    return TranslateProjectsLocationsTranslateDocumentQueryParams;
}(SpeakeasyBase));
export { TranslateProjectsLocationsTranslateDocumentQueryParams };
var TranslateProjectsLocationsTranslateDocumentSecurityOption1 = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsTranslateDocumentSecurityOption1, _super);
    function TranslateProjectsLocationsTranslateDocumentSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranslateProjectsLocationsTranslateDocumentSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranslateProjectsLocationsTranslateDocumentSecurityOption1.prototype, "oauth2c", void 0);
    return TranslateProjectsLocationsTranslateDocumentSecurityOption1;
}(SpeakeasyBase));
export { TranslateProjectsLocationsTranslateDocumentSecurityOption1 };
var TranslateProjectsLocationsTranslateDocumentSecurityOption2 = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsTranslateDocumentSecurityOption2, _super);
    function TranslateProjectsLocationsTranslateDocumentSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranslateProjectsLocationsTranslateDocumentSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranslateProjectsLocationsTranslateDocumentSecurityOption2.prototype, "oauth2c", void 0);
    return TranslateProjectsLocationsTranslateDocumentSecurityOption2;
}(SpeakeasyBase));
export { TranslateProjectsLocationsTranslateDocumentSecurityOption2 };
var TranslateProjectsLocationsTranslateDocumentSecurity = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsTranslateDocumentSecurity, _super);
    function TranslateProjectsLocationsTranslateDocumentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TranslateProjectsLocationsTranslateDocumentSecurityOption1)
    ], TranslateProjectsLocationsTranslateDocumentSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TranslateProjectsLocationsTranslateDocumentSecurityOption2)
    ], TranslateProjectsLocationsTranslateDocumentSecurity.prototype, "option2", void 0);
    return TranslateProjectsLocationsTranslateDocumentSecurity;
}(SpeakeasyBase));
export { TranslateProjectsLocationsTranslateDocumentSecurity };
var TranslateProjectsLocationsTranslateDocumentRequest = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsTranslateDocumentRequest, _super);
    function TranslateProjectsLocationsTranslateDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsTranslateDocumentPathParams)
    ], TranslateProjectsLocationsTranslateDocumentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsTranslateDocumentQueryParams)
    ], TranslateProjectsLocationsTranslateDocumentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TranslateDocumentRequest)
    ], TranslateProjectsLocationsTranslateDocumentRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsTranslateDocumentSecurity)
    ], TranslateProjectsLocationsTranslateDocumentRequest.prototype, "security", void 0);
    return TranslateProjectsLocationsTranslateDocumentRequest;
}(SpeakeasyBase));
export { TranslateProjectsLocationsTranslateDocumentRequest };
var TranslateProjectsLocationsTranslateDocumentResponse = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsTranslateDocumentResponse, _super);
    function TranslateProjectsLocationsTranslateDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsTranslateDocumentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TranslateProjectsLocationsTranslateDocumentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TranslateDocumentResponse)
    ], TranslateProjectsLocationsTranslateDocumentResponse.prototype, "translateDocumentResponse", void 0);
    return TranslateProjectsLocationsTranslateDocumentResponse;
}(SpeakeasyBase));
export { TranslateProjectsLocationsTranslateDocumentResponse };
