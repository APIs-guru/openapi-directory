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
var DocsDocumentsGetPathParams = /** @class */ (function (_super) {
    __extends(DocsDocumentsGetPathParams, _super);
    function DocsDocumentsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=documentId" }),
        __metadata("design:type", String)
    ], DocsDocumentsGetPathParams.prototype, "documentId", void 0);
    return DocsDocumentsGetPathParams;
}(SpeakeasyBase));
export { DocsDocumentsGetPathParams };
export var DocsDocumentsGetSuggestionsViewModeEnum;
(function (DocsDocumentsGetSuggestionsViewModeEnum) {
    DocsDocumentsGetSuggestionsViewModeEnum["DefaultForCurrentAccess"] = "DEFAULT_FOR_CURRENT_ACCESS";
    DocsDocumentsGetSuggestionsViewModeEnum["SuggestionsInline"] = "SUGGESTIONS_INLINE";
    DocsDocumentsGetSuggestionsViewModeEnum["PreviewSuggestionsAccepted"] = "PREVIEW_SUGGESTIONS_ACCEPTED";
    DocsDocumentsGetSuggestionsViewModeEnum["PreviewWithoutSuggestions"] = "PREVIEW_WITHOUT_SUGGESTIONS";
})(DocsDocumentsGetSuggestionsViewModeEnum || (DocsDocumentsGetSuggestionsViewModeEnum = {}));
var DocsDocumentsGetQueryParams = /** @class */ (function (_super) {
    __extends(DocsDocumentsGetQueryParams, _super);
    function DocsDocumentsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DocsDocumentsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DocsDocumentsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DocsDocumentsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DocsDocumentsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DocsDocumentsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DocsDocumentsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DocsDocumentsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DocsDocumentsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DocsDocumentsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=suggestionsViewMode" }),
        __metadata("design:type", String)
    ], DocsDocumentsGetQueryParams.prototype, "suggestionsViewMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DocsDocumentsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DocsDocumentsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DocsDocumentsGetQueryParams;
}(SpeakeasyBase));
export { DocsDocumentsGetQueryParams };
var DocsDocumentsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DocsDocumentsGetSecurityOption1, _super);
    function DocsDocumentsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DocsDocumentsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DocsDocumentsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DocsDocumentsGetSecurityOption1;
}(SpeakeasyBase));
export { DocsDocumentsGetSecurityOption1 };
var DocsDocumentsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DocsDocumentsGetSecurityOption2, _super);
    function DocsDocumentsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DocsDocumentsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DocsDocumentsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DocsDocumentsGetSecurityOption2;
}(SpeakeasyBase));
export { DocsDocumentsGetSecurityOption2 };
var DocsDocumentsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DocsDocumentsGetSecurityOption3, _super);
    function DocsDocumentsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DocsDocumentsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DocsDocumentsGetSecurityOption3.prototype, "oauth2c", void 0);
    return DocsDocumentsGetSecurityOption3;
}(SpeakeasyBase));
export { DocsDocumentsGetSecurityOption3 };
var DocsDocumentsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DocsDocumentsGetSecurityOption4, _super);
    function DocsDocumentsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DocsDocumentsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DocsDocumentsGetSecurityOption4.prototype, "oauth2c", void 0);
    return DocsDocumentsGetSecurityOption4;
}(SpeakeasyBase));
export { DocsDocumentsGetSecurityOption4 };
var DocsDocumentsGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(DocsDocumentsGetSecurityOption5, _super);
    function DocsDocumentsGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DocsDocumentsGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DocsDocumentsGetSecurityOption5.prototype, "oauth2c", void 0);
    return DocsDocumentsGetSecurityOption5;
}(SpeakeasyBase));
export { DocsDocumentsGetSecurityOption5 };
var DocsDocumentsGetSecurity = /** @class */ (function (_super) {
    __extends(DocsDocumentsGetSecurity, _super);
    function DocsDocumentsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DocsDocumentsGetSecurityOption1)
    ], DocsDocumentsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DocsDocumentsGetSecurityOption2)
    ], DocsDocumentsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DocsDocumentsGetSecurityOption3)
    ], DocsDocumentsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DocsDocumentsGetSecurityOption4)
    ], DocsDocumentsGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DocsDocumentsGetSecurityOption5)
    ], DocsDocumentsGetSecurity.prototype, "option5", void 0);
    return DocsDocumentsGetSecurity;
}(SpeakeasyBase));
export { DocsDocumentsGetSecurity };
var DocsDocumentsGetRequest = /** @class */ (function (_super) {
    __extends(DocsDocumentsGetRequest, _super);
    function DocsDocumentsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocsDocumentsGetPathParams)
    ], DocsDocumentsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocsDocumentsGetQueryParams)
    ], DocsDocumentsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocsDocumentsGetSecurity)
    ], DocsDocumentsGetRequest.prototype, "security", void 0);
    return DocsDocumentsGetRequest;
}(SpeakeasyBase));
export { DocsDocumentsGetRequest };
var DocsDocumentsGetResponse = /** @class */ (function (_super) {
    __extends(DocsDocumentsGetResponse, _super);
    function DocsDocumentsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DocsDocumentsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Document)
    ], DocsDocumentsGetResponse.prototype, "document", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DocsDocumentsGetResponse.prototype, "statusCode", void 0);
    return DocsDocumentsGetResponse;
}(SpeakeasyBase));
export { DocsDocumentsGetResponse };
