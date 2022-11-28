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
var FormsFormsWatchesDeletePathParams = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesDeletePathParams, _super);
    function FormsFormsWatchesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=formId" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesDeletePathParams.prototype, "formId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=watchId" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesDeletePathParams.prototype, "watchId", void 0);
    return FormsFormsWatchesDeletePathParams;
}(SpeakeasyBase));
export { FormsFormsWatchesDeletePathParams };
var FormsFormsWatchesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesDeleteQueryParams, _super);
    function FormsFormsWatchesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FormsFormsWatchesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return FormsFormsWatchesDeleteQueryParams;
}(SpeakeasyBase));
export { FormsFormsWatchesDeleteQueryParams };
var FormsFormsWatchesDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesDeleteSecurityOption1, _super);
    function FormsFormsWatchesDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsWatchesDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsWatchesDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return FormsFormsWatchesDeleteSecurityOption1;
}(SpeakeasyBase));
export { FormsFormsWatchesDeleteSecurityOption1 };
var FormsFormsWatchesDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesDeleteSecurityOption2, _super);
    function FormsFormsWatchesDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsWatchesDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsWatchesDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return FormsFormsWatchesDeleteSecurityOption2;
}(SpeakeasyBase));
export { FormsFormsWatchesDeleteSecurityOption2 };
var FormsFormsWatchesDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesDeleteSecurityOption3, _super);
    function FormsFormsWatchesDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsWatchesDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsWatchesDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return FormsFormsWatchesDeleteSecurityOption3;
}(SpeakeasyBase));
export { FormsFormsWatchesDeleteSecurityOption3 };
var FormsFormsWatchesDeleteSecurityOption4 = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesDeleteSecurityOption4, _super);
    function FormsFormsWatchesDeleteSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsWatchesDeleteSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsWatchesDeleteSecurityOption4.prototype, "oauth2c", void 0);
    return FormsFormsWatchesDeleteSecurityOption4;
}(SpeakeasyBase));
export { FormsFormsWatchesDeleteSecurityOption4 };
var FormsFormsWatchesDeleteSecurityOption5 = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesDeleteSecurityOption5, _super);
    function FormsFormsWatchesDeleteSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsWatchesDeleteSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsWatchesDeleteSecurityOption5.prototype, "oauth2c", void 0);
    return FormsFormsWatchesDeleteSecurityOption5;
}(SpeakeasyBase));
export { FormsFormsWatchesDeleteSecurityOption5 };
var FormsFormsWatchesDeleteSecurityOption6 = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesDeleteSecurityOption6, _super);
    function FormsFormsWatchesDeleteSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsWatchesDeleteSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsWatchesDeleteSecurityOption6.prototype, "oauth2c", void 0);
    return FormsFormsWatchesDeleteSecurityOption6;
}(SpeakeasyBase));
export { FormsFormsWatchesDeleteSecurityOption6 };
var FormsFormsWatchesDeleteSecurity = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesDeleteSecurity, _super);
    function FormsFormsWatchesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsWatchesDeleteSecurityOption1)
    ], FormsFormsWatchesDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsWatchesDeleteSecurityOption2)
    ], FormsFormsWatchesDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsWatchesDeleteSecurityOption3)
    ], FormsFormsWatchesDeleteSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsWatchesDeleteSecurityOption4)
    ], FormsFormsWatchesDeleteSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsWatchesDeleteSecurityOption5)
    ], FormsFormsWatchesDeleteSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsWatchesDeleteSecurityOption6)
    ], FormsFormsWatchesDeleteSecurity.prototype, "option6", void 0);
    return FormsFormsWatchesDeleteSecurity;
}(SpeakeasyBase));
export { FormsFormsWatchesDeleteSecurity };
var FormsFormsWatchesDeleteRequest = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesDeleteRequest, _super);
    function FormsFormsWatchesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FormsFormsWatchesDeletePathParams)
    ], FormsFormsWatchesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FormsFormsWatchesDeleteQueryParams)
    ], FormsFormsWatchesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FormsFormsWatchesDeleteSecurity)
    ], FormsFormsWatchesDeleteRequest.prototype, "security", void 0);
    return FormsFormsWatchesDeleteRequest;
}(SpeakeasyBase));
export { FormsFormsWatchesDeleteRequest };
var FormsFormsWatchesDeleteResponse = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesDeleteResponse, _super);
    function FormsFormsWatchesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FormsFormsWatchesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], FormsFormsWatchesDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FormsFormsWatchesDeleteResponse.prototype, "statusCode", void 0);
    return FormsFormsWatchesDeleteResponse;
}(SpeakeasyBase));
export { FormsFormsWatchesDeleteResponse };
