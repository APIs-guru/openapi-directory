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
var FormsFormsWatchesCreatePathParams = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesCreatePathParams, _super);
    function FormsFormsWatchesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=formId" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesCreatePathParams.prototype, "formId", void 0);
    return FormsFormsWatchesCreatePathParams;
}(SpeakeasyBase));
export { FormsFormsWatchesCreatePathParams };
var FormsFormsWatchesCreateQueryParams = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesCreateQueryParams, _super);
    function FormsFormsWatchesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FormsFormsWatchesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return FormsFormsWatchesCreateQueryParams;
}(SpeakeasyBase));
export { FormsFormsWatchesCreateQueryParams };
var FormsFormsWatchesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesCreateSecurityOption1, _super);
    function FormsFormsWatchesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsWatchesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsWatchesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return FormsFormsWatchesCreateSecurityOption1;
}(SpeakeasyBase));
export { FormsFormsWatchesCreateSecurityOption1 };
var FormsFormsWatchesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesCreateSecurityOption2, _super);
    function FormsFormsWatchesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsWatchesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsWatchesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return FormsFormsWatchesCreateSecurityOption2;
}(SpeakeasyBase));
export { FormsFormsWatchesCreateSecurityOption2 };
var FormsFormsWatchesCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesCreateSecurityOption3, _super);
    function FormsFormsWatchesCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsWatchesCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsWatchesCreateSecurityOption3.prototype, "oauth2c", void 0);
    return FormsFormsWatchesCreateSecurityOption3;
}(SpeakeasyBase));
export { FormsFormsWatchesCreateSecurityOption3 };
var FormsFormsWatchesCreateSecurityOption4 = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesCreateSecurityOption4, _super);
    function FormsFormsWatchesCreateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsWatchesCreateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsWatchesCreateSecurityOption4.prototype, "oauth2c", void 0);
    return FormsFormsWatchesCreateSecurityOption4;
}(SpeakeasyBase));
export { FormsFormsWatchesCreateSecurityOption4 };
var FormsFormsWatchesCreateSecurityOption5 = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesCreateSecurityOption5, _super);
    function FormsFormsWatchesCreateSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsWatchesCreateSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsWatchesCreateSecurityOption5.prototype, "oauth2c", void 0);
    return FormsFormsWatchesCreateSecurityOption5;
}(SpeakeasyBase));
export { FormsFormsWatchesCreateSecurityOption5 };
var FormsFormsWatchesCreateSecurityOption6 = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesCreateSecurityOption6, _super);
    function FormsFormsWatchesCreateSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsWatchesCreateSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsWatchesCreateSecurityOption6.prototype, "oauth2c", void 0);
    return FormsFormsWatchesCreateSecurityOption6;
}(SpeakeasyBase));
export { FormsFormsWatchesCreateSecurityOption6 };
var FormsFormsWatchesCreateSecurity = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesCreateSecurity, _super);
    function FormsFormsWatchesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsWatchesCreateSecurityOption1)
    ], FormsFormsWatchesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsWatchesCreateSecurityOption2)
    ], FormsFormsWatchesCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsWatchesCreateSecurityOption3)
    ], FormsFormsWatchesCreateSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsWatchesCreateSecurityOption4)
    ], FormsFormsWatchesCreateSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsWatchesCreateSecurityOption5)
    ], FormsFormsWatchesCreateSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsWatchesCreateSecurityOption6)
    ], FormsFormsWatchesCreateSecurity.prototype, "option6", void 0);
    return FormsFormsWatchesCreateSecurity;
}(SpeakeasyBase));
export { FormsFormsWatchesCreateSecurity };
var FormsFormsWatchesCreateRequest = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesCreateRequest, _super);
    function FormsFormsWatchesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FormsFormsWatchesCreatePathParams)
    ], FormsFormsWatchesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FormsFormsWatchesCreateQueryParams)
    ], FormsFormsWatchesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateWatchRequestInput)
    ], FormsFormsWatchesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FormsFormsWatchesCreateSecurity)
    ], FormsFormsWatchesCreateRequest.prototype, "security", void 0);
    return FormsFormsWatchesCreateRequest;
}(SpeakeasyBase));
export { FormsFormsWatchesCreateRequest };
var FormsFormsWatchesCreateResponse = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesCreateResponse, _super);
    function FormsFormsWatchesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FormsFormsWatchesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FormsFormsWatchesCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Watch)
    ], FormsFormsWatchesCreateResponse.prototype, "watch", void 0);
    return FormsFormsWatchesCreateResponse;
}(SpeakeasyBase));
export { FormsFormsWatchesCreateResponse };
