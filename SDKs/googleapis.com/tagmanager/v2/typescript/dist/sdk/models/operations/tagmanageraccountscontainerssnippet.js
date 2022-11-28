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
var TagmanagerAccountsContainersSnippetPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersSnippetPathParams, _super);
    function TagmanagerAccountsContainersSnippetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersSnippetPathParams.prototype, "path", void 0);
    return TagmanagerAccountsContainersSnippetPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersSnippetPathParams };
var TagmanagerAccountsContainersSnippetQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersSnippetQueryParams, _super);
    function TagmanagerAccountsContainersSnippetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersSnippetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersSnippetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersSnippetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersSnippetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersSnippetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersSnippetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersSnippetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersSnippetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersSnippetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersSnippetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersSnippetQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersSnippetQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersSnippetQueryParams };
var TagmanagerAccountsContainersSnippetSecurityOption1 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersSnippetSecurityOption1, _super);
    function TagmanagerAccountsContainersSnippetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersSnippetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersSnippetSecurityOption1.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersSnippetSecurityOption1;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersSnippetSecurityOption1 };
var TagmanagerAccountsContainersSnippetSecurityOption2 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersSnippetSecurityOption2, _super);
    function TagmanagerAccountsContainersSnippetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersSnippetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersSnippetSecurityOption2.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersSnippetSecurityOption2;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersSnippetSecurityOption2 };
var TagmanagerAccountsContainersSnippetSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersSnippetSecurity, _super);
    function TagmanagerAccountsContainersSnippetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersSnippetSecurityOption1)
    ], TagmanagerAccountsContainersSnippetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersSnippetSecurityOption2)
    ], TagmanagerAccountsContainersSnippetSecurity.prototype, "option2", void 0);
    return TagmanagerAccountsContainersSnippetSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersSnippetSecurity };
var TagmanagerAccountsContainersSnippetRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersSnippetRequest, _super);
    function TagmanagerAccountsContainersSnippetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersSnippetPathParams)
    ], TagmanagerAccountsContainersSnippetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersSnippetQueryParams)
    ], TagmanagerAccountsContainersSnippetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersSnippetSecurity)
    ], TagmanagerAccountsContainersSnippetRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersSnippetRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersSnippetRequest };
var TagmanagerAccountsContainersSnippetResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersSnippetResponse, _super);
    function TagmanagerAccountsContainersSnippetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersSnippetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetContainerSnippetResponse)
    ], TagmanagerAccountsContainersSnippetResponse.prototype, "getContainerSnippetResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersSnippetResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersSnippetResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersSnippetResponse };
