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
var FormsFormsResponsesGetPathParams = /** @class */ (function (_super) {
    __extends(FormsFormsResponsesGetPathParams, _super);
    function FormsFormsResponsesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=formId" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesGetPathParams.prototype, "formId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=responseId" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesGetPathParams.prototype, "responseId", void 0);
    return FormsFormsResponsesGetPathParams;
}(SpeakeasyBase));
export { FormsFormsResponsesGetPathParams };
var FormsFormsResponsesGetQueryParams = /** @class */ (function (_super) {
    __extends(FormsFormsResponsesGetQueryParams, _super);
    function FormsFormsResponsesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FormsFormsResponsesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesGetQueryParams.prototype, "uploadProtocol", void 0);
    return FormsFormsResponsesGetQueryParams;
}(SpeakeasyBase));
export { FormsFormsResponsesGetQueryParams };
var FormsFormsResponsesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(FormsFormsResponsesGetSecurityOption1, _super);
    function FormsFormsResponsesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsResponsesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsResponsesGetSecurityOption1.prototype, "oauth2c", void 0);
    return FormsFormsResponsesGetSecurityOption1;
}(SpeakeasyBase));
export { FormsFormsResponsesGetSecurityOption1 };
var FormsFormsResponsesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(FormsFormsResponsesGetSecurityOption2, _super);
    function FormsFormsResponsesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsResponsesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsResponsesGetSecurityOption2.prototype, "oauth2c", void 0);
    return FormsFormsResponsesGetSecurityOption2;
}(SpeakeasyBase));
export { FormsFormsResponsesGetSecurityOption2 };
var FormsFormsResponsesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(FormsFormsResponsesGetSecurityOption3, _super);
    function FormsFormsResponsesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsResponsesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsResponsesGetSecurityOption3.prototype, "oauth2c", void 0);
    return FormsFormsResponsesGetSecurityOption3;
}(SpeakeasyBase));
export { FormsFormsResponsesGetSecurityOption3 };
var FormsFormsResponsesGetSecurity = /** @class */ (function (_super) {
    __extends(FormsFormsResponsesGetSecurity, _super);
    function FormsFormsResponsesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsResponsesGetSecurityOption1)
    ], FormsFormsResponsesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsResponsesGetSecurityOption2)
    ], FormsFormsResponsesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsResponsesGetSecurityOption3)
    ], FormsFormsResponsesGetSecurity.prototype, "option3", void 0);
    return FormsFormsResponsesGetSecurity;
}(SpeakeasyBase));
export { FormsFormsResponsesGetSecurity };
var FormsFormsResponsesGetRequest = /** @class */ (function (_super) {
    __extends(FormsFormsResponsesGetRequest, _super);
    function FormsFormsResponsesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FormsFormsResponsesGetPathParams)
    ], FormsFormsResponsesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FormsFormsResponsesGetQueryParams)
    ], FormsFormsResponsesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FormsFormsResponsesGetSecurity)
    ], FormsFormsResponsesGetRequest.prototype, "security", void 0);
    return FormsFormsResponsesGetRequest;
}(SpeakeasyBase));
export { FormsFormsResponsesGetRequest };
var FormsFormsResponsesGetResponse = /** @class */ (function (_super) {
    __extends(FormsFormsResponsesGetResponse, _super);
    function FormsFormsResponsesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FormsFormsResponsesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FormResponse)
    ], FormsFormsResponsesGetResponse.prototype, "formResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FormsFormsResponsesGetResponse.prototype, "statusCode", void 0);
    return FormsFormsResponsesGetResponse;
}(SpeakeasyBase));
export { FormsFormsResponsesGetResponse };
