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
var DocsDocumentsBatchUpdatePathParams = /** @class */ (function (_super) {
    __extends(DocsDocumentsBatchUpdatePathParams, _super);
    function DocsDocumentsBatchUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=documentId" }),
        __metadata("design:type", String)
    ], DocsDocumentsBatchUpdatePathParams.prototype, "documentId", void 0);
    return DocsDocumentsBatchUpdatePathParams;
}(SpeakeasyBase));
export { DocsDocumentsBatchUpdatePathParams };
var DocsDocumentsBatchUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DocsDocumentsBatchUpdateQueryParams, _super);
    function DocsDocumentsBatchUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DocsDocumentsBatchUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DocsDocumentsBatchUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DocsDocumentsBatchUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DocsDocumentsBatchUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DocsDocumentsBatchUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DocsDocumentsBatchUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DocsDocumentsBatchUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DocsDocumentsBatchUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DocsDocumentsBatchUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DocsDocumentsBatchUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DocsDocumentsBatchUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return DocsDocumentsBatchUpdateQueryParams;
}(SpeakeasyBase));
export { DocsDocumentsBatchUpdateQueryParams };
var DocsDocumentsBatchUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DocsDocumentsBatchUpdateSecurityOption1, _super);
    function DocsDocumentsBatchUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DocsDocumentsBatchUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DocsDocumentsBatchUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return DocsDocumentsBatchUpdateSecurityOption1;
}(SpeakeasyBase));
export { DocsDocumentsBatchUpdateSecurityOption1 };
var DocsDocumentsBatchUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DocsDocumentsBatchUpdateSecurityOption2, _super);
    function DocsDocumentsBatchUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DocsDocumentsBatchUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DocsDocumentsBatchUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return DocsDocumentsBatchUpdateSecurityOption2;
}(SpeakeasyBase));
export { DocsDocumentsBatchUpdateSecurityOption2 };
var DocsDocumentsBatchUpdateSecurityOption3 = /** @class */ (function (_super) {
    __extends(DocsDocumentsBatchUpdateSecurityOption3, _super);
    function DocsDocumentsBatchUpdateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DocsDocumentsBatchUpdateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DocsDocumentsBatchUpdateSecurityOption3.prototype, "oauth2c", void 0);
    return DocsDocumentsBatchUpdateSecurityOption3;
}(SpeakeasyBase));
export { DocsDocumentsBatchUpdateSecurityOption3 };
var DocsDocumentsBatchUpdateSecurity = /** @class */ (function (_super) {
    __extends(DocsDocumentsBatchUpdateSecurity, _super);
    function DocsDocumentsBatchUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DocsDocumentsBatchUpdateSecurityOption1)
    ], DocsDocumentsBatchUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DocsDocumentsBatchUpdateSecurityOption2)
    ], DocsDocumentsBatchUpdateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DocsDocumentsBatchUpdateSecurityOption3)
    ], DocsDocumentsBatchUpdateSecurity.prototype, "option3", void 0);
    return DocsDocumentsBatchUpdateSecurity;
}(SpeakeasyBase));
export { DocsDocumentsBatchUpdateSecurity };
var DocsDocumentsBatchUpdateRequest = /** @class */ (function (_super) {
    __extends(DocsDocumentsBatchUpdateRequest, _super);
    function DocsDocumentsBatchUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocsDocumentsBatchUpdatePathParams)
    ], DocsDocumentsBatchUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocsDocumentsBatchUpdateQueryParams)
    ], DocsDocumentsBatchUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchUpdateDocumentRequest)
    ], DocsDocumentsBatchUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocsDocumentsBatchUpdateSecurity)
    ], DocsDocumentsBatchUpdateRequest.prototype, "security", void 0);
    return DocsDocumentsBatchUpdateRequest;
}(SpeakeasyBase));
export { DocsDocumentsBatchUpdateRequest };
var DocsDocumentsBatchUpdateResponse = /** @class */ (function (_super) {
    __extends(DocsDocumentsBatchUpdateResponse, _super);
    function DocsDocumentsBatchUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchUpdateDocumentResponse)
    ], DocsDocumentsBatchUpdateResponse.prototype, "batchUpdateDocumentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DocsDocumentsBatchUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DocsDocumentsBatchUpdateResponse.prototype, "statusCode", void 0);
    return DocsDocumentsBatchUpdateResponse;
}(SpeakeasyBase));
export { DocsDocumentsBatchUpdateResponse };
