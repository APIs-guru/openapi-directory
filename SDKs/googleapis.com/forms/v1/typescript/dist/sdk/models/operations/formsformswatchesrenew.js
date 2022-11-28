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
var FormsFormsWatchesRenewPathParams = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesRenewPathParams, _super);
    function FormsFormsWatchesRenewPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=formId" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesRenewPathParams.prototype, "formId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=watchId" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesRenewPathParams.prototype, "watchId", void 0);
    return FormsFormsWatchesRenewPathParams;
}(SpeakeasyBase));
export { FormsFormsWatchesRenewPathParams };
var FormsFormsWatchesRenewQueryParams = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesRenewQueryParams, _super);
    function FormsFormsWatchesRenewQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesRenewQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesRenewQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesRenewQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesRenewQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesRenewQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesRenewQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesRenewQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FormsFormsWatchesRenewQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesRenewQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesRenewQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesRenewQueryParams.prototype, "uploadProtocol", void 0);
    return FormsFormsWatchesRenewQueryParams;
}(SpeakeasyBase));
export { FormsFormsWatchesRenewQueryParams };
var FormsFormsWatchesRenewSecurityOption1 = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesRenewSecurityOption1, _super);
    function FormsFormsWatchesRenewSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsWatchesRenewSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsWatchesRenewSecurityOption1.prototype, "oauth2c", void 0);
    return FormsFormsWatchesRenewSecurityOption1;
}(SpeakeasyBase));
export { FormsFormsWatchesRenewSecurityOption1 };
var FormsFormsWatchesRenewSecurityOption2 = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesRenewSecurityOption2, _super);
    function FormsFormsWatchesRenewSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsWatchesRenewSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsWatchesRenewSecurityOption2.prototype, "oauth2c", void 0);
    return FormsFormsWatchesRenewSecurityOption2;
}(SpeakeasyBase));
export { FormsFormsWatchesRenewSecurityOption2 };
var FormsFormsWatchesRenewSecurityOption3 = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesRenewSecurityOption3, _super);
    function FormsFormsWatchesRenewSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsWatchesRenewSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsWatchesRenewSecurityOption3.prototype, "oauth2c", void 0);
    return FormsFormsWatchesRenewSecurityOption3;
}(SpeakeasyBase));
export { FormsFormsWatchesRenewSecurityOption3 };
var FormsFormsWatchesRenewSecurityOption4 = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesRenewSecurityOption4, _super);
    function FormsFormsWatchesRenewSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsWatchesRenewSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsWatchesRenewSecurityOption4.prototype, "oauth2c", void 0);
    return FormsFormsWatchesRenewSecurityOption4;
}(SpeakeasyBase));
export { FormsFormsWatchesRenewSecurityOption4 };
var FormsFormsWatchesRenewSecurityOption5 = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesRenewSecurityOption5, _super);
    function FormsFormsWatchesRenewSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsWatchesRenewSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsWatchesRenewSecurityOption5.prototype, "oauth2c", void 0);
    return FormsFormsWatchesRenewSecurityOption5;
}(SpeakeasyBase));
export { FormsFormsWatchesRenewSecurityOption5 };
var FormsFormsWatchesRenewSecurityOption6 = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesRenewSecurityOption6, _super);
    function FormsFormsWatchesRenewSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsWatchesRenewSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsWatchesRenewSecurityOption6.prototype, "oauth2c", void 0);
    return FormsFormsWatchesRenewSecurityOption6;
}(SpeakeasyBase));
export { FormsFormsWatchesRenewSecurityOption6 };
var FormsFormsWatchesRenewSecurity = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesRenewSecurity, _super);
    function FormsFormsWatchesRenewSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsWatchesRenewSecurityOption1)
    ], FormsFormsWatchesRenewSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsWatchesRenewSecurityOption2)
    ], FormsFormsWatchesRenewSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsWatchesRenewSecurityOption3)
    ], FormsFormsWatchesRenewSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsWatchesRenewSecurityOption4)
    ], FormsFormsWatchesRenewSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsWatchesRenewSecurityOption5)
    ], FormsFormsWatchesRenewSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsWatchesRenewSecurityOption6)
    ], FormsFormsWatchesRenewSecurity.prototype, "option6", void 0);
    return FormsFormsWatchesRenewSecurity;
}(SpeakeasyBase));
export { FormsFormsWatchesRenewSecurity };
var FormsFormsWatchesRenewRequest = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesRenewRequest, _super);
    function FormsFormsWatchesRenewRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FormsFormsWatchesRenewPathParams)
    ], FormsFormsWatchesRenewRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FormsFormsWatchesRenewQueryParams)
    ], FormsFormsWatchesRenewRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], FormsFormsWatchesRenewRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FormsFormsWatchesRenewSecurity)
    ], FormsFormsWatchesRenewRequest.prototype, "security", void 0);
    return FormsFormsWatchesRenewRequest;
}(SpeakeasyBase));
export { FormsFormsWatchesRenewRequest };
var FormsFormsWatchesRenewResponse = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesRenewResponse, _super);
    function FormsFormsWatchesRenewResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FormsFormsWatchesRenewResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FormsFormsWatchesRenewResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Watch)
    ], FormsFormsWatchesRenewResponse.prototype, "watch", void 0);
    return FormsFormsWatchesRenewResponse;
}(SpeakeasyBase));
export { FormsFormsWatchesRenewResponse };
