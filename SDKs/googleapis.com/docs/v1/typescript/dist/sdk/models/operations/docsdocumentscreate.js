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
var DocsDocumentsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DocsDocumentsCreateQueryParams, _super);
    function DocsDocumentsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DocsDocumentsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DocsDocumentsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DocsDocumentsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DocsDocumentsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DocsDocumentsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DocsDocumentsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DocsDocumentsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DocsDocumentsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DocsDocumentsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DocsDocumentsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DocsDocumentsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DocsDocumentsCreateQueryParams;
}(SpeakeasyBase));
export { DocsDocumentsCreateQueryParams };
var DocsDocumentsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DocsDocumentsCreateSecurityOption1, _super);
    function DocsDocumentsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DocsDocumentsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DocsDocumentsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DocsDocumentsCreateSecurityOption1;
}(SpeakeasyBase));
export { DocsDocumentsCreateSecurityOption1 };
var DocsDocumentsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DocsDocumentsCreateSecurityOption2, _super);
    function DocsDocumentsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DocsDocumentsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DocsDocumentsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DocsDocumentsCreateSecurityOption2;
}(SpeakeasyBase));
export { DocsDocumentsCreateSecurityOption2 };
var DocsDocumentsCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(DocsDocumentsCreateSecurityOption3, _super);
    function DocsDocumentsCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DocsDocumentsCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DocsDocumentsCreateSecurityOption3.prototype, "oauth2c", void 0);
    return DocsDocumentsCreateSecurityOption3;
}(SpeakeasyBase));
export { DocsDocumentsCreateSecurityOption3 };
var DocsDocumentsCreateSecurity = /** @class */ (function (_super) {
    __extends(DocsDocumentsCreateSecurity, _super);
    function DocsDocumentsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DocsDocumentsCreateSecurityOption1)
    ], DocsDocumentsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DocsDocumentsCreateSecurityOption2)
    ], DocsDocumentsCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DocsDocumentsCreateSecurityOption3)
    ], DocsDocumentsCreateSecurity.prototype, "option3", void 0);
    return DocsDocumentsCreateSecurity;
}(SpeakeasyBase));
export { DocsDocumentsCreateSecurity };
var DocsDocumentsCreateRequest = /** @class */ (function (_super) {
    __extends(DocsDocumentsCreateRequest, _super);
    function DocsDocumentsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocsDocumentsCreateQueryParams)
    ], DocsDocumentsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DocumentInput)
    ], DocsDocumentsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocsDocumentsCreateSecurity)
    ], DocsDocumentsCreateRequest.prototype, "security", void 0);
    return DocsDocumentsCreateRequest;
}(SpeakeasyBase));
export { DocsDocumentsCreateRequest };
var DocsDocumentsCreateResponse = /** @class */ (function (_super) {
    __extends(DocsDocumentsCreateResponse, _super);
    function DocsDocumentsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DocsDocumentsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Document)
    ], DocsDocumentsCreateResponse.prototype, "document", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DocsDocumentsCreateResponse.prototype, "statusCode", void 0);
    return DocsDocumentsCreateResponse;
}(SpeakeasyBase));
export { DocsDocumentsCreateResponse };
