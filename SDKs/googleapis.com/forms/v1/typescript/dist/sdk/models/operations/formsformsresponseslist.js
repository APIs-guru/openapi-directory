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
var FormsFormsResponsesListPathParams = /** @class */ (function (_super) {
    __extends(FormsFormsResponsesListPathParams, _super);
    function FormsFormsResponsesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=formId" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesListPathParams.prototype, "formId", void 0);
    return FormsFormsResponsesListPathParams;
}(SpeakeasyBase));
export { FormsFormsResponsesListPathParams };
var FormsFormsResponsesListQueryParams = /** @class */ (function (_super) {
    __extends(FormsFormsResponsesListQueryParams, _super);
    function FormsFormsResponsesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FormsFormsResponsesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FormsFormsResponsesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FormsFormsResponsesListQueryParams.prototype, "uploadProtocol", void 0);
    return FormsFormsResponsesListQueryParams;
}(SpeakeasyBase));
export { FormsFormsResponsesListQueryParams };
var FormsFormsResponsesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FormsFormsResponsesListSecurityOption1, _super);
    function FormsFormsResponsesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsResponsesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsResponsesListSecurityOption1.prototype, "oauth2c", void 0);
    return FormsFormsResponsesListSecurityOption1;
}(SpeakeasyBase));
export { FormsFormsResponsesListSecurityOption1 };
var FormsFormsResponsesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FormsFormsResponsesListSecurityOption2, _super);
    function FormsFormsResponsesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsResponsesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsResponsesListSecurityOption2.prototype, "oauth2c", void 0);
    return FormsFormsResponsesListSecurityOption2;
}(SpeakeasyBase));
export { FormsFormsResponsesListSecurityOption2 };
var FormsFormsResponsesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(FormsFormsResponsesListSecurityOption3, _super);
    function FormsFormsResponsesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FormsFormsResponsesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FormsFormsResponsesListSecurityOption3.prototype, "oauth2c", void 0);
    return FormsFormsResponsesListSecurityOption3;
}(SpeakeasyBase));
export { FormsFormsResponsesListSecurityOption3 };
var FormsFormsResponsesListSecurity = /** @class */ (function (_super) {
    __extends(FormsFormsResponsesListSecurity, _super);
    function FormsFormsResponsesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsResponsesListSecurityOption1)
    ], FormsFormsResponsesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsResponsesListSecurityOption2)
    ], FormsFormsResponsesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FormsFormsResponsesListSecurityOption3)
    ], FormsFormsResponsesListSecurity.prototype, "option3", void 0);
    return FormsFormsResponsesListSecurity;
}(SpeakeasyBase));
export { FormsFormsResponsesListSecurity };
var FormsFormsResponsesListRequest = /** @class */ (function (_super) {
    __extends(FormsFormsResponsesListRequest, _super);
    function FormsFormsResponsesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FormsFormsResponsesListPathParams)
    ], FormsFormsResponsesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FormsFormsResponsesListQueryParams)
    ], FormsFormsResponsesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FormsFormsResponsesListSecurity)
    ], FormsFormsResponsesListRequest.prototype, "security", void 0);
    return FormsFormsResponsesListRequest;
}(SpeakeasyBase));
export { FormsFormsResponsesListRequest };
var FormsFormsResponsesListResponse = /** @class */ (function (_super) {
    __extends(FormsFormsResponsesListResponse, _super);
    function FormsFormsResponsesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FormsFormsResponsesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListFormResponsesResponse)
    ], FormsFormsResponsesListResponse.prototype, "listFormResponsesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FormsFormsResponsesListResponse.prototype, "statusCode", void 0);
    return FormsFormsResponsesListResponse;
}(SpeakeasyBase));
export { FormsFormsResponsesListResponse };
