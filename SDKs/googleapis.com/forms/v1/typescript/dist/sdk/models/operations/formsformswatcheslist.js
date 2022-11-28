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
var FormsFormsWatchesListPathParams = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesListPathParams, _super);
    function FormsFormsWatchesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=formId" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesListPathParams.prototype, "formId", void 0);
    return FormsFormsWatchesListPathParams;
}(SpeakeasyBase));
export { FormsFormsWatchesListPathParams };
var FormsFormsWatchesListQueryParams = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesListQueryParams, _super);
    function FormsFormsWatchesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FormsFormsWatchesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FormsFormsWatchesListQueryParams.prototype, "uploadProtocol", void 0);
    return FormsFormsWatchesListQueryParams;
}(SpeakeasyBase));
export { FormsFormsWatchesListQueryParams };
var FormsFormsWatchesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesListSecurityOption1, _super);
    function FormsFormsWatchesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsWatchesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsWatchesListSecurityOption1.prototype, "oauth2c", void 0);
    return FormsFormsWatchesListSecurityOption1;
}(SpeakeasyBase));
export { FormsFormsWatchesListSecurityOption1 };
var FormsFormsWatchesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesListSecurityOption2, _super);
    function FormsFormsWatchesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsWatchesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsWatchesListSecurityOption2.prototype, "oauth2c", void 0);
    return FormsFormsWatchesListSecurityOption2;
}(SpeakeasyBase));
export { FormsFormsWatchesListSecurityOption2 };
var FormsFormsWatchesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesListSecurityOption3, _super);
    function FormsFormsWatchesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsWatchesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsWatchesListSecurityOption3.prototype, "oauth2c", void 0);
    return FormsFormsWatchesListSecurityOption3;
}(SpeakeasyBase));
export { FormsFormsWatchesListSecurityOption3 };
var FormsFormsWatchesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesListSecurityOption4, _super);
    function FormsFormsWatchesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsWatchesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsWatchesListSecurityOption4.prototype, "oauth2c", void 0);
    return FormsFormsWatchesListSecurityOption4;
}(SpeakeasyBase));
export { FormsFormsWatchesListSecurityOption4 };
var FormsFormsWatchesListSecurityOption5 = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesListSecurityOption5, _super);
    function FormsFormsWatchesListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsWatchesListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsWatchesListSecurityOption5.prototype, "oauth2c", void 0);
    return FormsFormsWatchesListSecurityOption5;
}(SpeakeasyBase));
export { FormsFormsWatchesListSecurityOption5 };
var FormsFormsWatchesListSecurityOption6 = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesListSecurityOption6, _super);
    function FormsFormsWatchesListSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsWatchesListSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsWatchesListSecurityOption6.prototype, "oauth2c", void 0);
    return FormsFormsWatchesListSecurityOption6;
}(SpeakeasyBase));
export { FormsFormsWatchesListSecurityOption6 };
var FormsFormsWatchesListSecurity = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesListSecurity, _super);
    function FormsFormsWatchesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsWatchesListSecurityOption1)
    ], FormsFormsWatchesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsWatchesListSecurityOption2)
    ], FormsFormsWatchesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsWatchesListSecurityOption3)
    ], FormsFormsWatchesListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsWatchesListSecurityOption4)
    ], FormsFormsWatchesListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsWatchesListSecurityOption5)
    ], FormsFormsWatchesListSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsWatchesListSecurityOption6)
    ], FormsFormsWatchesListSecurity.prototype, "option6", void 0);
    return FormsFormsWatchesListSecurity;
}(SpeakeasyBase));
export { FormsFormsWatchesListSecurity };
var FormsFormsWatchesListRequest = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesListRequest, _super);
    function FormsFormsWatchesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FormsFormsWatchesListPathParams)
    ], FormsFormsWatchesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FormsFormsWatchesListQueryParams)
    ], FormsFormsWatchesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FormsFormsWatchesListSecurity)
    ], FormsFormsWatchesListRequest.prototype, "security", void 0);
    return FormsFormsWatchesListRequest;
}(SpeakeasyBase));
export { FormsFormsWatchesListRequest };
var FormsFormsWatchesListResponse = /** @class */ (function (_super) {
    __extends(FormsFormsWatchesListResponse, _super);
    function FormsFormsWatchesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FormsFormsWatchesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListWatchesResponse)
    ], FormsFormsWatchesListResponse.prototype, "listWatchesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FormsFormsWatchesListResponse.prototype, "statusCode", void 0);
    return FormsFormsWatchesListResponse;
}(SpeakeasyBase));
export { FormsFormsWatchesListResponse };
